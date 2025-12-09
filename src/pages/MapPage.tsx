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

function MapPage() {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<L.MarkerClusterGroup | null>(null);

  const [dataCache, setDataCache] = useState<FacilityData[]>([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [cities, setCities] = useState<string[]>([]);
  const [filteredCount, setFilteredCount] = useState(0);

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
    fetch('/abc.json')
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

  // 渲染標記
  useEffect(() => {
    if (!mapRef.current || dataCache.length === 0) return;

    // 清除舊的標記
    if (markersRef.current) {
      mapRef.current.removeLayer(markersRef.current);
    }

    // 建立新的標記群組
    const markers = L.markerClusterGroup();

    // 篩選資料
    const filtered = dataCache.filter(
      (d) =>
        (!selectedCity || d.縣市名稱 === selectedCity) &&
        (!selectedGrade || d.O_ABC === selectedGrade)
    );

    setFilteredCount(filtered.length);

    // 加入標記
    filtered.forEach((d) => {
      const lat = parseFloat(d.緯度);
      const lng = parseFloat(d.經度);

      if (!isNaN(lat) && !isNaN(lng)) {
        const marker = L.marker([lat, lng]);
        marker.bindPopup(`
          <div style="min-width: 200px;">
            <b style="font-size: 16px; color: #2aa9b4;">${d.機構名稱}</b><br><br>
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
  }, [dataCache, selectedCity, selectedGrade]);

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

          <div className="filter-info">
            <p>顯示 {filteredCount} 個據點</p>
          </div>
        </aside>

        <div className="map-display">
          <div ref={mapContainerRef} className="leaflet-map"></div>
        </div>
      </div>

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
