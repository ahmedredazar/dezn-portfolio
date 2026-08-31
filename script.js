// ===== Global site search data (AR + EN) =====
const SITE_SEARCH = [
  // Projects
  { typeKey: 'project', titleAr: 'فيلا سكنية حديثة', titleEn: 'Modern Residential Villa', tags: 'فيلا سكنية منزل residential villa modern', url: 'project.html?id=villa' },
  { typeKey: 'project', titleAr: 'مجمع سكني فاخر', titleEn: 'Luxury Residential Complex', tags: 'مجمع سكني شقق multi-family complex luxury', url: 'project.html?id=complex' },
  { typeKey: 'project', titleAr: 'تصميم داخلي - شقة', titleEn: 'Interior Design — Apartment', tags: 'تصميم داخلي شقة interior apartment', url: 'project.html?id=apartment' },
  { typeKey: 'project', titleAr: 'مبنى إداري حديث', titleEn: 'Modern Office Building', tags: 'مبنى إداري مكتب commercial office building', url: 'project.html?id=office' },
  { typeKey: 'project', titleAr: 'مركز ثقافي ومتحف', titleEn: 'Cultural Center & Museum', tags: 'مركز ثقافي متحف public museum cultural', url: 'project.html?id=museum' },
  { typeKey: 'project', titleAr: 'منتجع سياحي', titleEn: 'Tourist Resort', tags: 'منتجع سياحي landscape hospitality resort', url: 'project.html?id=resort' },
  { typeKey: 'project', titleAr: 'بيت صيفي على البحر', titleEn: 'Seaside Summer House', tags: 'بيت صيفي بحر residential beach summer house coastal', url: 'project.html?id=beach' },
  { typeKey: 'project', titleAr: 'مركز تسوق حديث', titleEn: 'Modern Shopping Center', tags: 'مول تجاري retail commercial mall shopping', url: 'project.html?id=mall' },
  { typeKey: 'project', titleAr: 'تصميم مكتب حديث', titleEn: 'Modern Office Interior', tags: 'مكتب تصميم workspace interior office', url: 'project.html?id=workspace' },
  // Architects
  { typeKey: 'architect', titleAr: 'أنطوني غاودي', titleEn: 'Antoni Gaudí', tags: 'غاودي gaudi ساغرادا برشلونة barcelona', url: 'architect.html?id=gaudi' },
  { typeKey: 'architect', titleAr: 'لو كوربوزييه', titleEn: 'Le Corbusier', tags: 'كوربوزييه corbusier حداثة modernism', url: 'architect.html?id=corbusier' },
  { typeKey: 'architect', titleAr: 'فرانك لويد رايت', titleEn: 'Frank Lloyd Wright', tags: 'رايت wright شلال fallingwater', url: 'architect.html?id=wright' },
  { typeKey: 'architect', titleAr: 'زها حديد', titleEn: 'Zaha Hadid', tags: 'زها حديد hadid zaha', url: 'architect.html?id=hadid' },
  { typeKey: 'architect', titleAr: 'حسن فتحي', titleEn: 'Hassan Fathy', tags: 'حسن فتحي fathy قرنة طوب gourna', url: 'architect.html?id=fathy' },
  { typeKey: 'architect', titleAr: 'جيل معاصر · العالم العربي', titleEn: 'Contemporary generation', tags: 'طلال العيسوي معاصر عربي contemporary arab', url: 'architect.html?id=contemporary' },
  // Services
  { typeKey: 'service', titleAr: 'تصميم معماري', titleEn: 'Architectural Design', tags: 'تصميم معماري مخططات architecture design', url: 'service.html?id=architecture' },
  { typeKey: 'service', titleAr: 'تصميم داخلي', titleEn: 'Interior Design', tags: 'تصميم داخلي interior أثاث furniture', url: 'service.html?id=interior' },
  { typeKey: 'service', titleAr: 'تصور ثلاثي الأبعاد', titleEn: '3D Visualization', tags: 'رندر تصور 3d visualization render', url: 'service.html?id=visualization' },
  // Pages
  { typeKey: 'page', titleAr: 'تاريخ العمارة', titleEn: 'Architecture history', tags: 'عمارة تاريخ architecture history', url: 'architecture.html' },
  { typeKey: 'page', titleAr: 'المهندس أحمد رضا', titleEn: 'Eng. Ahmed Reda', tags: 'أحمد رضا مؤسس founder ahmed reda', url: 'founder.html' },
  { typeKey: 'page', titleAr: 'تواصل معنا', titleEn: 'Contact us', tags: 'تواصل واتساب contact whatsapp', url: 'contact.html' },
  { typeKey: 'page', titleAr: 'كل المشاريع', titleEn: 'All projects', tags: 'مشاريع portfolio projects', url: 'index.html' },
  // Famous works
  { typeKey: 'work', titleAr: 'ساغرادا فاميليا', titleEn: 'Sagrada Família', tags: 'غاودي gaudi sagrada برشلونة barcelona', url: 'work.html?id=gaudi-sagrada' },
  { typeKey: 'work', titleAr: 'حديقة غويل', titleEn: 'Park Güell', tags: 'غاودي park guell', url: 'work.html?id=gaudi-guell' },
  { typeKey: 'work', titleAr: 'كاسا باتيو', titleEn: 'Casa Batlló', tags: 'غاودي batllo casa', url: 'work.html?id=gaudi-batllo' },
  { typeKey: 'work', titleAr: 'كاسا ميلا', titleEn: 'Casa Milà', tags: 'غاودي mila pedrera', url: 'work.html?id=gaudi-mila' },
  { typeKey: 'work', titleAr: 'فيلا سافوي', titleEn: 'Villa Savoye', tags: 'كوربوزييه savoye villa', url: 'work.html?id=corbusier-savoye' },
  { typeKey: 'work', titleAr: 'وحدة السكن مارسيليا', titleEn: 'Unité d\'Habitation', tags: 'كوربوزييه unite marseille', url: 'work.html?id=corbusier-unite' },
  { typeKey: 'work', titleAr: 'منزل الشلال', titleEn: 'Fallingwater', tags: 'رايت fallingwater شلال wright', url: 'work.html?id=wright-fallingwater' },
  { typeKey: 'work', titleAr: 'متحف غوغنهايم', titleEn: 'Guggenheim Museum', tags: 'رايت guggenheim museum', url: 'work.html?id=wright-guggenheim' },
  { typeKey: 'work', titleAr: 'مركز حيدر علييف', titleEn: 'Heydar Aliyev Center', tags: 'زها حديد باكو hadid aliyev baku', url: 'work.html?id=hadid-aliyev' },
  { typeKey: 'work', titleAr: 'متحف MAXXI', titleEn: 'MAXXI Museum', tags: 'زها حديد maxxi rome', url: 'work.html?id=hadid-maxxi' },
  { typeKey: 'work', titleAr: 'قرية القرنة الجديدة', titleEn: 'New Gourna Village', tags: 'حسن فتحي gourna fathy', url: 'work.html?id=fathy-gourna' }
];

