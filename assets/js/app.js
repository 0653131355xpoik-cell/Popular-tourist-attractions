/* -----------------------------------------------------------
   Smart Travel App — JavaScript Overview
   โค้ดนี้รับผิดชอบ:
   - ข้อมูลสถานที่ (attractions) และตัวช่วยดึงข้อมูล
   - ระบบ Favorites ด้วย localStorage (เพิ่ม/ลบ/ตรวจสอบ)
   - สร้าง HTML การ์ดและเรนเดอร์รายการการ์ดตามตัวกรอง
   - อัลกอริทึมแนะนำสถานที่ (recommend) แบบถ่วงน้ำหนัก
   - ผูก Event กับ UI (ฟิลเตอร์, ปุ่มถูกใจ) เมื่อ DOM พร้อมใช้งาน
------------------------------------------------------------ */
// Smart Travel App - data + helpers
const attractions = [
  // 1) ดอยอินทนนท์ (จังหวัดเชียงใหม่)
  {
    id: 'doi-inthanon',
    name: 'ดอยอินทนนท์',
    city: 'จอมทอง/แม่แจ่ม/แม่วาง/ดอยหล่อ',
    province: 'เชียงใหม่',
    type: 'mountain',
    budget: 'medium',
    season: ['winter','all'],
    coords: [18.5883, 98.4889],
    cover: 'assets/images/ดอยอินทนนท์.jpg',
    images: [
      'assets/images/ดอยอินทนนท์.jpg',
      'assets/images/ดอยอินทนนท์_2.jpg'
    ],
    highlights: ['กิ่วแม่ปาน','สูงสุดแดนสยาม','วิวภูเขา'],
    url: 'destinations/doi-inthanon.html'
  },

  // 2) เขาใหญ่ (Khao Yai, จังหวัดนครราชสีมา)
  {
    id: 'khao-yai',
    name: 'อุทยานแห่งชาติเขาใหญ่',
    city: 'มวกเหล็ก/ปากช่อง/ประจันตคาม/เมืองนครนายก',
    province: 'นครราชสีมา',
    type: 'mountain',
    budget: 'medium',
    season: ['all','winter'],
    coords: [14.439, 101.372],
    cover: 'assets/images/อุทยานแห่งชาติเขาใหญ่.jpg',
    images: [
      'assets/images/อุทยานแห่งชาติเขาใหญ่.jpg',
      'assets/images/Muthi Maya Forest Pool Villa Resort.jpg',
      'assets/images/Recall Isaan Concept at Khaoyai.jpg',
      'assets/images/Charlee Khaoyai.jpg'
    ],
    highlights: ['น้ำตก/เส้นทางธรรมชาติ','ดูสัตว์ป่า','จุดชมวิว'],
    url: 'destinations/khao-yai.html'
  },

  // 3) เขาสก / เขื่อนเชี่ยวหลาน (จังหวัดสุราษฎร์ธานี)
  {
    id: 'khao-sok',
    name: 'อุทยานแห่งชาติเขาสก / เขื่อนเชี่ยวหลาน',
    city: 'พนม',
    province: 'สุราษฎร์ธานี',
    type: 'mountain',
    budget: 'medium',
    season: ['all','winter'],
    coords: [8.915, 98.522],
    cover: 'assets/images/อุทยานแห่งชาติเขาสก  เขื่อนเชี่ยวหลาน.jpg',
    images: [
      'assets/images/รีสอร์ทแพหรูในเขื่อนเชี่ยวหลาน.jpg',
      'assets/images/Our Jungle Camp  Eco Resort.jpg',
      'assets/images/Bungalowเกสต์เฮาส์ริมเขื่อน.jpg'
    ],
    highlights: ['ล่องเรือเขื่อนเชี่ยวหลาน','ค้างคืนแพ','เดินป่าดิบชื้น'],
    url: 'destinations/khao-sok.html'
  }
  ,
  // 4) เกาะพีพี (จังหวัดกระบี่)
  {
    id: 'koh-phi-phi',
    name: 'เกาะพีพี',
    city: 'อ่าวนาง/เมืองกระบี่',
    province: 'กระบี่',
    type: 'sea',
    budget: 'medium',
    season: ['all'],
    coords: [7.7407, 98.776],
    cover: 'assets/images/Koh Phi Phi.jpg',
    images: [
      'assets/images/Koh Phi Phi.jpg',
      'assets/images/Koh Phi Phi - Copy.jpg'
    ],
    highlights: ['ดำน้ำ','เที่ยวอ่าวมาหยา','พายคายัค/SUP'],
    url: 'destinations/koh-phi-phi.html'
  }
  ,
  // 5) เขาสามร้อยยอด (จังหวัดประจวบคีรีขันธ์)
  {
    id: 'khao-sam-roi-yot',
    name: 'อุทยานแห่งชาติเขาสามร้อยยอด',
    city: 'ปราณบุรี/สามร้อยยอด',
    province: 'ประจวบคีรีขันธ์',
    type: 'sea',
    budget: 'medium',
    season: ['all'],
    coords: [12.256, 99.943],
    cover: 'assets/images/Khao Sam Roi Yot.jpg',
    images: [
      'assets/images/Khao Sam Roi Yot.jpg',
      'assets/images/Khao Sam Roi Yot - Copy.jpg'
    ],
    highlights: ['ถ้ำพระยานคร','ชมวิวชายฝั่ง','ดูนกพื้นที่ชุ่มน้ำ'],
    url: 'destinations/khao-sam-roi-yot.html'
  }
  ,
  // 6) น้ำตกเอราวัณ (จังหวัดกาญจนบุรี)
  {
    id: 'erawan-waterfall',
    name: 'อุทยานแห่งชาติเอราวัณ',
    city: 'ศรีสวัสดิ์',
    province: 'กาญจนบุรี',
    type: 'waterfall',
    budget: 'medium',
    season: ['all'],
    coords: [14.373, 99.140],
    cover: 'assets/images/Erawan National Park.jpg',
    images: [
      'assets/images/Erawan National Park.jpg',
      'assets/images/Erawan National Park - Copy.jpg'
    ],
    highlights: ['น้ำตก 7 ชั้น','เดินป่า','เล่นน้ำตามจุดที่อนุญาต'],
    url: 'destinations/erawan-waterfall.html'
  }
];

