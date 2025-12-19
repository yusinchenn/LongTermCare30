import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import bgImage1 from '../assets/home_001.jpg';
import bgImage2 from '../assets/home_002.png';
import bgImage3 from '../assets/home_003.png';
import { searchItems } from '../data/searchData';
import type { SearchItem } from '../data/searchData';

const TOTAL_SLIDES = 3;
const ANIMATION_TIME = 1600;
const ANIM_CLASSES = ['anim-circle', 'anim-square', 'anim-diamond'];

function Home() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [showResults, setShowResults] = useState(false);

  const visualRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  const animateTo = (el: HTMLDivElement | null, destinationClass: string) => {
    if (!el) return;
    el.classList.remove('pos-center', 'pos-top', 'pos-bottom', 'pos-left', 'pos-right');
    el.classList.add(destinationClass);
  };

  const teleportAndSlide = (el: HTMLDivElement | null, startClass: string, endClass: string) => {
    if (!el) return;
    el.classList.add('no-anim');
    el.classList.remove('pos-center', 'pos-top', 'pos-bottom', 'pos-left', 'pos-right');
    el.classList.add(startClass);
    void el.offsetWidth;
    el.classList.remove('no-anim');
    el.classList.remove(startClass);
    el.classList.add(endClass);
  };

  const updateGlobalDots = useCallback((targetIndex: number) => {
    const targetClass = ANIM_CLASSES[targetIndex];
    dotRefs.current.forEach((dot, index) => {
      if (!dot) return;
      // 1. 處理實心/空心狀態 (僅影響 background-color)
      if (index === targetIndex) {
        dot.classList.add('current');
      } else {
        dot.classList.remove('current');
      }
      // 2. 處理全體變形動畫
      dot.classList.remove('anim-circle', 'anim-square', 'anim-diamond');
      void dot.offsetWidth;
      dot.classList.add(targetClass);
    });
  }, []);

  const moveNext = useCallback((current: number, next: number) => {
    setIsAnimating(true);
    updateGlobalDots(next);

    animateTo(visualRefs.current[current], 'pos-top');
    animateTo(textRefs.current[current], 'pos-left');

    teleportAndSlide(visualRefs.current[next], 'pos-bottom', 'pos-center');
    teleportAndSlide(textRefs.current[next], 'pos-right', 'pos-center');

    setCurrentIndex(next);
    setTimeout(() => setIsAnimating(false), ANIMATION_TIME);
  }, [updateGlobalDots]);

  const movePrev = useCallback((current: number, next: number) => {
    setIsAnimating(true);
    updateGlobalDots(next);

    animateTo(visualRefs.current[current], 'pos-bottom');
    animateTo(textRefs.current[current], 'pos-right');

    teleportAndSlide(visualRefs.current[next], 'pos-top', 'pos-center');
    teleportAndSlide(textRefs.current[next], 'pos-left', 'pos-center');

    setCurrentIndex(next);
    setTimeout(() => setIsAnimating(false), ANIMATION_TIME);
  }, [updateGlobalDots]);

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    if (index > currentIndex) {
      moveNext(currentIndex, index);
    } else {
      movePrev(currentIndex, index);
    }
  };

  // 搜尋相關函數
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      const results = searchItems(query);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleResultClick = (item: SearchItem) => {
    setShowResults(false);
    setSearchQuery('');
    navigate(item.link);
  };

  const handleSearchBlur = () => {
    // 延遲關閉以允許點擊結果
    setTimeout(() => setShowResults(false), 200);
  };

  useEffect(() => {
    updateGlobalDots(0);
  }, [updateGlobalDots]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isAnimating) return;
      if (e.deltaY > 0) {
        const next = (currentIndex + 1) % TOTAL_SLIDES;
        moveNext(currentIndex, next);
      } else {
        const next = (currentIndex - 1 + TOTAL_SLIDES) % TOTAL_SLIDES;
        movePrev(currentIndex, next);
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentIndex, isAnimating, moveNext, movePrev]);

  return (
    <div className="home">
      {/* 底圖層 */}
      <div className="layer-container">
        <img
          className={`bg-slide ${currentIndex === 0 ? 'active' : ''}`}
          src={bgImage1}
          alt="bg1"
        />
        <img
          className={`bg-slide ${currentIndex === 1 ? 'active' : ''}`}
          src={bgImage2}
          alt="bg2"
        />
        <img
          className={`bg-slide ${currentIndex === 2 ? 'active' : ''}`}
          src={bgImage3}
          alt="bg3"
        />
      </div>

      {/* 文字層 */}
      <div className="text-wrapper">
        <div
          ref={el => { textRefs.current[0] = el; }}
          className="text-item layout-bottom-right pos-center anim-transition"
        >
          <div className="main-title">
            長照 <span className="num-large">2.0</span>
            <span className="arrow-thin">&rarr;</span>
            <span className="num-large">3.0</span>
          </div>
        </div>
        <div
          ref={el => { textRefs.current[1] = el; }}
          className="text-item layout-bottom-right pos-right anim-transition"
        >
          <div className="main-title">
            健康老化、在地安老、<br />安寧善終
          </div>
        </div>
        <div
          ref={el => { textRefs.current[2] = el; }}
          className="text-item layout-center-below pos-right anim-transition"
        >
          <div className="main-title search-title">
            尋找你要的資源
          </div>
        </div>
      </div>

      {/* 視覺層 */}
      <div className="visual-wrapper">
        <div
          ref={el => { visualRefs.current[0] = el; }}
          className="visual-item layout-top-left pos-center anim-transition"
        >
          <div className="icon-grid">
            <div className="icon-box">
              <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            </div>
            <div className="icon-box">
              <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
            </div>
            <div className="icon-box">
              <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
            <div className="icon-box">
              <svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            <div className="icon-box">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="4" r="2"/>
                <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.44-.34-.73-.34-.18 0-.35.06-.49.16l-4.18 2.76 1.05 1.6 2.62-1.73V20h2v-6h2v6h2v-7h1z"/>
              </svg>
            </div>
          </div>
        </div>
        <div
          ref={el => { visualRefs.current[1] = el; }}
          className="visual-item layout-top-left pos-bottom anim-transition"
        >
          <div className="vertical-timeline">
            2025/09 第一階段{'\n'}
            2026/01 第二階段{'\n'}
            2026/07 第三階段
          </div>
        </div>
        <div
          ref={el => { visualRefs.current[2] = el; }}
          className="visual-item layout-center pos-bottom anim-transition"
        >
          <div className="search-wrapper">
            <div className="search-container">
              <svg className="search-icon-svg" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
              <input
                type="text"
                className="search-input"
                placeholder="輸入長照資源關鍵字..."
                value={searchQuery}
                onChange={handleSearchChange}
                onBlur={handleSearchBlur}
                onFocus={() => searchQuery && setShowResults(true)}
              />
            </div>
            {showResults && searchResults.length > 0 && (
              <div className="search-results">
                {searchResults.map((item) => (
                  <div
                    key={item.id}
                    className="search-result-item"
                    onClick={() => handleResultClick(item)}
                  >
                    <span className="result-category">{item.category}</span>
                    <span className="result-title">{item.title}</span>
                    <span className="result-desc">{item.description}</span>
                  </div>
                ))}
              </div>
            )}
            {showResults && searchQuery && searchResults.length === 0 && (
              <div className="search-results">
                <div className="search-no-result">
                  找不到相關結果，請嘗試其他關鍵字
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 指示器 */}
      <div className="indicators">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            ref={el => { dotRefs.current[index] = el; }}
            className="dot"
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
