import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>長照 3.0</h1>
        <p className="subtitle">完善的長期照顧服務，讓您的家人安心生活</p>
      </section>

      <section className="services">
        <h2>主要服務</h2>
        <div className="service-cards">
          <div className="card">
            <h3>📍 長照據點地圖</h3>
            <p>快速找到您附近的長照服務據點</p>
          </div>
          <div className="card">
            <h3>📚 長照資源</h3>
            <p>提供各類官方服務連結與說明文件</p>
          </div>
          <div className="card">
            <h3>💡 認識長照 3.0</h3>
            <p>了解長照政策與服務內容</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
