export interface SearchItem {
  id: string;
  title: string;
  keywords: string[];
  description: string;
  link: string;
  category: string;
}

export const searchData: SearchItem[] = [
  // ========== 認識長照 ==========
  {
    id: 'about-intro',
    title: '什麼是長照 3.0？',
    keywords: ['長照3.0', '長照', '介紹', '說明', '簡介', '是什麼', '定義'],
    description: '了解長照 3.0 的核心理念與升級內容',
    link: '/about#intro',
    category: '認識長照'
  },
  {
    id: 'about-timeline',
    title: '長照政策演進時間軸',
    keywords: ['時間軸', '歷史', '演進', '1.0', '2.0', '3.0', '政策', '發展'],
    description: '從長照 1.0 到 3.0 的發展歷程（2007-2026）',
    link: '/about#timeline',
    category: '認識長照'
  },
  {
    id: 'about-comparison',
    title: '長照 2.0 vs 3.0 比較',
    keywords: ['比較', '差異', '2.0', '3.0', '升級', '改變', '不同', '差別'],
    description: '長照 2.0 與 3.0 的核心理念、服務對象、科技應用差異比較',
    link: '/about#comparison',
    category: '認識長照'
  },
  {
    id: 'about-schedule',
    title: '長照 3.0 實施時程',
    keywords: ['時程', '階段', '上路', '實施', '2025', '2026', '什麼時候'],
    description: '第一階段 2025/09、第二階段 2026/01、第三階段 2026/07',
    link: '/about#preparation',
    category: '認識長照'
  },

  // ========== 八大目標 ==========
  {
    id: 'strategy-medical',
    title: '醫養合一',
    keywords: ['醫養合一', '醫療', '照顧', '銜接', '出院', '在宅醫療', '醫院'],
    description: '強化醫療與長照無縫接軌，推動在宅責任醫療網',
    link: '/about#strategies',
    category: '八大目標'
  },
  {
    id: 'strategy-tech',
    title: '智慧科技導入',
    keywords: ['智慧', '科技', 'AI', '輔具', '租賃', '6萬', '智慧輔具'],
    description: '智慧輔具租賃 3 年 6 萬額度，AI 監測與照顧',
    link: '/about#strategies',
    category: '八大目標'
  },
  {
    id: 'strategy-family',
    title: '強化家庭支持',
    keywords: ['家庭', '支持', '外籍看護', '喘息', '共聘護佐', '照顧者'],
    description: '放寬外籍看護家庭使用社區服務，增加喘息服務',
    link: '/about#strategies',
    category: '八大目標'
  },
  {
    id: 'strategy-institution',
    title: '提升機構量能',
    keywords: ['機構', '夜間照顧', '緊急安置', '住宿式', '安養', '養護'],
    description: '增設夜間照顧與緊急安置床位',
    link: '/about#strategies',
    category: '八大目標'
  },
  {
    id: 'strategy-health',
    title: '健康促進與共生',
    keywords: ['健康促進', '共生', '預防', '社區', '活躍老化', '健康老化'],
    description: '推動社區健康促進活動，實現健康老化目標',
    link: '/about#strategies',
    category: '八大目標'
  },
  {
    id: 'strategy-rehab',
    title: '積極復能',
    keywords: ['復能', 'PAC', '急性後期', '復健', '功能訓練', '恢復'],
    description: '針對急性後期個案導入功能性復能訓練',
    link: '/about#strategies',
    category: '八大目標'
  },
  {
    id: 'strategy-workforce',
    title: '人力專業發展',
    keywords: ['人力', '專業', '照服員', '培訓', '薪資', '人才', '照顧服務員'],
    description: '提升照顧服務人力素質與待遇',
    link: '/about#strategies',
    category: '八大目標'
  },
  {
    id: 'strategy-hospice',
    title: '安寧善終',
    keywords: ['安寧', '善終', 'ACP', '預立醫療', '諮商', '臨終', '末期'],
    description: '推廣預立醫療照護諮商，尊嚴善終',
    link: '/about#strategies',
    category: '八大目標'
  },

  // ========== 申請指南 ==========
  {
    id: 'apply-eligibility',
    title: '長照申請資格',
    keywords: ['資格', '條件', '誰可以申請', '對象', '失能', '失智', '65歲', '身障'],
    description: '65 歲以上失能、55 歲以上原住民、50 歲以上失智、身心障礙者等',
    link: '/about#eligibility',
    category: '申請指南'
  },
  {
    id: 'apply-process',
    title: '長照申請流程',
    keywords: ['流程', '步驟', '怎麼申請', '如何申請', '申請方式', '程序'],
    description: '撥打 1966 → 到宅評估 → 擬定計畫 → 開始服務',
    link: '/about#process',
    category: '申請指南'
  },
  {
    id: 'apply-subsidy',
    title: '長照補助額度',
    keywords: ['補助', '金額', '多少錢', '費用', '價格', '收費', '額度', '給付'],
    description: '依失能等級與身分別，政府補助 70%-100% 費用',
    link: '/about#subsidy',
    category: '申請指南'
  },
  {
    id: 'apply-preparation',
    title: '申請前準備文件',
    keywords: ['文件', '準備', '資料', '證件', '身分證', '診斷書'],
    description: '身分證、健保卡、診斷證明等申請所需文件',
    link: '/about#preparation',
    category: '申請指南'
  },

  // ========== 服務項目 ==========
  {
    id: 'service-care',
    title: '居家照顧服務',
    keywords: ['居家照顧', '居服', '身體照顧', '家務', '到府', '居家服務'],
    description: '照服員到府提供身體照顧、家務協助等服務',
    link: '/about#subsidy',
    category: '服務項目'
  },
  {
    id: 'service-daycare',
    title: '日間照顧服務',
    keywords: ['日照', '日間照顧', '白天', '托老', '日托'],
    description: '白天到日照中心接受照顧與活動',
    link: '/about#subsidy',
    category: '服務項目'
  },
  {
    id: 'service-transport',
    title: '交通接送服務',
    keywords: ['交通', '接送', '就醫', '復健', '車', '載送'],
    description: '提供就醫、復健等交通接送，補助 115 元/趟',
    link: '/about#subsidy',
    category: '服務項目'
  },
  {
    id: 'service-equipment',
    title: '輔具與居家無障礙改善',
    keywords: ['輔具', '無障礙', '環境改善', '租借', '購買', '扶手', '輪椅'],
    description: '輔具租借購買與居家環境改善服務',
    link: '/about#subsidy',
    category: '服務項目'
  },
  {
    id: 'service-respite',
    title: '喘息服務',
    keywords: ['喘息', '照顧者', '休息', '臨時照顧', '暫托', '家屬'],
    description: '讓家庭照顧者獲得休息的臨時照顧服務',
    link: '/about#subsidy',
    category: '服務項目'
  },
  {
    id: 'service-prevention',
    title: '預防及延緩失能服務',
    keywords: ['預防', '延緩失能', '健康促進', '活動', '運動', '課程'],
    description: '延緩失能的健康促進活動與課程',
    link: '/about#subsidy',
    category: '服務項目'
  },

  // ========== 據點查詢 ==========
  {
    id: 'map-search',
    title: '長照據點地圖',
    keywords: ['地圖', '據點', '搜尋', '位置', '哪裡', '查詢', '機構'],
    description: '查詢全國長照服務據點位置',
    link: '/map',
    category: '據點查詢'
  },
  {
    id: 'map-nearby',
    title: '附近長照機構',
    keywords: ['附近', '最近', '鄰近', '周邊', '我家', '距離'],
    description: '依地址搜尋附近 1-10 公里內的長照據點',
    link: '/map',
    category: '據點查詢'
  },
  {
    id: 'map-abc',
    title: 'ABC 三級據點介紹',
    keywords: ['ABC', 'A級', 'B級', 'C級', '社區', '巷弄長照站', '服務中心'],
    description: 'A 級社區整合型、B 級複合型、C 級巷弄長照站',
    link: '/map',
    category: '據點查詢'
  },

  // ========== 長照資源 ==========
  {
    id: 'resource-1966',
    title: '長照專線 1966',
    keywords: ['1966', '專線', '電話', '諮詢', '打電話', '客服', '服務時間'],
    description: '週一至週五 08:30-17:30 長照服務申請與諮詢專線',
    link: '/resources',
    category: '長照資源'
  },
  {
    id: 'resource-calculator',
    title: '長照補助試算',
    keywords: ['試算', '計算', '算', '多少', '補助金額'],
    description: '線上計算可獲得的長照補助金額',
    link: '/resources',
    category: '長照資源'
  },
  {
    id: 'resource-assessment',
    title: '失能等級評估',
    keywords: ['失能', '等級', '評估', 'CMS', '分級', '幾級'],
    description: '了解長照需要等級（1-8 級）評估方式',
    link: '/resources',
    category: '長照資源'
  },
  {
    id: 'resource-videos',
    title: '長照教學影片',
    keywords: ['影片', '教學', 'YouTube', '看', '影音'],
    description: '長照 3.0 政策說明與申請教學影片',
    link: '/resources',
    category: '長照資源'
  },

  // ========== 常見問題 ==========
  {
    id: 'faq-who',
    title: '什麼人可以申請長照？',
    keywords: ['誰', '什麼人', '可以申請', '申請資格', '條件'],
    description: '65 歲以上失能、失智、身心障礙者等皆可申請',
    link: '/help#faq',
    category: '常見問題'
  },
  {
    id: 'faq-cost',
    title: '長照服務要付多少錢？',
    keywords: ['錢', '費用', '付費', '自付', '免費', '要錢嗎', '收費'],
    description: '低收入戶全額補助，一般戶自付 16-30%',
    link: '/help#faq',
    category: '常見問題'
  },
  {
    id: 'faq-abc',
    title: 'ABC 據點有什麼不同？',
    keywords: ['ABC', '不同', '差別', '區別', 'A級B級C級'],
    description: 'A 級個案管理、B 級日照居家、C 級預防活動',
    link: '/help#faq',
    category: '常見問題'
  },
  {
    id: 'faq-find',
    title: '如何查詢長照據點？',
    keywords: ['查詢', '找', '怎麼找', '去哪裡', '在哪'],
    description: '可透過本站地圖、1966 專線或衛福部網站查詢',
    link: '/help#faq',
    category: '常見問題'
  },
  {
    id: 'help-hotline',
    title: '長照專線 1966',
    keywords: ['1966', '電話', '專線', '諮詢', '服務時間'],
    description: '週一至週五 08:30-17:30 長照服務諮詢專線',
    link: '/help#hotline',
    category: '常見問題'
  },
  {
    id: 'help-contact',
    title: '機構查詢入口',
    keywords: ['聯絡', '協助', '幫助', '機構', '查詢', '聯繫'],
    description: '長照服務資源地理地圖與官方網站連結',
    link: '/help#contact',
    category: '常見問題'
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
