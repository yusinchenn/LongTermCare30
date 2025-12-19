import './About.css';

function About() {
  return (
    <div className="about">
      <section className="hero">
        <div className="hero-badge">2026 正式啟動</div>
        <h1>打造健康台灣<br /><span className="highlight">長照 3.0</span> 全面升級</h1>
        <p className="hero-desc">
          從「在地老化」邁向「醫養合一」，結合智慧科技與家庭支持，<br />
          為超高齡社會建立更完善的照顧網絡。
        </p>
      </section>

      <section className="intro">
        <h2>什麼是長照 3.0？</h2>
        <p>
          隨著台灣即將進入超高齡社會，衛福部規劃於 2026 年（民國 115 年）正式推動「長照 3.0」。
          相較於長照 2.0 著重於服務據點的普及（ABC 模式），3.0 更強調<strong>「醫療與照顧的整合」</strong>、
          <strong>「智慧科技導入」</strong>以及<strong>「強化重症與家庭支持」</strong>。
          願景是打造一個結合醫療、長照、社福與家庭的連續性照顧體系。
        </p>
      </section>

      <section className="strategies">
        <h2>衛福部規劃八大重點目標</h2>
        <div className="strategy-cards">
          <div className="strategy-card orange">
            <h3>醫養合一</h3>
            <p>強化醫療與長照無縫接軌，推動「在宅責任醫療網」，出院即啟動返家照顧計畫。</p>
          </div>
          <div className="strategy-card teal">
            <h3>智慧科技導入</h3>
            <p>推動智慧輔具租賃（3年6萬額度），導入 AI 監測與照顧紀錄，減輕人力負擔。</p>
          </div>
          <div className="strategy-card blue">
            <h3>強化家庭支持</h3>
            <p>放寬外籍看護家庭使用社區服務，提供醫院共聘護佐補助，增加喘息服務。</p>
          </div>
          <div className="strategy-card rose">
            <h3>提升機構量能</h3>
            <p>增設夜間照顧與緊急安置床位，改善住宿式機構品質，縮短城鄉差距。</p>
          </div>
          <div className="strategy-card indigo">
            <h3>健康促進與共生</h3>
            <p>擴大社區據點，納入年輕型失智者，打造不分年齡的共生社區。</p>
          </div>
          <div className="strategy-card emerald">
            <h3>積極復能</h3>
            <p>針對急性後期（PAC）個案，在日照與居家場域導入功能性復能訓練。</p>
          </div>
          <div className="strategy-card violet">
            <h3>人力專業發展</h3>
            <p>建立照服員職級與分級派工制度，擴大中階技術人力培訓，提升專業形象。</p>
          </div>
          <div className="strategy-card gray">
            <h3>落實安寧善終</h3>
            <p>推廣預立醫療照護諮商（ACP），提供特定族群免費諮商，尊嚴善終。</p>
          </div>
        </div>
      </section>

      <section className="timeline">
        <h2>台灣長照政策演進</h2>
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-year">2007</div>
            <div className="timeline-content">
              <span className="timeline-tag">起步期</span>
              <h3>長照 1.0 十年計畫</h3>
              <p>建立基礎長照體系，主要針對低收入戶與重度失能者，服務項目較少。</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2017</div>
            <div className="timeline-content">
              <span className="timeline-tag">擴張期</span>
              <h3>長照 2.0 正式上路</h3>
              <p>擴大服務對象與項目，建立 ABC 社區整體照顧模式，預算大幅增加。</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2024</div>
            <div className="timeline-content">
              <span className="timeline-tag">規劃期</span>
              <h3>提出「健康台灣」願景</h3>
              <p>賴清德總統競選期間提出長照 3.0 構想，強調醫養合一與永續發展。</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2025.09</div>
            <div className="timeline-content">
              <span className="timeline-tag">轉型期</span>
              <h3>3.0 第一階段啟動</h3>
              <p>放寬聘僱外籍看護家庭使用社區照顧服務；擴大交通與營養服務額度。</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2026.01</div>
            <div className="timeline-content">
              <span className="timeline-tag">深化期</span>
              <h3>3.0 第二階段：對象擴大</h3>
              <p>納入年輕型失智者、急性後期整合照護（PAC）對象，強化醫療銜接。</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2026.07</div>
            <div className="timeline-content">
              <span className="timeline-tag">智慧期</span>
              <h3>3.0 第三階段：智慧導入</h3>
              <p>智慧科技輔具租賃新制上路，提供每人 3 年 6 萬元額度，全面推動智慧照顧。</p>
            </div>
          </div>
        </div>
      </section>

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

      <section className="comparison">
        <h2>長照 2.0 vs 長照 3.0 超級比一比</h2>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>比較項目</th>
                <th className="col-2">長照 2.0</th>
                <th className="col-3">長照 3.0 (升級版)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="row-header">核心理念</td>
                <td>在地老化、社區照顧 (ABC據點)</td>
                <td className="highlight-cell">醫養合一、健康台灣</td>
              </tr>
              <tr>
                <td className="row-header">服務對象</td>
                <td>65歲以上失能、50歲以上失智等</td>
                <td>新增 <span className="badge">年輕型失智</span>、急性後期(PAC)患者</td>
              </tr>
              <tr>
                <td className="row-header">家庭支持</td>
                <td>有限度的喘息服務</td>
                <td>放寬外籍看護家庭使用社區服務、喘息升級</td>
              </tr>
              <tr>
                <td className="row-header">科技應用</td>
                <td>少量試辦</td>
                <td>全面導入 <span className="badge">AI與智慧輔具租賃</span> (最高6萬補助)</td>
              </tr>
              <tr>
                <td className="row-header">醫療銜接</td>
                <td>照管專員評估，銜接較弱</td>
                <td>出院準備計畫、在宅責任醫療網</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="services-info">
        <h2>主要服務內容</h2>
        <ul>
          <li>照顧及專業服務</li>
          <li>交通接送服務</li>
          <li>輔具及居家無障礙環境改善服務</li>
          <li>喘息服務</li>
          <li>預防及延緩失能服務</li>
        </ul>
      </section>

      <section className="references">
        <h2>參考資料索引</h2>
        <div className="reference-links">
          <a href="https://www.mohw.gov.tw/cp-16-82028-1.html" target="_blank" rel="noopener noreferrer" className="reference-link">
            <div className="reference-content">
              <h4>衛福部：推動長照「三升五顧」智慧照顧全上路</h4>
              <p>衛生福利部官方新聞稿 (2025)</p>
            </div>
          </a>
          <a href="https://www.ey.gov.tw/Page/5A8A0CB5B41DA11E/fcf4a012-8aca-4dae-b868-3a848fcaafe7" target="_blank" rel="noopener noreferrer" className="reference-link">
            <div className="reference-content">
              <h4>行政院：實現「健康老化、在地安老」願景</h4>
              <p>行政院重要政策說明</p>
            </div>
          </a>
          <a href="https://www.ankecare.com/article/3561-2025-03-13-08-50-32" target="_blank" rel="noopener noreferrer" className="reference-link">
            <div className="reference-content">
              <h4>長照 3.0 明年啟動 衛福部詳細規劃</h4>
              <p>AnkeCare 創新長照新聞</p>
            </div>
          </a>
        </div>
        <p className="disclaimer">
          資料整理時間：2025年12月。本網頁為資訊整理用途，具體政策與補助金額請以衛生福利部最新公告為準。
        </p>
      </section>

      <section className="contact-info">
        <h2>需要協助？</h2>
        <p className="hotline">撥打長照專線：<strong>1966</strong></p>
        <p>將有專人為您提供諮詢與協助</p>
      </section>
    </div>
  );
}

export default About;
