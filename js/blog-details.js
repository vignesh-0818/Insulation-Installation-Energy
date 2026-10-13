/**
 * ThermaGuard™ - Blog Details Dynamic Renderer
 * Reads URL query params (?id=... or ?post=...), loads corresponding article from THERMAGUARD_BLOG_POSTS,
 * and updates page title, breadcrumb, cover image, author, takeaways, full body content, tags, and related guides.
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initBlogDetails();
  });

  function initBlogDetails() {
    if (typeof THERMAGUARD_BLOG_POSTS === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const postKey = (params.get('id') || params.get('post') || 'attic-r60').toLowerCase();
    const post = THERMAGUARD_BLOG_POSTS[postKey] || THERMAGUARD_BLOG_POSTS['attic-r60'];

    renderBlogPost(post);
  }

  function renderBlogPost(post) {
    // 1. Page Title (Tab title)
    document.title = `ThermaGuard™ | ${post.title} - Blog Details`;

    // 2. Breadcrumb & Banner: Preserved as "Blog Details" and "Home / Blog / Blog Details"
    const breadcrumbCurrent = document.getElementById('breadcrumbArticleCurrent');
    if (breadcrumbCurrent) {
      breadcrumbCurrent.textContent = 'Blog Details';
    }

    const bannerTitle = document.getElementById('bannerArticleCategory');
    if (bannerTitle) {
      bannerTitle.textContent = 'Blog Details';
    }

    // 3. Category Badge & Meta
    const catBadge = document.getElementById('articleCategoryBadge');
    if (catBadge) {
      catBadge.textContent = post.category;
      catBadge.className = `badge ${post.categoryBadgeClass}`;
    }

    const dateEl = document.getElementById('articleDate');
    if (dateEl) {
      dateEl.textContent = `• ${post.date}`;
    }

    const readTimeEl = document.getElementById('articleReadTime');
    if (readTimeEl) {
      readTimeEl.textContent = `• ${post.readTime}`;
    }

    // 4. Headline
    const titleEl = document.getElementById('articleTitle');
    if (titleEl) {
      titleEl.textContent = post.title;
    }

    // 5. Author Bylines
    const authorAvatar = document.getElementById('authorAvatar');
    if (authorAvatar) {
      authorAvatar.src = post.author.avatar;
      authorAvatar.alt = post.author.name;
    }

    const authorNameEl = document.getElementById('authorName');
    if (authorNameEl) {
      authorNameEl.textContent = post.author.name;
    }

    const authorRoleEl = document.getElementById('authorRole');
    if (authorRoleEl) {
      authorRoleEl.textContent = post.author.role;
    }

    // 6. Cover Image
    const coverImg = document.getElementById('articleCoverImg');
    if (coverImg) {
      coverImg.src = post.coverImage;
      coverImg.alt = post.coverAlt;
    }

    // 7. Key Takeaways
    const takeawaysList = document.getElementById('articleTakeawaysList');
    if (takeawaysList && post.takeaways) {
      takeawaysList.innerHTML = post.takeaways.map(t => `<li class="mb-1">${t}</li>`).join('');
    }

    // 8. Main Body HTML
    const bodyEl = document.getElementById('articleBodyContent');
    if (bodyEl) {
      bodyEl.innerHTML = post.contentHtml;
    }

    // 9. Tags
    const tagsContainer = document.getElementById('articleTagsContainer');
    if (tagsContainer && post.tags) {
      tagsContainer.innerHTML = post.tags.map(tag => `<span class="badge-tag">${tag}</span>`).join(' ');
    }

    // 10. Sidebar Author Card
    const sideAuthorImg = document.getElementById('sideAuthorImg');
    if (sideAuthorImg) {
      sideAuthorImg.src = post.author.avatar;
      sideAuthorImg.alt = post.author.name;
    }

    const sideAuthorName = document.getElementById('sideAuthorName');
    if (sideAuthorName) {
      sideAuthorName.textContent = post.author.name;
    }

    const sideAuthorRole = document.getElementById('sideAuthorRole');
    if (sideAuthorRole) {
      sideAuthorRole.textContent = post.author.role;
    }

    const sideAuthorBio = document.getElementById('sideAuthorBio');
    if (sideAuthorBio) {
      sideAuthorBio.textContent = post.author.bio;
    }

    // 11. Sidebar Related Guides (filtered excluding active post)
    const relatedContainer = document.getElementById('sidebarRelatedGuides');
    if (relatedContainer) {
      const otherPosts = Object.values(THERMAGUARD_BLOG_POSTS).filter(p => p.id !== post.id);
      const selectedOthers = otherPosts.slice(0, 3);
      relatedContainer.innerHTML = selectedOthers.map(other => `
        <a href="blog-details.html?id=${other.id}" class="related-guide-item">
          <img src="${other.coverImage}" alt="${other.title}" class="related-guide-thumb">
          <div class="flex-grow-1">
            <h6 class="related-guide-title">${other.title}</h6>
            <span class="text-muted small" style="font-size: 0.78rem;">${other.date} • ${other.category}</span>
          </div>
        </a>
      `).join('');
    }
  }

  // Expose to window
  if (typeof window !== 'undefined') {
    window.renderBlogPost = renderBlogPost;
  }
})();
