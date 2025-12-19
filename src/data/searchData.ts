export interface SearchItem {
  id: string;
  title: string;
  keywords: string[];
  description: string;
  link: string;
  category: string;
}

export const searchData: SearchItem[] = [
  // 認識長照
  {
    id: 'about-intro',
    title: '什麼是長照 3.0？',
    keywords: ['長照3.0', '長照', '介紹', '說明', '簡介'],
    description: '了解長照 3.0 的核心理念與升級內容',
    link: '/about',
    category: '認識長照'
  },
  {
    id: 'about-timeline',
    title: '長照政策演進時間軸',
    keywords: ['時間軸', '歷史', '演進', '1.0', '2.0', '3.0', '政策'],
    description: '從長照 1.0 到 3.0 的發展歷程',
    link: '/about#timeline',
    category: '認識長照'
  },
  {
    id: 'about-abc',
    title: 'ABC 三級據點介紹',
    keywords: ['ABC', '據點', 'A級', 'B級', 'C級', '社區', '服務中心', '巷弄長照站'],
    description: '社區整合型服務中心、複合型服務中心、巷弄長照站',
    link: '/about#abc',
    category: '認識長照'
  },
  {
    id: 'about-comparison',
    title: '長照 2.0 vs 3.0 比較',
    keywords: ['比較', '差異', '2.0', '3.0', '升級', '改變'],
    description: '長照 2.0 與 3.0 的差異比較',
    link: '/about#comparison',
    category: '認識長照'
  },

  // 八大目標
  {
    id: 'strategy-medical',
    title: '醫養合一',
    keywords: ['醫養合一', '醫療', '照顧', '銜接', '出院', '在宅醫療'],
    description: '強化醫療與長照無縫接軌，推動在宅責任醫療網',
    link: '/about#strategies',
    category: '八大目標'
  },
  {
    id: 'strategy-tech',
    title: '智慧科技導入',
    keywords: ['智慧', '科技', 'AI', '輔具', '租賃', '6萬'],
    description: '智慧輔具租賃，3年6萬額度，AI監測與照顧',
    link: '/about#strategies',
    category: '八大目標'
  },
  {
    id: 'strategy-family',
    title: '強化家庭支持',
    keywords: ['家庭', '支持', '外籍看護', '喘息', '共聘護佐'],
    description: '放寬外籍看護家庭使用社區服務，增加喘息服務',
    link: '/about#strategies',
    category: '八大目標'
  },
  {
    id: 'strategy-institution',
    title: '提升機構量能',
    keywords: ['機構', '夜間照顧', '緊急安置', '住宿式'],
    description: '增設夜間照顧與緊急安置床位',
    link: '/about#strategies',
    category: '八大目標'
  },
  {
    id: 'strategy-rehab',
    title: '積極復能',
    keywords: ['復能', 'PAC', '急性後期', '復健', '功能訓練'],
    description: '針對急性後期個案導入功能性復能訓練',
    link: '/about#strategies',
    category: '八大目標'
  },
  {
    id: 'strategy-hospice',
    title: '安寧善終',
    keywords: ['安寧', '善終', 'ACP', '預立醫療', '諮商'],
    description: '推廣預立醫療照護諮商，尊嚴善終',
    link: '/about#strategies',
    category: '八大目標'
  },

  // 服務項目
  {
    id: 'service-care',
    title: '照顧及專業服務',
    keywords: ['照顧', '專業服務', '居家照顧', '身體照顧'],
    description: '提供專業的居家照顧服務',
    link: '/about#services',
    category: '服務項目'
  },
  {
    id: 'service-transport',
    title: '交通接送服務',
    keywords: ['交通', '接送', '就醫', '復健'],
    description: '提供就醫、復健等交通接送',
    link: '/about#services',
    category: '服務項目'
  },
  {
    id: 'service-equipment',
    title: '輔具及居家無障礙環境改善',
    keywords: ['輔具', '無障礙', '環境改善', '租借', '購買'],
    description: '輔具租借購買與居家環境改善服務',
    link: '/about#services',
    category: '服務項目'
  },
  {
    id: 'service-respite',
    title: '喘息服務',
    keywords: ['喘息', '照顧者', '休息', '臨時照顧'],
    description: '讓家庭照顧者獲得休息的臨時照顧服務',
    link: '/about#services',
    category: '服務項目'
  },
  {
    id: 'service-prevention',
    title: '預防及延緩失能服務',
    keywords: ['預防', '延緩失能', '健康促進', '活動'],
    description: '延緩失能的健康促進活動',
    link: '/about#services',
    category: '服務項目'
  },

  // 長照資源
  {
    id: 'resource-1966',
    title: '長照專線 1966',
    keywords: ['1966', '專線', '電話', '諮詢', '申請'],
    description: '長照服務申請與諮詢專線',
    link: '/resources',
    category: '長照資源'
  },
  {
    id: 'resource-subsidy',
    title: '長照補助試算',
    keywords: ['補助', '試算', '金額', '費用', '多少錢'],
    description: '計算可獲得的長照補助金額',
    link: '/resources',
    category: '長照資源'
  },
  {
    id: 'resource-assessment',
    title: '失能等級評估',
    keywords: ['失能', '等級', '評估', 'CMS', '分級'],
    description: '了解長照需要等級',
    link: '/resources',
    category: '長照資源'
  },
  {
    id: 'resource-apply',
    title: '長照服務申請流程',
    keywords: ['申請', '流程', '如何申請', '步驟'],
    description: '詳細說明如何申請長照服務',
    link: '/resources',
    category: '長照資源'
  },

  // 據點地圖
  {
    id: 'map-search',
    title: '長照據點地圖',
    keywords: ['地圖', '據點', '附近', '搜尋', '位置', '哪裡'],
    description: '查詢全國長照服務據點位置',
    link: '/map',
    category: '據點地圖'
  },

  // 聯絡協助
  {
    id: 'help-contact',
    title: '聯絡協助',
    keywords: ['聯絡', '協助', '幫助', '問題', '客服'],
    description: '取得長照相關協助與諮詢',
    link: '/help',
    category: '聯絡協助'
  }
];

// 搜尋函數
export function searchItems(query: string): SearchItem[] {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase().trim();

  return searchData
    .filter(item => {
      // 搜尋標題
      if (item.title.toLowerCase().includes(lowerQuery)) return true;
      // 搜尋關鍵字
      if (item.keywords.some(kw => kw.toLowerCase().includes(lowerQuery))) return true;
      // 搜尋描述
      if (item.description.toLowerCase().includes(lowerQuery)) return true;
      // 搜尋分類
      if (item.category.toLowerCase().includes(lowerQuery)) return true;
      return false;
    })
    .slice(0, 8); // 最多顯示 8 個結果
}
