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
