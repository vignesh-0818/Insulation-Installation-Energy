/**
 * ThermaGuard™ - Blog Search & Category Filter
 * Real-time instant filtering by keywords and category tags for all articles without pagination
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initBlogFilter();
  });

  function initBlogFilter() {
    const searchInput = document.getElementById('blogSearchInput');
    const categoryBtns = document.querySelectorAll('.filter-btn[data-category]');
    const articleCards = Array.from(document.querySelectorAll('.blog-article-item'));
    const emptyState = document.getElementById('blogEmptyState');
    const articleCountBadge = document.getElementById('blogArticleCount');

    if (!articleCards.length) return; // Exit if not on blog page

    let currentCategory = 'all';

    // Category button click
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = (btn.getAttribute('data-category') || 'all').toLowerCase();
        applyFilter();
      });
    });

    // Search input typing
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        applyFilter();
      });
    }

    function applyFilter() {
      const currentQuery = searchInput ? searchInput.value.trim().toLowerCase() : '';
      let matchCount = 0;

      articleCards.forEach(card => {
        const cardCategory = (card.getAttribute('data-category') || '').toLowerCase();
        const cardTitle = (card.querySelector('.blog-title') ? card.querySelector('.blog-title').textContent : '').toLowerCase();
        const cardExcerpt = (card.querySelector('.blog-excerpt') ? card.querySelector('.blog-excerpt').textContent : '').toLowerCase();
        const cardTags = (card.getAttribute('data-tags') || '').toLowerCase();

        const matchesCategory = (currentCategory === 'all' || cardCategory === currentCategory);
        const matchesSearch = !currentQuery || 
          cardTitle.includes(currentQuery) || 
          cardExcerpt.includes(currentQuery) || 
          cardTags.includes(currentQuery);

        if (matchesCategory && matchesSearch) {
          card.style.display = 'block';
          card.classList.remove('d-none');
          matchCount++;
        } else {
          card.style.display = 'none';
          card.classList.add('d-none');
        }
      });

      // Update count badge
      if (articleCountBadge) {
        if (matchCount === 0) {
          articleCountBadge.textContent = '0 articles found';
        } else if (matchCount === articleCards.length) {
          articleCountBadge.textContent = `Showing all ${matchCount} articles`;
        } else {
          articleCountBadge.textContent = `Showing ${matchCount} of ${articleCards.length} articles`;
        }
      }

      // Empty state display
      if (emptyState) {
        if (matchCount === 0) {
          emptyState.classList.remove('d-none');
        } else {
          emptyState.classList.add('d-none');
        }
      }
    }

    // Initialize filter on page load
    applyFilter();
  }
})();