const TYPE_LABELS = {
  ar: { project: 'مشروع', architect: 'معماري', service: 'خدمة', page: 'صفحة', work: 'عمل' },
  en: { project: 'Project', architect: 'Architect', service: 'Service', page: 'Page', work: 'Work' }
};

function searchLang() {
  return (window.DEZN_I18N && window.DEZN_I18N.getLang()) || 'ar';
}

function itemTitle(item) {
  return searchLang() === 'en' ? (item.titleEn || item.titleAr) : (item.titleAr || item.title);
}

function itemType(item) {
  const lang = searchLang();
  const map = TYPE_LABELS[lang] || TYPE_LABELS.ar;
  return map[item.typeKey] || item.type || '';
}

// For suggestions grid on index
const allProjects = [
  { id: "villa", title: "فيلا سكنية حديثة", titleEn: "Modern Residential Villa", category: "residential", img: "https://images.unsplash.com/photo-1487958449943-2429e8be8624?w=400&h=400&fit=crop" },
  { id: "complex", title: "مجمع سكني فاخر", titleEn: "Luxury Residential Complex", category: "residential", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop" },
  { id: "apartment", title: "تصميم داخلي - شقة", titleEn: "Interior Design — Apartment", category: "interior", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=400&fit=crop" },
  { id: "office", title: "مبنى إداري حديث", titleEn: "Modern Office Building", category: "commercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop" },
  { id: "museum", title: "مركز ثقافي ومتحف", titleEn: "Cultural Center & Museum", category: "public", img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=400&fit=crop" },
  { id: "resort", title: "منتجع سياحي", titleEn: "Tourist Resort", category: "landscape", img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=400&fit=crop" },
  { id: "beach", title: "بيت صيفي على البحر", titleEn: "Seaside Summer House", category: "residential", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop" },
  { id: "mall", title: "مركز تسوق حديث", titleEn: "Modern Shopping Center", category: "commercial", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop" },
  { id: "workspace", title: "تصميم مكتب حديث", titleEn: "Modern Office Interior", category: "interior", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=400&fit=crop" }
];

// ===== Global search UI =====
function initGlobalSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  if (!searchInput) return;

  // Create dropdown if missing
  let dropdown = document.getElementById('searchDropdown');
  if (!dropdown) {
    dropdown = document.createElement('div');
    dropdown.id = 'searchDropdown';
    dropdown.className = 'search-dropdown';
    dropdown.setAttribute('role', 'listbox');
    const box = searchInput.closest('.search-box');
    if (box) {
      box.style.position = 'relative';
      box.appendChild(dropdown);
    }
  }

  function searchSite(q) {
    q = (q || '').trim().toLowerCase();
    if (!q) return [];
    return SITE_SEARCH.filter(item => {
      const hay = (
        (item.titleAr || '') + ' ' +
        (item.titleEn || '') + ' ' +
        (item.tags || '') + ' ' +
        (item.typeKey || '') + ' ' +
        itemType(item)
      ).toLowerCase();
      return hay.includes(q) || q.split(/\s+/).every(w => w && hay.includes(w));
    }).slice(0, 8);
  }

  function renderDropdown(results, q) {
    if (!q || results.length === 0) {
      dropdown.classList.remove('open');
      dropdown.innerHTML = q
        ? '<div class="search-empty">' + (window.DEZN_I18N ? window.DEZN_I18N.t('search.empty') : 'مفيش نتائج') + '</div>'
        : '';
      if (q) dropdown.classList.add('open');
      return;
    }
    dropdown.innerHTML = results.map(r => `
      <a href="${r.url}" class="search-item" role="option">
        <span class="search-item-type">${itemType(r)}</span>
        <span class="search-item-title">${itemTitle(r)}</span>
      </a>
    `).join('');
    dropdown.classList.add('open');
  }

  function onInput() {
    const q = searchInput.value;
    renderDropdown(searchSite(q), q.trim());
    // Also filter projects on index if present
    if (typeof applyFilters === 'function' && document.querySelector('.project-card')) {
      currentSearch = q.trim().toLowerCase();
      applyFilters();
    }
  }

  function goFirstOrClose() {
    const first = dropdown.querySelector('.search-item');
    if (first) {
      window.location.href = first.getAttribute('href');
    } else {
      dropdown.classList.remove('open');
    }
  }

  searchInput.addEventListener('input', onInput);
  searchInput.addEventListener('focus', onInput);
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      goFirstOrClose();
    }
    if (e.key === 'Escape') {
      dropdown.classList.remove('open');
      searchInput.blur();
    }
  });
  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      goFirstOrClose();
    });
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box')) {
      dropdown.classList.remove('open');
    }
  });
}

