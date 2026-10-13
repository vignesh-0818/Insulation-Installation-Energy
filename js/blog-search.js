/**
 * ThermaGuard™ - Blog Search & Category Filter
 * Real-time instant filtering by keywords and category tags, with pagination/load-more support
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initBlogFilter();
  });

  function initBlogFilter() {
    const searchInput = document.getElementById('blogSearchInput');
    const categoryBtns = document.querySelectorAll('.filter-btn[data-category]');
    const articleCards = document.querySelectorAll('.blog-article-item');
    const emptyState = document.getElementById('blogEmptyState');
    const articleCountBadge = document.getElementById('blogArticleCount');
    const loadMoreBtn = document.getElementById('blogLoadMoreBtn');

    if (!articleCards.length) return; // Exit if not on blog page

    let currentCategory = 'all';
    let searchQuery = '';

    // Category button click
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category').toLowerCase();
        applyFilter();
      });
    });

    // Search input typing
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        applyFilter();
      });
    }

    function applyFilter() {
      let visibleCount = 0;

      articleCards.forEach(card => {
        const cardCategory = (card.getAttribute('data-category') || '').toLowerCase();
        const cardTitle = (card.querySelector('.blog-title') ? card.querySelector('.blog-title').textContent : '').toLowerCase();
        const cardExcerpt = (card.querySelector('.blog-excerpt') ? card.querySelector('.blog-excerpt').textContent : '').toLowerCase();
        const cardTags = (card.getAttribute('data-tags') || '').toLowerCase();

        const matchesCategory = (currentCategory === 'all' || cardCategory === currentCategory);
        const matchesSearch = !searchQuery || 
          cardTitle.includes(searchQuery) || 
          cardExcerpt.includes(searchQuery) || 
          cardTags.includes(searchQuery);

        if (matchesCategory && matchesSearch) {
          card.style.display = 'block';
          card.classList.remove('d-none');
          visibleCount++;
        } else {
          card.style.display = 'none';
          card.classList.add('d-none');
        }
      });

      // Update count badge
      if (articleCountBadge) {
        articleCountBadge.textContent = `${visibleCount} article${visibleCount === 1 ? '' : 's'}`;
      }

      // Empty state display
      if (emptyState) {
        if (visibleCount === 0) {
          emptyState.classList.remove('d-none');
        } else {
          emptyState.classList.add('d-none');
        }
      }

      // Hide or show load more button
      if (loadMoreBtn) {
        if (visibleCount === 0 || searchQuery !== '' || currentCategory !== 'all') {
          loadMoreBtn.classList.add('d-none');
        } else {
          loadMoreBtn.classList.remove('d-none');
        }
      }
    }

    // Load more simulation
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loadMoreBtn.disabled = true;
        loadMoreBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Loading more articles...';

        setTimeout(() => {
          loadMoreBtn.innerHTML = '<i class="bi bi-check2-all me-2"></i>All articles currently displayed';
          loadMoreBtn.classList.remove('btn-outline-primary');
          loadMoreBtn.classList.add('btn-light', 'disabled');
        }, 600);
      });
    }
  }

})();
