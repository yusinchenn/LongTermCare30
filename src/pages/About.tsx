import './About.css';

function About() {
  return (
    <div className="about">
      <h1>認識長照 3.0</h1>

      <section className="intro">
        <h2>什麼是長照 3.0？</h2>
        <p>
          長照 3.0 是政府推動的長期照顧服務計畫，提供從支持家庭、居家、社區到住宿式照顧之多元連續服務，
          建立以社區為基礎的照顧型社區，期能提升具長期照顧需求者與照顧者的生活品質。
        </p>
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

      <section className="contact-info">
        <h2>需要協助？</h2>
        <p className="hotline">撥打長照專線：<strong>1966</strong></p>
        <p>將有專人為您提供諮詢與協助</p>
      </section>
    </div>
  );
}

export default About;