// Additional destinations (limit to the requested 10 total)
const moreAttractions = [
  // 7) อยุธยา (อุทยานประวัติศาสตร์พระนครศรีอยุธยา)
  {
    id: 'ayutthaya-historic-park',
    name: 'อุทยานประวัติศาสตร์อยุธยา',
    city: 'พระนครศรีอยุธยา',
    province: 'พระนครศรีอยุธยา',
    type: 'culture',
    budget: 'medium',
    season: ['all'],
    coords: [14.355, 100.565],
    cover: 'assets/images/เมืองเก่าอยุธยา.jpg',
    images: [
      'assets/images/เมืองเก่าอยุธยา (1).jpg',
      'assets/images/เมืองเก่าอยุธยา (2).jpg'
    ],
    highlights: ['วัดมหาธาตุ','วัดไชยวัฒนาราม','โบราณสถานรอบเกาะเมือง'],
    url: 'destinations/ayutthaya-historic-park.html'
  },
  // 8) เกาะสมุย (จังหวัดสุราษฎร์ธานี)
  {
    id: 'koh-samui',
    name: 'เกาะสมุย',
    city: 'เกาะสมุย',
    province: 'สุราษฎร์ธานี',
    type: 'sea',
    budget: 'medium',
    season: ['all'],
    coords: [9.55, 100.0],
    cover: 'assets/images/เกาะสมุย.png',
    images: [
      'assets/images/เกาะสมุย2.jpg',
      'assets/images/เกาะสมุย3.png'
    ],
    highlights: ['ชายหาด','ดำน้ำตื้น','วัดพระใหญ่'],
    url: 'destinations/koh-samui.html'
  },
  // 9) หาดเจ้าไหม / เกาะลังกาจิว (จังหวัดตรัง)
  {
    id: 'hat-chao-mai',
    name: 'อุทยานแห่งชาติหาดเจ้าไหม / เกาะลังกาจิว',
    city: 'เมืองตรัง/สิเกา',
    province: 'ตรัง',
    type: 'sea',
    budget: 'medium',
    season: ['all'],
    coords: [7.5, 99.35],
    cover: 'assets/images/หาดเจ้าไหม.jpg',
    images: [
      'assets/images/หาดเจ้าไหม.jpg',
      'assets/images/หาดเจ้าไหม (1).jpg'
    ],
    highlights: ['ดำน้ำตื้น','ดูปะการัง','ล่องเรือชมเกาะ/ถ้ำ'],
    url: 'destinations/hat-chao-mai.html'
  },
  // 10) เขาหลวง (อุทยานแห่งชาติเขาหลวง, สุราษฎร์ธานี)
  {
    id: 'khao-luang',
    name: 'เขาหลวง (อุทยานแห่งชาติเขาหลวง)',
    city: 'สุราษฎร์ธานี',
    province: 'สุราษฎร์ธานี',
    type: 'mountain',
    budget: 'medium',
    season: ['all','winter'],
    coords: [8.7, 99.1],
    cover: 'assets/images/เขาหลวง.jpg',
    images: [
      'assets/images/เขาหลวง (1).jpg',
      'assets/images/เขาหลวง (2).jpg'
    ],
    highlights: ['เดินป่า','ชมวิวมุมสูง','ทะเลหมอก'],
    url: 'destinations/khao-luang.html'
  }
];

