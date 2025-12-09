import './Home.css';
import heroImage from '../assets/home_main.jpg';

function Home() {
  return (
    <div className="home">
      {/* 全幅首頁主視覺 */}
      <section className="hero-image-section">
        <div className="hero-image-container">
          <img src={heroImage} alt="長照服務" className="hero-image" />
          <div className="text-mask-overlay">
            <div className="floating-text text-1">關懷</div>
            <div className="floating-text text-2">照護</div>
            <div className="floating-text text-3">陪伴</div>
            <div className="floating-text text-4">健康</div>
            <div className="floating-text text-5">長照</div>
            <div className="floating-text text-6">溫暖</div>
            <div className="floating-text text-7">安心</div>
            <div className="floating-text text-8">守護</div>
            <div className="floating-text text-9">服務</div>
            <div className="floating-text text-10">愛心</div>
            <div className="floating-text text-11">專業</div>
            <div className="floating-text text-12">尊嚴</div>
          </div>
          <div className="hero-title-overlay">
            <h1>長照 3.0</h1>
            <p>完善的長期照顧服務，讓您的家人安心生活</p>
          </div>
        </div>
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
