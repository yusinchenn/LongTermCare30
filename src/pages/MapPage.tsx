import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import './MapPage.css';

// 修復 Leaflet 預設圖標問題
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface FacilityData {
  機構名稱: string;
  機構代碼: string;
  機構種類: string;
  縣市: string;
  區: string;
  地址全址: string;
  經度: string;
  緯度: string;
  O_ABC: string;
  特約服務項目: string;
  特約縣市: string;
  特約區域: string;
  機構電話: string;
  電子郵件: string;
  機構負責人姓名: string;
  特約起日: string;
  特約迄日: string;
  最後異動時間: string;
  縣市名稱?: string;
}

// Haversine 公式計算兩點距離（公里）
function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // 地球半徑（公里）
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function MapPage() {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<L.MarkerClusterGroup | null>(null);
  const userMarkerRef = useRef<L.Marker | null>(null);

  const [dataCache, setDataCache] = useState<FacilityData[]>([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [cities, setCities] = useState<string[]>([]);
  const [filteredCount, setFilteredCount] = useState(0);

  // 地址搜尋相關狀態
  const [searchAddress, setSearchAddress] = useState('');
  const [searchRadius, setSearchRadius] = useState<number>(3); // 預設 3 公里
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState('');

  // 初始化地圖
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current, {
      zoomControl: false,
    }).setView([23.7, 120.9], 7);

    L.control.zoom({ position: 'bottomleft' }).addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap 貢獻者',
    }).addTo(map);

    mapRef.current = map;

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // 載入資料
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}abc.json`)
      .then((res) => res.json())
      .then((data: FacilityData[]) => {
        // 從地址擷取縣市名稱
        const processedData = data.map((d) => ({
          ...d,
          縣市名稱: d.地址全址 ? d.地址全址.substring(0, 3) : '未知',
        }));

        setDataCache(processedData);

        // 生成縣市列表
        const citySet = new Set(
          processedData.map((d) => d.縣市名稱).filter(Boolean)
        );
        setCities(Array.from(citySet).sort());
      })
      .catch((error) => {
        console.error('載入資料失敗:', error);
      });
  }, []);

  // 地址搜尋函數
  const handleAddressSearch = async () => {
    if (!searchAddress.trim()) {
      setSearchError('請輸入地址');
      return;
    }

    setIsSearching(true);
    setSearchError('');

    try {
      // 使用 OpenStreetMap Nominatim API 進行地址轉換
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          searchAddress
        )}&countrycodes=tw&limit=1`,
        {
          headers: {
            'Accept-Language': 'zh-TW',
          },
        }
      );

      const data = await response.json();

      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        const newLocation = { lat: parseFloat(lat), lng: parseFloat(lon) };
        setUserLocation(newLocation);

        // 移動地圖到搜尋位置
        if (mapRef.current) {
          mapRef.current.setView([newLocation.lat, newLocation.lng], 14);
        }
      } else {
        setSearchError('找不到此地址，請嘗試其他關鍵字');
      }
    } catch (error) {
      console.error('地址搜尋失敗:', error);
      setSearchError('搜尋失敗，請稍後再試');
    } finally {
      setIsSearching(false);
    }
  };

  // 清除搜尋
  const clearSearch = () => {
    setSearchAddress('');
    setUserLocation(null);
    setSearchError('');
    if (mapRef.current) {
      mapRef.current.setView([23.7, 120.9], 7);
    }
  };

  // 渲染標記
  useEffect(() => {
    if (!mapRef.current || dataCache.length === 0) return;

    // 清除舊的標記
    if (markersRef.current) {
      mapRef.current.removeLayer(markersRef.current);
    }

    // 清除舊的使用者位置標記
    if (userMarkerRef.current) {
      mapRef.current.removeLayer(userMarkerRef.current);
      userMarkerRef.current = null;
    }

    // 建立新的標記群組
    const markers = L.markerClusterGroup();

    // 篩選資料
    let filtered = dataCache.filter(
      (d) =>
        (!selectedCity || d.縣市名稱 === selectedCity) &&
        (!selectedGrade || d.O_ABC === selectedGrade)
    );

    // 如果有使用者位置，進一步篩選距離
    if (userLocation) {
      filtered = filtered.filter((d) => {
        const lat = parseFloat(d.緯度);
        const lng = parseFloat(d.經度);
        if (isNaN(lat) || isNaN(lng)) return false;
        const distance = calculateDistance(
          userLocation.lat,
          userLocation.lng,
          lat,
          lng
        );
        return distance <= searchRadius;
      });

      // 加入使用者位置標記
      const userIcon = L.divIcon({
        className: 'user-location-marker',
        html: '<div class="user-marker-inner"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      });

      const userMarker = L.marker([userLocation.lat, userLocation.lng], {
        icon: userIcon,
      });
      userMarker.bindPopup('<b>您搜尋的位置</b>');
      userMarker.addTo(mapRef.current);
      userMarkerRef.current = userMarker;
    }

    setFilteredCount(filtered.length);

    // 加入標記
    filtered.forEach((d) => {
      const lat = parseFloat(d.緯度);
      const lng = parseFloat(d.經度);

      if (!isNaN(lat) && !isNaN(lng)) {
        const distance = userLocation
          ? calculateDistance(userLocation.lat, userLocation.lng, lat, lng)
          : null;

        const marker = L.marker([lat, lng]);
        marker.bindPopup(`
          <div style="min-width: 200px;">
            <b style="font-size: 16px; color: #2aa9b4;">${d.機構名稱}</b><br><br>
            ${distance !== null ? `<b>距離：</b>${distance.toFixed(2)} 公里<br>` : ''}
            <b>特約服務項目：</b>${d.特約服務項目 || '無'}<br>
            <b>地址：</b>${d.地址全址}<br>
            <b>電話：</b>${d.機構電話 || '無'}<br>
            <b>類別：</b>${d.O_ABC || '無'}
          </div>
        `);
        markers.addLayer(marker);
      }
    });

    mapRef.current.addLayer(markers);
    markersRef.current = markers;
  }, [dataCache, selectedCity, selectedGrade, userLocation, searchRadius]);

  return (
    <div className="map-page">
      <h1>長照據點地圖</h1>

      <div className="map-container">
        <aside className="filter-panel">
          <h2>篩選條件</h2>

          <div className="filter-group">
            <label>縣市</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">全部</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>據點等級</label>
            <div className="grade-buttons">
              <button
                className={selectedGrade === '' ? 'active' : ''}
                onClick={() => setSelectedGrade('')}
              >
                全部
              </button>
              <button
                className={selectedGrade === 'A' ? 'active' : ''}
                onClick={() => setSelectedGrade('A')}
              >
                A 級
              </button>
              <button
                className={selectedGrade === 'B' ? 'active' : ''}
                onClick={() => setSelectedGrade('B')}
              >
                B 級
              </button>
              <button
                className={selectedGrade === 'C' ? 'active' : ''}
                onClick={() => setSelectedGrade('C')}
              >
                C 級
              </button>
            </div>
          </div>

          <div className="filter-group address-search">
            <label>地址搜尋</label>
            <div className="search-input-group">
              <input
                type="text"
                placeholder="輸入地址尋找附近據點..."
                value={searchAddress}
                onChange={(e) => setSearchAddress(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddressSearch()}
              />
              <button
                className="search-btn"
                onClick={handleAddressSearch}
                disabled={isSearching}
              >
                {isSearching ? '搜尋中...' : '搜尋'}
              </button>
            </div>
            {searchError && <p className="search-error">{searchError}</p>}

            <label>搜尋範圍</label>
            <div className="radius-buttons">
              {[1, 3, 5, 10].map((km) => (
                <button
                  key={km}
                  className={searchRadius === km ? 'active' : ''}
                  onClick={() => setSearchRadius(km)}
                >
                  {km} km
                </button>
              ))}
            </div>

            {userLocation && (
              <button className="clear-search-btn" onClick={clearSearch}>
                清除搜尋
              </button>
            )}
          </div>

          <div className="filter-info">
            <p>
              顯示 {filteredCount} 個據點
              {userLocation && ` (${searchRadius} 公里內)`}
            </p>
          </div>
        </aside>

        <div className="map-display">
          <div ref={mapContainerRef} className="leaflet-map"></div>
        </div>
      </div>

      <section className="abc-system">
        <h2>ABC 三級據點介紹</h2>
        <div className="abc-cards">
          <div className="abc-card a-level">
            <h3>A 級：社區整合型服務中心</h3>
            <p>提供個案管理服務，整合社區照顧資源，協助民眾取得所需的長照服務。</p>
          </div>
          <div className="abc-card b-level">
            <h3>B 級：複合型服務中心</h3>
            <p>提供日間照顧、居家服務、喘息服務等多元照顧服務。</p>
          </div>
          <div className="abc-card c-level">
            <h3>C 級：巷弄長照站</h3>
            <p>提供預防及延緩失能的健康促進活動，讓長者在社區中活躍老化。</p>
          </div>
        </div>
      </section>

      <section className="site-list">
        <h2>使用說明</h2>
        <ul className="info-list">
          <li>使用左側篩選條件選擇縣市或據點等級</li>
          <li>點擊地圖上的標記可查看詳細資訊</li>
          <li>使用左下角的 + / - 按鈕放大或縮小地圖</li>
          <li>標記群集會自動整合鄰近的據點，放大地圖可查看個別據點</li>
        </ul>
      </section>
    </div>
  );
}

export default MapPage;
