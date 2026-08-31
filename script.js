// ===== Global site search data =====
const SITE_SEARCH = [
  // Projects
  { type: 'مشروع', title: 'فيلا سكنية حديثة', tags: 'فيلا سكنية منزل residential', url: 'project.html?id=villa' },
  { type: 'مشروع', title: 'مجمع سكني فاخر', tags: 'مجمع سكني شقق multi-family', url: 'project.html?id=complex' },
  { type: 'مشروع', title: 'تصميم داخلي - شقة', tags: 'تصميم داخلي شقة interior', url: 'project.html?id=apartment' },
  { type: 'مشروع', title: 'مبنى إداري حديث', tags: 'مبنى إداري مكتب commercial', url: 'project.html?id=office' },
  { type: 'مشروع', title: 'مركز ثقافي ومتحف', tags: 'مركز ثقافي متحف public', url: 'project.html?id=museum' },
  { type: 'مشروع', title: 'منتجع سياحي', tags: 'منتجع سياحي landscape hospitality', url: 'project.html?id=resort' },
  { type: 'مشروع', title: 'بيت صيفي على البحر', tags: 'بيت صيفي بحر residential', url: 'project.html?id=beach' },
  { type: 'مشروع', title: 'مركز تسوق حديث', tags: 'مول تجاري retail commercial', url: 'project.html?id=mall' },
  { type: 'مشروع', title: 'تصميم مكتب حديث', tags: 'مكتب تصميم workspace interior', url: 'project.html?id=workspace' },
  // Architects
  { type: 'معماري', title: 'أنطوني غاودي', tags: 'غاودي gaudi ساغرادا برشلونة', url: 'architect.html?id=gaudi' },
  { type: 'معماري', title: 'لو كوربوزييه', tags: 'كوربوزييه corbusier حداثة', url: 'architect.html?id=corbusier' },
  { type: 'معماري', title: 'فرانك لويد رايت', tags: 'رايت wright شلال fallingwater', url: 'architect.html?id=wright' },
  { type: 'معماري', title: 'زها حديد', tags: 'زها حديد hadid', url: 'architect.html?id=hadid' },
  { type: 'معماري', title: 'حسن فتحي', tags: 'حسن فتحي fathy قرنة طوب', url: 'architect.html?id=fathy' },
  { type: 'معماري', title: 'جيل معاصر · العالم العربي', tags: 'طلال العيسوي معاصر عربي', url: 'architect.html?id=contemporary' },
  // Services
  { type: 'خدمة', title: 'تصميم معماري', tags: 'تصميم معماري مخططات architecture', url: 'service.html?id=architecture' },
  { type: 'خدمة', title: 'تصميم داخلي', tags: 'تصميم داخلي interior أثاث', url: 'service.html?id=interior' },
  { type: 'خدمة', title: 'تصور ثلاثي الأبعاد', tags: 'رندر تصور 3d visualization', url: 'service.html?id=visualization' },
  // Pages
  { type: 'صفحة', title: 'تاريخ العمارة', tags: 'عمارة تاريخ architecture', url: 'architecture.html' },
  { type: 'صفحة', title: 'المهندس أحمد رضا', tags: 'أحمد رضا مؤسس founder', url: 'founder.html' },
  { type: 'صفحة', title: 'تواصل معنا', tags: 'تواصل واتساب contact', url: 'contact.html' },

  // Famous works
  { type: 'عمل', title: 'ساغرادا فاميليا', tags: 'غاودي gaudi sagrada برشلونة', url: 'work.html?id=gaudi-sagrada' },
  { type: 'عمل', title: 'حديقة غويل', tags: 'غاودي park guell', url: 'work.html?id=gaudi-guell' },
  { type: 'عمل', title: 'فيلا سافوي', tags: 'كوربوزييه savoye', url: 'work.html?id=corbusier-savoye' },
  { type: 'عمل', title: 'منزل الشلال', tags: 'رايت fallingwater شلال', url: 'work.html?id=wright-fallingwater' },
  { type: 'عمل', title: 'متحف غوغنهايم', tags: 'رايت guggenheim', url: 'work.html?id=wright-guggenheim' },
  { type: 'عمل', title: 'مركز حيدر علييف', tags: 'زها حديد باكو', url: 'work.html?id=hadid-aliyev' },
  { type: 'عمل', title: 'قرية القرنة الجديدة', tags: 'حسن فتحي gourna', url: 'work.html?id=fathy-gourna' },
  { type: 'صفحة', title: 'كل المشاريع', tags: 'مشاريع portfolio', url: 'index.html' }
];

// For suggestions grid on index
const allProjects = [
  { id: "villa", title: "فيلا سكنية حديثة", category: "residential", img: "https://images.unsplash.com/photo-1487958449943-2429e8be8624?w=400&h=400&fit=crop" },
  { id: "complex", title: "مجمع سكني فاخر", category: "residential", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop" },
  { id: "apartment", title: "تصميم داخلي - شقة", category: "interior", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=400&fit=crop" },
  { id: "office", title: "مبنى إداري حديث", category: "commercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop" },
  { id: "museum", title: "مركز ثقافي ومتحف", category: "public", img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=400&fit=crop" },
  { id: "resort", title: "منتجع سياحي", category: "landscape", img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=400&fit=crop" },
  { id: "beach", title: "بيت صيفي على البحر", category: "residential", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop" },
  { id: "mall", title: "مركز تسوق حديث", category: "commercial", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop" },
  { id: "workspace", title: "تصميم مكتب حديث", category: "interior", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=400&fit=crop" }
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
      const hay = (item.title + ' ' + item.tags + ' ' + item.type).toLowerCase();
      return hay.includes(q) || q.split(/\s+/).every(w => hay.includes(w));
    }).slice(0, 8);
  }

  function renderDropdown(results, q) {
    if (!q || results.length === 0) {
      dropdown.classList.remove('open');
      dropdown.innerHTML = q
        ? '<div class="search-empty">مفيش نتائج</div>'
        : '';
      if (q) dropdown.classList.add('open');
      return;
    }
    dropdown.innerHTML = results.map(r => `
      <a href="${r.url}" class="search-item" role="option">
        <span class="search-item-type">${r.type}</span>
        <span class="search-item-title">${r.title}</span>
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
    const matchSearch = currentSearch === '' ||
                        title.includes(currentSearch) ||
                        tags.includes(currentSearch);

    if (matchCategory && matchSearch) {
      card.classList.remove('hidden');
      visibleCount++;
    } else {
      card.classList.add('hidden');
    }
  });

  if (currentSearch || currentFilter !== 'all') {
    if (resultsInfo) resultsInfo.textContent = `تم العثور على ${visibleCount} مشروع`;
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

  suggestionsGrid.innerHTML = suggested.map(p => `
    <a href="project.html?id=${p.id || 'villa'}" class="suggestion-card">
      <img src="${p.img}" alt="${p.title}" loading="lazy">
      <p>${p.title}</p>
    </a>
  `).join('');
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
