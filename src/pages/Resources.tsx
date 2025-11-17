import './Resources.css';

function Resources() {
  return (
    <div className="resources">
      <h1>長照資源</h1>

      <section className="resource-section">
        <h2>官方服務連結</h2>
        <div className="resource-grid">
          <a href="https://1966.gov.tw/" target="_blank" rel="noopener noreferrer" className="resource-card">
            <h3>📞 長照專線 1966</h3>
            <p>長照服務申請與諮詢</p>
          </a>
          <a href="https://ltcpap.mohw.gov.tw/" target="_blank" rel="noopener noreferrer" className="resource-card">
            <h3>🏥 長照服務資源地理地圖</h3>
            <p>查詢全國長照服務資源</p>
          </a>
          <a href="https://www.mohw.gov.tw/" target="_blank" rel="noopener noreferrer" className="resource-card">
            <h3>🏛️ 衛生福利部</h3>
            <p>最新長照政策與公告</p>
          </a>
        </div>
      </section>

      <section className="resource-section">
        <h2>試算工具</h2>
        <div className="resource-grid">
          <a href="#" className="resource-card tool-card">
            <h3>💰 長照補助試算</h3>
            <p>計算您可獲得的長照補助金額</p>
          </a>
          <a href="#" className="resource-card tool-card">
            <h3>📊 失能等級評估</h3>
            <p>了解長照需要等級</p>
          </a>
        </div>
      </section>

      <section className="resource-section">
        <h2>說明文件與懶人包</h2>
        <div className="document-list">
          <div className="document-item">
            <span className="doc-icon">📄</span>
            <div className="doc-info">
              <h3>長照 3.0 服務申請流程</h3>
              <p>詳細說明如何申請長照服務</p>
            </div>
          </div>
          <div className="document-item">
            <span className="doc-icon">📄</span>
            <div className="doc-info">
              <h3>補助標準說明</h3>
              <p>各項補助金額與申請資格</p>
            </div>
          </div>
          <div className="document-item">
            <span className="doc-icon">📄</span>
            <div className="doc-info">
              <h3>長照服務項目介紹</h3>
              <p>完整的服務項目說明</p>
            </div>
          </div>
        </div>
      </section>

      <section className="resource-section">
        <h2>教學影片</h2>
        <p className="coming-soon">📹 教學影片即將上線...</p>
      </section>
    </div>
  );
}

export default Resources;
