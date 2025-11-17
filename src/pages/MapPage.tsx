import './MapPage.css';

function MapPage() {
  return (
    <div className="map-page">
      <h1>長照據點地圖</h1>

      <div className="map-container">
        <aside className="filter-panel">
          <h2>篩選條件</h2>

          <div className="filter-group">
            <label>縣市</label>
            <select>
              <option value="">請選擇縣市</option>
              <option value="台北市">台北市</option>
              <option value="新北市">新北市</option>
              <option value="桃園市">桃園市</option>
              <option value="台中市">台中市</option>
              <option value="台南市">台南市</option>
              <option value="高雄市">高雄市</option>
            </select>
          </div>

          <div className="filter-group">
            <label>據點等級</label>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" /> A 級（社區整合型）
              </label>
              <label>
                <input type="checkbox" /> B 級（複合型）
              </label>
              <label>
                <input type="checkbox" /> C 級（巷弄長照站）
              </label>
            </div>
          </div>

          <button className="apply-filter">套用篩選</button>
        </aside>

        <div className="map-display">
          <div className="map-placeholder">
            <p>🗺️ 地圖將顯示在這裡</p>
            <p className="note">（稍後將整合 Leaflet.js 地圖）</p>
          </div>
        </div>
      </div>

      <section className="site-list">
        <h2>據點列表</h2>
        <p className="info-text">選擇篩選條件後，將顯示符合的長照據點</p>
      </section>
    </div>
  );
}

export default MapPage;
