import { useState } from 'react';
import './About.css';
import service1 from '../assets/service_1.png';
import service2 from '../assets/service_2.png';
import service3 from '../assets/service_3.png';
import service4 from '../assets/service_4.png';
import service5 from '../assets/service_5.png';
import service6 from '../assets/service_6.png';
import service7 from '../assets/service_7.png';
import service8 from '../assets/service_8.png';

function About() {
  const [currentStrategy, setCurrentStrategy] = useState(0);

  const timelineItems = [
    { year: '2007', tag: '起步期', title: '長照 1.0 十年計畫', description: '建立基礎長照體系，主要針對低收入戶與重度失能者，服務項目較少。' },
    { year: '2017', tag: '擴張期', title: '長照 2.0 正式上路', description: '擴大服務對象與項目，建立 ABC 社區整體照顧模式，預算大幅增加。' },
    { year: '2024', tag: '規劃期', title: '提出「健康台灣」願景', description: '賴清德總統競選期間提出長照 3.0 構想，強調醫養合一與永續發展。' },
    { year: '2025.09', tag: '轉型期', title: '3.0 第一階段啟動', description: '放寬聘僱外籍看護家庭使用社區照顧服務；擴大交通與營養服務額度。' },
    { year: '2026.01', tag: '深化期', title: '3.0 第二階段：對象擴大', description: '納入年輕型失智者、急性後期整合照護（PAC）對象，強化醫療銜接。' },
    { year: '2026.07', tag: '智慧期', title: '3.0 第三階段：智慧導入', description: '智慧科技輔具租賃新制上路，提供每人 3 年 6 萬元額度，全面推動智慧照顧。' },
  ];

  const strategyItems = [
    { name: '醫養合一', image: service1, description: '強化醫療與長照無縫接軌，推動「在宅責任醫療網」，出院即啟動返家照顧計畫。' },
    { name: '智慧科技導入', image: service2, description: '推動智慧輔具租賃（3年6萬額度），導入 AI 監測與照顧紀錄，減輕人力負擔。' },
    { name: '強化家庭支持', image: service3, description: '放寬外籍看護家庭使用社區服務，提供醫院共聘護佐補助，增加喘息服務。' },
    { name: '提升機構量能', image: service4, description: '增設夜間照顧與緊急安置床位，改善住宿式機構品質，縮短城鄉差距。' },
    { name: '健康促進與共生', image: service5, description: '擴大社區據點，納入年輕型失智者，打造不分年齡的共生社區。' },
    { name: '積極復能', image: service6, description: '針對急性後期（PAC）個案，在日照與居家場域導入功能性復能訓練。' },
    { name: '人力專業發展', image: service7, description: '建立照服員職級與分級派工制度，擴大中階技術人力培訓，提升專業形象。' },
    { name: '落實安寧善終', image: service8, description: '推廣預立醫療照護諮商（ACP），提供特定族群免費諮商，尊嚴善終。' },
  ];

  const prevStrategy = () => {
    setCurrentStrategy((prev) => (prev === 0 ? strategyItems.length - 1 : prev - 1));
  };

  const nextStrategy = () => {
    setCurrentStrategy((prev) => (prev === strategyItems.length - 1 ? 0 : prev + 1));
  };
  const navItems = [
    { id: 'hero', label: '長照 3.0' },
    { id: 'intro', label: '什麼是長照 3.0' },
    { id: 'strategies', label: '八大重點目標' },
    { id: 'timeline', label: '政策演進' },
    { id: 'comparison', label: '2.0 vs 3.0' },
    { id: 'eligibility', label: '申請資格' },
    { id: 'process', label: '申請流程' },
    { id: 'subsidy', label: '補助額度' },
    { id: 'preparation', label: '申請準備' },
    { id: 'references', label: '參考資料' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="about">
      <nav className="about-sidebar">
        <ul className="sidebar-nav">
          {navItems.map((item) => (
            <li key={item.id}>
              <button onClick={() => scrollToSection(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="about-content">
      <section className="hero" id="hero">
        <div className="hero-badge">2026 正式啟動</div>
        <h1>打造健康台灣<br /><span className="highlight">長照 3.0</span> 全面升級</h1>
        <p className="hero-desc">
          從「在地老化」邁向「醫養合一」，結合智慧科技與家庭支持，<br />
          為超高齡社會建立更完善的照顧網絡。
        </p>
      </section>

      <section className="intro" id="intro">
        <h2>什麼是長照 3.0？</h2>
        <p>
          隨著台灣即將進入超高齡社會，衛福部規劃於 2026 年（民國 115 年）正式推動「長照 3.0」。
          相較於長照 2.0 著重於服務據點的普及（ABC 模式），3.0 更強調<strong>「醫療與照顧的整合」</strong>、
          <strong>「智慧科技導入」</strong>以及<strong>「強化重症與家庭支持」</strong>。
          願景是打造一個結合醫療、長照、社福與家庭的連續性照顧體系。
        </p>
      </section>

      <section className="strategies" id="strategies">
        <h2>3.0 八大重點目標</h2>
        <div className="strategy-carousel">
          <button className="carousel-btn prev" onClick={prevStrategy} aria-label="上一個">
            &lt;
          </button>
          <div className="strategy-card-carousel" key={currentStrategy}>
            <h3>{strategyItems[currentStrategy].name}</h3>
            <img src={strategyItems[currentStrategy].image} alt={strategyItems[currentStrategy].name} />
            <p>{strategyItems[currentStrategy].description}</p>
          </div>
          <button className="carousel-btn next" onClick={nextStrategy} aria-label="下一個">
            &gt;
          </button>
        </div>
        <div className="carousel-indicators">
          {strategyItems.map((_, index) => (
            <button
              key={index}
              className={`line ${index === currentStrategy ? 'active' : ''}`}
              onClick={() => setCurrentStrategy(index)}
              aria-label={`前往第 ${index + 1} 項`}
            />
          ))}
        </div>
      </section>

      <section className="timeline" id="timeline">
        <h2>台灣長照政策演進</h2>
        <div className="accordion-timeline">
          {timelineItems.map((item, index) => (
            <div className="accordion-item" key={index}>
              <div className="accordion-header">
                <span className="accordion-year">{item.year}</span>
                <span className="accordion-tag">{item.tag}</span>
                <div className="accordion-text-container">
                  <span className="accordion-title">{item.title}</span>
                  <span className="accordion-desc">{item.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="comparison" id="comparison">
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

      <section className="eligibility" id="eligibility">
        <h2>申請資格</h2>
        <p className="section-desc">符合以下任一條件者，經照管專員評估後即可申請長照服務：</p>
        <div className="eligibility-table">
          <table>
            <thead>
              <tr>
                <th>申請類別</th>
                <th>資格說明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="row-header">65歲以上失能者</td>
                <td>由照管專員評估生活自理功能，確認有照顧需求者</td>
              </tr>
              <tr>
                <td className="row-header">55歲以上原住民失能者</td>
                <td>原住民可較早進入長照資源門檻，提前獲得照護支持</td>
              </tr>
              <tr>
                <td className="row-header">50歲以上失智症者</td>
                <td>包含失智但尚未達 65 歲者，可提早使用長照服務</td>
              </tr>
              <tr>
                <td className="row-header">全年齡失智且失能者</td>
                <td>不受年齡限制，同時具有失智與失能狀況者皆可申請</td>
              </tr>
              <tr>
                <td className="row-header">急性後期整合照護對象（PAC）</td>
                <td>出院後需要中期照護支持者，銜接醫療與長照服務</td>
              </tr>
              <tr>
                <td className="row-header">身心障礙者</td>
                <td>持有身心障礙手冊且有照顧需求者</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="note">實際資格需經照管專員評估判定失能等級，才能核定可使用的長照服務與補助額度。</p>
      </section>

      <section className="process" id="process">
        <h2>申請流程</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-connector"></div>
            <div className="step-number">1</div>
            <h3>提出申請</h3>
            <p>撥打長照專線 <strong>1966</strong>，或聯絡當地長期照顧管理中心申請。住院者可由醫院出院準備團隊協助。</p>
          </div>
          <div className="process-step">
            <div className="step-connector"></div>
            <div className="step-number">2</div>
            <h3>到宅評估</h3>
            <p>照管專員到府訪視，評估生活功能、環境安全，判定失能等級與補助額度。</p>
          </div>
          <div className="process-step">
            <div className="step-connector"></div>
            <div className="step-number">3</div>
            <h3>擬定計畫</h3>
            <p>與個案及家屬共同討論，擬定個別化照顧計畫，明確列出服務項目與補助額度。</p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>接受服務</h3>
            <p>照管中心媒合合適的長照服務提供者，安排服務開始，正式啟動照護計畫。</p>
          </div>
        </div>
      </section>

      <section className="subsidy" id="subsidy">
        <h2>補助額度與內容</h2>
        <p className="section-desc">長照 3.0 的補助依服務項目、失能等級與照護頻率計算，以下整理主要重點：</p>

        <h3 className="subsection-title">主要補助服務項目</h3>
        <div className="subsidy-grid">
          <div className="subsidy-item">
            <span className="subsidy-icon">🏠</span>
            <span>居家照顧服務</span>
          </div>
          <div className="subsidy-item">
            <span className="subsidy-icon">☀️</span>
            <span>日間照顧（含復能／社區活動）</span>
          </div>
          <div className="subsidy-item">
            <span className="subsidy-icon">🛏️</span>
            <span>短期住宿照護</span>
          </div>
          <div className="subsidy-item">
            <span className="subsidy-icon">💆</span>
            <span>喘息服務（輕度／重度）</span>
          </div>
          <div className="subsidy-item">
            <span className="subsidy-icon">🚗</span>
            <span>交通接送服務</span>
          </div>
          <div className="subsidy-item">
            <span className="subsidy-icon">🦽</span>
            <span>輔具與智慧科技輔具租賃</span>
          </div>
          <div className="subsidy-item">
            <span className="subsidy-icon">👨‍👩‍👧</span>
            <span>家庭照顧者支持</span>
          </div>
          <div className="subsidy-item">
            <span className="subsidy-icon">🏥</span>
            <span>醫療-長照整合銜接服務</span>
          </div>
        </div>

        <h3 className="subsection-title">補助額度重點</h3>
        <div className="subsidy-highlights">
          <div className="highlight-card">
            <div className="highlight-amount">NT$ 60,000</div>
            <div className="highlight-label">智慧科技輔具租賃</div>
            <p>每人 3 年最高補助額度，可彈性租借多類型智慧輔具</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-amount">NT$ 115/趟</div>
            <div className="highlight-label">交通接送補助</div>
            <p>一般地區費率，原鄉離島地區補助更高</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-amount">依等級核定</div>
            <div className="highlight-label">政府給付額度</div>
            <p>依失能等級與服務類別計算，部分縣市依所得另有減免</p>
          </div>
        </div>

        <div className="subsidy-example">
          <h4>補助範例</h4>
          <p>失能程度較高的長者可獲得較多居家照顧服務時數，政府補助給付的時數上限也相對較高。若申請輔具租賃，政府會在核定額度內補助租金。實際補助金額會在照管專員評估後，依個案需求量身計算。</p>
        </div>
      </section>

      <section className="preparation" id="preparation">
        <h2>申請前準備</h2>
        <div className="preparation-content">
          <div className="checklist-card">
            <h3>建議準備文件</h3>
            <ul className="checklist">
              <li><span className="check-icon">✓</span>身分證、健保卡</li>
              <li><span className="check-icon">✓</span>身心障礙手冊（如有）</li>
              <li><span className="check-icon">✓</span>醫療證明或診斷報告（如失智、重大傷病等）</li>
              <li><span className="check-icon">✓</span>照護需求書面資料（如家屬觀察紀錄）</li>
              <li><span className="check-icon">✓</span>聯絡人與家庭照護狀況簡述</li>
            </ul>
            <p className="checklist-note">準備完整資料可加速評估判定並提升準確性</p>
          </div>
          <div className="timeline-card">
            <h3>政策推動時程</h3>
            <div className="policy-timeline">
              <div className="policy-item">
                <span className="policy-date">2025 年 9 月</span>
                <span className="policy-desc">第一階段：放寬外籍看護家庭使用社區服務</span>
              </div>
              <div className="policy-item">
                <span className="policy-date">2026 年 1 月</span>
                <span className="policy-desc">第二階段：擴大服務對象與醫療銜接</span>
              </div>
              <div className="policy-item">
                <span className="policy-date">2026 年 7 月</span>
                <span className="policy-desc">第三階段：智慧科技輔具租賃新制上路</span>
              </div>
            </div>
            <p className="timeline-note">長照 3.0 是持續升級的制度，實際政策以衛福部最新公告為準</p>
          </div>
        </div>
      </section>

      <section className="references" id="references">
        <h2>參考資料索引</h2>
        <div className="reference-links">
          <a href="https://1966.gov.tw/LTC/cp-6533-70777-207.html" target="_blank" rel="noopener noreferrer" className="reference-link">
            <div className="reference-content">
              <h4>長照專區 1966：申請長照服務</h4>
              <p>衛福部長照專區官方指南</p>
            </div>
          </a>
          <a href="https://www.mohw.gov.tw/cp-16-82028-1.html" target="_blank" rel="noopener noreferrer" className="reference-link">
            <div className="reference-content">
              <h4>衛福部：推動長照「三升五顧」智慧照顧全上路</h4>
              <p>衛生福利部官方新聞稿 (2025)</p>
            </div>
          </a>
          <a href="https://www.mohw.gov.tw/cp-18-82814-1.html" target="_blank" rel="noopener noreferrer" className="reference-link">
            <div className="reference-content">
              <h4>長期照顧服務申請及給付辦法部分條文修正</h4>
              <p>衛生福利部公告</p>
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

      </div>
    </div>
  );
}

export default About;
