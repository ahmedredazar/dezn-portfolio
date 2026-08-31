// ===== Data for suggestions =====
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

// ===== Elements =====
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const resultsInfo = document.getElementById('resultsInfo');
const noResults = document.getElementById('noResults');
const suggestionsGrid = document.getElementById('suggestionsGrid');

let currentFilter = 'all';
let currentSearch = '';

// ===== Filter + Search Logic =====
function applyFilters() {
  let visibleCount = 0;

  projectCards.forEach(card => {
    const category = card.dataset.category;
    const tags = (card.dataset.tags || '').toLowerCase();
    const title = card.querySelector('h3').textContent.toLowerCase();

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

  // Results info
  if (currentSearch || currentFilter !== 'all') {
    if (resultsInfo) resultsInfo.textContent = `تم العثور على ${visibleCount} مشروع`;
  } else if (resultsInfo) {
    resultsInfo.textContent = '';
  }

  // No results
  if (noResults) noResults.style.display = visibleCount === 0 ? 'block' : 'none';

  // Update suggestions based on current filter
  updateSuggestions();
}

// ===== Search =====
function doSearch() {
  currentSearch = searchInput.value.trim().toLowerCase();
  applyFilters();
}

if (searchInput) searchInput.addEventListener('input', doSearch);
if (searchInput) searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') doSearch();
});
if (searchBtn) searchBtn.addEventListener('click', doSearch);

// ===== Filter buttons =====
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    applyFilters();
  });
});

// ===== Reset =====
function resetAll() {
  searchInput.value = '';
  currentSearch = '';
  currentFilter = 'all';
  filterBtns.forEach(b => b.classList.remove('active'));
  const allBtn = document.querySelector('[data-filter="all"]');
  if (allBtn) allBtn.classList.add('active');
  applyFilters();
}

// ===== Suggestions (like Pinterest / Behance) =====
function updateSuggestions() {
  if (!suggestionsGrid) return;

  let suggested = [];

  if (currentFilter !== 'all') {
    // Show projects from same category
    suggested = allProjects.filter(p => p.category === currentFilter);
  } else if (currentSearch) {
    // Show projects that match search somehow
    suggested = allProjects.filter(p => 
      p.title.toLowerCase().includes(currentSearch) || 
      p.category.includes(currentSearch)
    );
  }

  // If still empty or too few → random suggestions
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
  updateSuggestions();

  // Fade-in animation
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