// merge to main list
attractions.push(...moreAttractions);

function getAttractions() { return attractions; }

/**
 * หมายเหตุ: getAttractions()
 * คืนค่ารายการสถานที่ทั้งหมดที่ถูก merge เข้าด้วยกัน เพื่อใช้เรนเดอร์
 */

// Favorites (คลังเก็บ) — ใช้ localStorage เก็บรายการที่ถูกใจ
// โครงสร้างที่เก็บ: Array ของ id สถานที่ เช่น ['doi-inthanon','khao-yai']
const FAVORITES_KEY = 'smart_travel_favorites';
function getFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}
/**
 * saveFavorites(ids: string[])
 * บันทึกรายการ id ที่ถูกใจลง localStorage เป็น JSON
 */
function saveFavorites(ids) { localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids)); }
/**
 * isFavorite(id: string): boolean
 * ตรวจสอบว่า id นี้อยู่ในรายการ Favorites หรือไม่
 */
function isFavorite(id) { return getFavorites().includes(id); }
/**
 * toggleFavorite(id: string)
 * สลับสถานะถูกใจ: ถ้ามีอยู่แล้วจะลบออก ไม่มีก็เพิ่มเข้าไป
 */
function toggleFavorite(id) {
  const set = new Set(getFavorites());
  if (set.has(id)) set.delete(id); else set.add(id);
  saveFavorites(Array.from(set));
}
/**
 * renderFavoriteCards(containerId: string)
 * เรนเดอร์การ์ดเฉพาะรายการที่ถูกใจลงใน container ที่ระบุ
 * ถ้ายังไม่มีรายการถูกใจ จะแสดงข้อความว่าง (empty state)
 */
function renderFavoriteCards(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const favIds = getFavorites();
  if (!favIds.length) {
    container.innerHTML = '<div class="alert alert-light text-secondary-soft">ยังไม่มีรายการที่ถูกใจ — กดปุ่ม ♡ บนการ์ดเพื่อบันทึก</div>';
    return;
  }
  const list = attractions.filter(a => favIds.includes(a.id));
  container.innerHTML = list.map(createCard).join('');
}

/**
 * createCard(a: Attraction): string (HTML)
 * คืนค่า HTML ของการ์ดสถานที่ 1 ใบ
 * หมายเหตุ: ปุ่ม "ถูกใจ" จะตั้งค่าให้ตรงกับสถานะ Favorites ปัจจุบัน
 * โดยใช้คลาส .btn-accent (active) หรือ .btn-outline-accent (inactive)
 */
function createCard(a) {
  return `
  <div class="col">
    <div class="card smart-card h-100">
      <img src="${a.cover}" class="card-img-top" alt="${a.name}" referrerpolicy="no-referrer">
      <div class="card-body">
        <div class="d-flex gap-2 mb-2">
          <span class="badge">${a.province}</span>
          <span class="badge">${({mountain:'ภูเขา',sea:'ทะเล',waterfall:'น้ำตก',culture:'เมือง/โบราณสถาน'})[a.type] || a.type}</span>
          <span class="badge price-badge">งบ: ${a.budget === 'low' ? 'ประหยัด' : a.budget === 'medium' ? 'กลาง' : 'สูง'}</span>
        </div>
        <h5 class="card-title">${a.name}</h5>
        <p class="card-text text-secondary-soft">${a.highlights.slice(0,3).join(' • ')}</p>
        <div class="d-flex gap-2 mt-2">
          <a class="btn btn-accent flex-grow-1" href="${a.url}">ดูรายละเอียด</a>
          <button class="btn ${isFavorite(a.id) ? 'btn-accent' : 'btn-outline-accent'} like-btn" data-id="${a.id}" aria-pressed="${isFavorite(a.id)}">${isFavorite(a.id) ? '♥ ถูกใจแล้ว' : '♡ ถูกใจ'}</button>
        </div>
      </div>
    </div>
  </div>`;
}

