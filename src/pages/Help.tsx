import './Help.css';

function Help() {
  return (
    <div className="help">
      <h1>聯絡與協助</h1>

      <section className="hotline-section">
        <div className="hotline-card">
          <h2>長照專線</h2>
          <p className="phone-number">1966</p>
          <p className="description">
            提供長照服務申請諮詢、長照資源轉介等服務
          </p>
          <p className="hours">服務時間：週一至週五 08:30-12:00、13:30-17:30</p>
        </div>
      </section>

      <section className="faq-section">
        <h2>常見問題</h2>

        <div className="faq-list">
          <details className="faq-item">
            <summary>什麼人可以申請長照服務？</summary>
            <p>
              符合以下條件之一即可申請：<br/>
              1. 65歲以上失能老人<br/>
              2. 55歲以上失能原住民<br/>
              3. 50歲以上失智症者<br/>
              4. 任何年齡的身心障礙者（領有身心障礙證明或手冊）
            </p>
          </details>

          <details className="faq-item">
            <summary>如何申請長照服務？</summary>
            <p>
              申請方式：<br/>
              1. 撥打長照專線 1966<br/>
              2. 向各縣市長期照顧管理中心提出申請<br/>
              3. 透過村里長或村里幹事協助申請<br/>
              4. 出院準備服務轉介
            </p>
          </details>

          <details className="faq-item">
            <summary>長照服務需要付費嗎？</summary>
            <p>
              依據家庭經濟狀況給予不同補助比例：<br/>
              - 低收入戶：政府全額補助<br/>
              - 中低收入戶：政府補助 90%<br/>
              - 一般戶：政府補助 70%或 84%（依失能等級而定）
            </p>
          </details>

          <details className="faq-item">
            <summary>ABC 據點有什麼不同？</summary>
            <p>
              A級（社區整合型服務中心）：提供個案管理，整合資源<br/>
              B級（複合型服務中心）：提供日照、居家服務等<br/>
              C級（巷弄長照站）：提供預防及延緩失能活動
            </p>
          </details>

          <details className="faq-item">
            <summary>如何查詢附近的長照據點？</summary>
            <p>
              可透過以下方式查詢：<br/>
              1. 使用本網站的「長照據點地圖」功能<br/>
              2. 撥打 1966 長照專線詢問<br/>
              3. 至衛生福利部長照服務資源地理地圖查詢
            </p>
          </details>
        </div>
      </section>

      <section className="contact-section">
        <h2>機構查詢入口</h2>
        <div className="contact-links">
          <a href="https://ltcpap.mohw.gov.tw/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="link-icon">🔍</span>
            <span>長照服務資源地理地圖</span>
          </a>
          <a href="https://1966.gov.tw/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="link-icon">🌐</span>
            <span>長照專線官方網站</span>
          </a>
        </div>
      </section>

      <section className="accessibility-section">
        <h2>無障礙使用說明</h2>
        <div className="accessibility-info">
          <p>本網站遵循無障礙網頁設計原則，提供以下功能：</p>
          <ul>
            <li>✓ 支援鍵盤導航</li>
            <li>✓ 高對比度顯示</li>
            <li>✓ 清晰易讀的字體</li>
            <li>✓ 語意化的 HTML 結構</li>
            <li>✓ 螢幕閱讀器友善</li>
          </ul>
          <p>若您在使用上遇到任何問題，歡迎撥打 1966 反映。</p>
        </div>
      </section>
    </div>
  );
}

export default Help;