// ===== Index-only: Filter + Search Logic =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const resultsInfo = document.getElementById('resultsInfo');
const noResults = document.getElementById('noResults');
const suggestionsGrid = document.getElementById('suggestionsGrid');

let currentFilter = 'all';
let currentSearch = '';

function applyFilters() {
  if (!projectCards.length) return;
  let visibleCount = 0;

  projectCards.forEach(card => {
    const category = card.dataset.category;
    const tags = (card.dataset.tags || '').toLowerCase();
    const title = card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : '';

    const matchCategory = currentFilter === 'all' || category === currentFilter;
    const enTitle = (window.DEZN_I18N && card.querySelector('[data-i18n-p]'))
      ? (window.DEZN_I18N.t('p.' + card.querySelector('[data-i18n-p]').getAttribute('data-i18n-p')) || '').toLowerCase()
      : '';
    const matchSearch = currentSearch === '' ||
                        title.includes(currentSearch) ||
                        tags.includes(currentSearch) ||
                        enTitle.includes(currentSearch);

    if (matchCategory && matchSearch) {
      card.classList.remove('hidden');
      visibleCount++;
    } else {
      card.classList.add('hidden');
    }
  });

  if (currentSearch || currentFilter !== 'all') {
    if (resultsInfo) {
      const tpl = window.DEZN_I18N ? window.DEZN_I18N.t('results') : 'تم العثور على {n} مشروع';
      resultsInfo.textContent = tpl.replace('{n}', visibleCount);
    }
  } else if (resultsInfo) {
    resultsInfo.textContent = '';
  }

  if (noResults) noResults.style.display = visibleCount === 0 ? 'block' : 'none';
  updateSuggestions();
}

function resetAll() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  currentSearch = '';
  currentFilter = 'all';
  filterBtns.forEach(b => b.classList.remove('active'));
  const allBtn = document.querySelector('[data-filter="all"]');
  if (allBtn) allBtn.classList.add('active');
  applyFilters();
  const dropdown = document.getElementById('searchDropdown');
  if (dropdown) dropdown.classList.remove('open');
}

// ===== Filter buttons =====
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    applyFilters();
  });
});

// ===== Suggestions (like Pinterest / Behance) =====
function updateSuggestions() {
  if (!suggestionsGrid) return;

  let suggested = [];

  if (currentFilter !== 'all') {
    suggested = allProjects.filter(p => p.category === currentFilter);
  } else if (currentSearch) {
    suggested = allProjects.filter(p =>
      p.title.toLowerCase().includes(currentSearch) ||
      p.category.includes(currentSearch)
    );
  }

  if (suggested.length < 4) {
    const shuffled = [...allProjects].sort(() => 0.5 - Math.random());
    suggested = shuffled.slice(0, 4);
  } else {
    suggested = suggested.slice(0, 4);
  }

  const lang = searchLang();
  suggestionsGrid.innerHTML = suggested.map(p => {
    const title = lang === 'en' && p.titleEn ? p.titleEn : p.title;
    return `<a href="project.html?id=${p.id || 'villa'}" class="suggestion-card">
      <img src="${p.img}" alt="${title}" loading="lazy">
      <p>${title}</p>
    </a>`;
  }).join('');
}

// ===== Smooth scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  initGlobalSearch();
  updateSuggestions();

  projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.45s ease ${index * 0.07}s, transform 0.45s ease ${index * 0.07}s`;
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 80);
  });
});


window.addEventListener('dezn-lang', () => {
  if (typeof updateSuggestions === 'function') updateSuggestions();
  if (typeof applyFilters === 'function') applyFilters();
});
