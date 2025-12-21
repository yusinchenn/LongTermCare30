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
          <a href="https://www.familycares.com.tw/try.php" className="resource-card tool-card">
            <h3>💰 長照補助試算</h3>
            <p>計算您可獲得的長照補助金額</p>
          </a>
          <a href="https://www.mohw.gov.tw/dl-15878-85fb3fa5-9172-431a-986e-35d16c6ff701.html" className="resource-card tool-card">
            <h3>📊 失能等級評估</h3>
            <p>了解長照需要等級</p>
          </a>
        </div>
      </section>

      <section className="resource-section">
        <h2>說明文件與懶人包</h2>
        <div className="document-list">
          <a href="https://1966.gov.tw/LTC/cp-6533-70777-207.html" target="_blank" rel="noopener noreferrer" className="document-item">
            <span className="doc-icon">📄</span>
            <div className="doc-info">
              <h3>長照 3.0 服務申請流程</h3>
              <p>詳細說明如何申請長照服務</p>
            </div>
          </a>
          <a href="https://www.mohw.gov.tw/cp-16-74655-1.html" target="_blank" rel="noopener noreferrer" className="document-item">
            <span className="doc-icon">📄</span>
            <div className="doc-info">
              <h3>補助標準說明</h3>
              <p>各項補助金額與申請資格</p>
            </div>
          </a>
          <a href="https://1966.gov.tw/LTC/lp-6464-207-xCat-050.html" target="_blank" rel="noopener noreferrer" className="document-item">
            <span className="doc-icon">📄</span>
            <div className="doc-info">
              <h3>長照服務項目介紹</h3>
              <p>完整的服務項目說明</p>
            </div>
          </a>
        </div>
      </section>

      <section className="resource-section">
        <h2>教學影片</h2>
        <div className="video-grid">
          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/sniRBh13-JI?si=QQSfNs0riGwXF7sL"
                title="長照2.0到3.0：如何避免成為下一個照顧悲劇？"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <h3>長照2.0到3.0：如何避免成為下一個照顧悲劇？｜生活面面觀 健康愛台灣｜廣編企劃</h3>
          </div>
          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/YzTIT2Xk5JQ?si=AYAsi1vdaNTattkD"
                title="「長照3.0」9月起3階段上路 預估73萬人受惠"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <h3>「長照3.0」9月起3階段上路 預估73萬人受惠｜20250620 公視晚間新聞</h3>
          </div>
          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/28Cm1gCAlmM?si=uCzehhue9gax3Oh7"
                title="【長照3.0】政策重點！誰能受惠？三大政策一次搞懂"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <h3>【長照3.0】政策重點！誰能受惠？三大政策一次搞懂｜照顧攏底家</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;
