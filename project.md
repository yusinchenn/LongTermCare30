LongTermCare30/
│
├─ public/                     # 靜態資源（圖片、icon）
│   ├─ logo.png
│   └─ data/                   # 如果你要放 JSON 可放這裡
│       └─ abc_sites.json
│
├─ src/
│   ├─ api/                    # API 呼叫 or 加載資料
│   │   ├─ fetchLTCData.ts     # 長照 ABC 資料載入
│   │   └─ geocode.ts          # 地址地理編碼（選用）
│   │
│   ├─ components/             # 可重複使用的 UI 元件
│   │   ├─ Map.tsx             # 地圖元件（Leaflet 或 Google Maps）
│   │   ├─ FilterPanel.tsx     # 篩選功能（縣市、區域、ABC 等）
│   │   ├─ SearchBar.tsx       # 搜尋框
│   │   ├─ Navbar.tsx          # 導覽列
│   │   └─ Footer.tsx          # 頁尾
│   │
│   ├─ pages/                  # 頁面
│   │   ├─ Home.tsx            # 首頁：介紹 + 連結
│   │   ├─ MapPage.tsx         # 地圖頁：地圖 + 篩選 + 列表
│   │   └─ About.tsx           # 長照 3.0 說明
│   │
│   ├─ types/                  # TypeScript 型別
│   │   └─ ltc.ts              # 長照資料型別定義
│   │
│   ├─ utils/                  # 工具類 function
│   │   ├─ parseCity.ts        # 從地址提取縣市（前三字）
│   │   ├─ filterData.ts       # 做複合篩選
│   │   └─ mapHelpers.ts       # 地圖工具
│   │
│   ├─ context/ (可選)         # 全局狀態，如 Filter 狀態
│   │   └─ FilterContext.tsx
│   │
│   ├─ App.tsx                 # 主架構
│   ├─ main.tsx                # React 入口
│   └─ index.css               # 全域樣式（你不用 Tailwind 用這即可）
│
├─ package.json
├─ tsconfig.json
└─ vite.config.ts

提案報告書
一、網站名稱及功能
1. 網站名稱：
  長照3.0
2. 網站功能：
提供長照3.0資訊介紹
提供長照相關網頁與資源連結
提供長照服務據點展示與試算工具連結
二、設計理念 [抽象]
1. 高齡友善/無障礙設計
　字體清晰、對比明顯、按鈕尺寸大。
2. 顏色
　以「春江水暖」為顏色主題，配色溫暖、線條乾淨，避免資訊雜亂。
3. 元素
　以「陪伴」、「照顧」、「連結」為核心，部分使用柔和動畫與圓角。
三、視覺風格
1. 主要顏色
#2aa9b4
#e4be57
2. 字體
中文：Noto Sans TC（清晰、標準化、易閱讀）
英文：Inter 或 Roboto
3. 圖像風格
簡約、人性化
四、網頁結構：4-5部分，填上每一部分的名稱
網站採 單頁 + 多頁混合架構（SPAs with multiple views）。
1. 首頁（Home）
長照 3.0 概要介紹/主要服務導覽（地圖 / 學習資源 / 試算工具）
2. 長照 3.0 認識（About LTC）
服務內容說明/長照政策演進/ABC三級據點介紹/補助資格與流程圖
3. 長照據點地圖（Service Map）
地圖/ABC 等級篩選/行政區篩選
4. 長照資源（Resources）
各類官方服務連結/說明文件、PDF、懶人包/外部試算工具連結/教學影片
5. 聯絡與協助（Help & Contact）
常見問題/官方專線 1966/機構查詢入口/無障礙使用說明
五、製作技術
1. 前端技術（主要）
Vite
React + TypeScript
React Router
原生 CSS
2. 地圖技術
Leaflet.js + react-leaflet（React 包裝元件）
3. 資料處理
使用政府開放資料（JSON / CSV）
4. 無障礙支援
ARIA roles
Landmark 標籤
5. 開發工具
VS Code
Node.js + npm
Git / GitHub（版控）
六、參考網站：1-2個範例網站 [首頁截圖：參考而非抄襲]

來自：https://www.nursing.com.tw/%E9%95%B7%E7%85%A7%E6%9C%8D%E5%8B%99%E9%A0%85%E7%9B%AE%EF%BD%9C%E9%95%B7%E7%85%A73-0/


來自：https://qi-yu.com.tw/blog/longterm-care/how-to-apply-ltc-3/

網頁使用資料
長照據點 https://data.gov.tw/dataset/88270