/**
 * renderCards(containerId: string, filter: { type?: string })
 * เรนเดอร์การ์ดทั้งหมดตามตัวกรองชนิดสถานที่ (type)
 * - filter.type: 'mountain' | 'sea' | 'waterfall' | 'culture' | 'all'
 */
function renderCards(containerId, filter = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const list = attractions.filter(a => !filter.type || filter.type === 'all' || a.type === filter.type);
  container.innerHTML = list.map(createCard).join('');
}

/**
 * recommend(options): Attraction[]
 * สร้างรายการแนะนำโดย:
 * 1) กรองแบบตรงเงื่อนไขทั้งหมด (exact match) ก่อน
 * 2) ถ้าไม่พบ จะผ่อนเงื่อนไขทีละส่วน (type > region > season)
 * 3) คำนวณคะแนนด้วยน้ำหนักแบบง่ายเพื่อจัดอันดับผลลัพธ์
 */
function recommend(options) {
  // Improved recommendation: strict filtering first, then graceful fallback
  // - Treat selected preferences as constraints
  // - Season "all" in data matches any season
  // - Region mapping updated to include active provinces

  const regionMap = {
    north: ['เชียงใหม่'],
    south: ['กระบี่','พังงา','สุราษฎร์ธานี','ตรัง'],
    west: ['กาญจนบุรี']
  };

  const seasonMatch = (aSeasons, selected) => {
    if (!selected) return true;
    if (selected === 'all') return true; // user accepts any season
    return aSeasons.includes(selected) || aSeasons.includes('all');
  };

  const regionMatch = (province, selected) => {
    if (!selected) return true;
    const provinces = regionMap[selected] || [];
    return provinces.includes(province);
  };

  const matchesAll = (a) => {
    if (options.types && options.types.length && !options.types.includes(a.type)) return false;
    if (options.budget && a.budget !== options.budget) return false;
    if (!seasonMatch(a.season, options.season)) return false;
    if (!regionMatch(a.province, options.region)) return false;
    return true;
  };

  const all = attractions;
  const exact = all.filter(matchesAll);

  const scoreItem = (a) => {
    let score = 0;
    if (options.types && options.types.length) score += options.types.includes(a.type) ? 5 : 0;
    if (options.budget) score += a.budget === options.budget ? 3 : 0;
    if (options.season) score += seasonMatch(a.season, options.season) ? 2 : 0;
    if (options.region) score += regionMatch(a.province, options.region) ? 1 : 0;
    return { ...a, score };
  };

  if (exact.length) {
    return exact.map(scoreItem).sort((x, y) => y.score - x.score);
  }

  // Fallback: progressively relax constraints (type > region > season)
  const byType = (options.types && options.types.length) ? all.filter(a => options.types.includes(a.type)) : [];
  const byRegion = options.region ? all.filter(a => regionMatch(a.province, options.region)) : [];
  const bySeason = options.season ? all.filter(a => seasonMatch(a.season, options.season)) : [];
  const unionMap = new Map();
  [...byType, ...byRegion, ...bySeason].forEach(a => unionMap.set(a.id, a));
  const relaxed = unionMap.size ? Array.from(unionMap.values()) : all;

  return relaxed.map(scoreItem).sort((x, y) => y.score - x.score);
}

// Page bootstrap
/**
 * DOMContentLoaded
 * - ผูกคลิกชิปฟิลเตอร์บนหน้าแรกให้เรนเดอร์การ์ดใหม่
 * - ใช้ event delegation จัดการคลิกปุ่มถูกใจให้ทำงานทุกหน้า
 */
document.addEventListener('DOMContentLoaded', () => {
  // Index filters
  const chips = document.querySelectorAll('[data-filter-type]');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderCards('cards-container', { type: chip.dataset.filterType });
    });
  });
  if (document.getElementById('cards-container')) {
    renderCards('cards-container', { type: 'all' });
  }

  // Like button (ถูกใจ) — ใช้ event delegation ให้ทำงานได้ทั้ง index และ recommendations
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.like-btn');
    if (!btn) return;
    const id = btn.dataset.id;
    toggleFavorite(id);
    const active = isFavorite(id);
    btn.setAttribute('aria-pressed', active);
    btn.textContent = active ? '♥ ถูกใจแล้ว' : '♡ ถูกใจ';
    btn.classList.toggle('btn-accent', active);
    btn.classList.toggle('btn-outline-accent', !active);
    // ถ้าอยู่ในหน้า favorites ให้รีเฟรชรายการ
    if (document.getElementById('favorites-container')) {
      renderFavoriteCards('favorites-container');
    }
  });
});