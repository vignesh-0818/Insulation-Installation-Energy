/**
 * ThermaGuard™ - Service Details Dynamic Renderer
 * Reads URL query params (?service=... or ?id=...), loads corresponding data from THERMAGUARD_SERVICES,
 * and updates page title, breadcrumb, cover image, intro text, specs, methodology, pricing, FAQs, and sidebar.
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initServiceDetails();
  });

  function initServiceDetails() {
    if (typeof THERMAGUARD_SERVICES === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const serviceKey = (params.get('service') || params.get('id') || 'attic').toLowerCase();
    const service = THERMAGUARD_SERVICES[serviceKey] || THERMAGUARD_SERVICES['attic'];

    renderService(service);
    updateSidebarLinks(service.id);
  }

  function renderService(service) {
    // 1. Page Title (Tab title)
    document.title = `ThermaGuard™ | ${service.title} - Service Details`;

    // 2. Banner Title & Breadcrumb: Preserved as "Service Details" and "Home / Services / Service Details"
    const breadcrumbCurrent = document.getElementById('breadcrumbServiceCurrent');
    if (breadcrumbCurrent) {
      breadcrumbCurrent.textContent = 'Service Details';
    }

    const bannerTitle = document.getElementById('bannerServiceTitle');
    if (bannerTitle) {
      bannerTitle.textContent = 'Service Details';
    }

    // 4. Cover Image
    const coverImg = document.getElementById('serviceCoverImg');
    if (coverImg) {
      coverImg.src = service.coverImage;
      coverImg.alt = service.coverAlt;
    }

    // 5. Subtitle & Overview HTML
    const subtitleEl = document.getElementById('serviceSubtitle');
    if (subtitleEl) {
      subtitleEl.textContent = service.subtitle;
    }

    const overviewEl = document.getElementById('serviceOverview');
    if (overviewEl) {
      overviewEl.innerHTML = service.overviewHtml;
    }

    // 6. Technical Specs
    const specsContainer = document.getElementById('serviceSpecsContainer');
    if (specsContainer && service.specs) {
      specsContainer.innerHTML = service.specs.map(spec => `
        <div class="col-sm-6">
          <div class="d-flex align-items-center gap-2">
            <i class="bi ${spec.icon} text-success fs-5"></i>
            <span><strong>${spec.label}:</strong> ${spec.value}</span>
          </div>
        </div>
      `).join('');
    }

    // 7. Methodology
    const methodologyTitleEl = document.getElementById('methodologyTitle');
    if (methodologyTitleEl) {
      methodologyTitleEl.textContent = service.methodologyTitle;
    }

    const methodologyIntroEl = document.getElementById('methodologyIntro');
    if (methodologyIntroEl) {
      methodologyIntroEl.textContent = service.methodologyIntro;
    }

    const methodologyStepsContainer = document.getElementById('methodologyStepsContainer');
    if (methodologyStepsContainer && service.steps) {
      methodologyStepsContainer.innerHTML = service.steps.map(step => `
        <div class="d-flex gap-3 p-3 rounded-3 bg-surface border border-tg">
          <div class="process-step-num m-0 flex-shrink-0" style="width: 40px; height: 40px; font-size: 1rem;">${step.num}</div>
          <div>
            <h5 class="mb-1">${step.title}</h5>
            <p class="text-muted small mb-0">${step.desc}</p>
          </div>
        </div>
      `).join('');
    }

    // 8. Pricing Schedule
    const pricingTitleEl = document.getElementById('pricingTitle');
    if (pricingTitleEl) {
      pricingTitleEl.textContent = service.pricingScheduleTitle;
    }

    const pricingRowsContainer = document.getElementById('pricingRowsContainer');
    if (pricingRowsContainer && service.pricingScheduleRows) {
      pricingRowsContainer.innerHTML = service.pricingScheduleRows.map(row => `
        <tr>
          <td class="fw-semibold">${row.name}</td>
          <td>${row.scope}</td>
          <td class="small text-muted">${row.unit}</td>
          <td class="text-success fw-bold">${row.price}</td>
        </tr>
      `).join('');
    }

    // 9. FAQs Accordion
    const faqContainer = document.getElementById('serviceFaqs');
    if (faqContainer && service.faqs) {
      faqContainer.innerHTML = service.faqs.map((faq, index) => {
        const collapseId = `sCollapse${index + 1}`;
        const headingId = `sFaqHeading${index + 1}`;
        const isFirst = index === 0;
        return `
          <div class="accordion-item">
            <h2 class="accordion-header" id="${headingId}">
              <button class="accordion-button ${isFirst ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${isFirst ? 'true' : 'false'}">
                ${faq.q}
              </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse ${isFirst ? 'show' : ''}" data-bs-parent="#serviceFaqs">
              <div class="accordion-body">
                ${faq.a}
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    // 10. Sidebar Assessment Booking Card
    const sideTitleEl = document.getElementById('sideBookingTitle');
    if (sideTitleEl) {
      sideTitleEl.textContent = service.sidebarBookingTitle;
    }

    const sideDescEl = document.getElementById('sideBookingDesc');
    if (sideDescEl) {
      sideDescEl.textContent = service.sidebarBookingDesc;
    }

    const sideFieldLabel = document.getElementById('sideFieldLabel');
    if (sideFieldLabel) {
      sideFieldLabel.textContent = service.sidebarFieldLabel;
    }

    const sideCustomInput = document.getElementById('sideCustomField');
    if (sideCustomInput) {
      sideCustomInput.placeholder = service.sidebarFieldPlaceholder;
    }
  }

  function updateSidebarLinks(activeId) {
    const navLinks = document.querySelectorAll('[data-service-nav]');
    navLinks.forEach(link => {
      const linkKey = link.getAttribute('data-service-nav');
      const icon = link.querySelector('i');
      if (linkKey === activeId) {
        link.classList.remove('bg-surface-alt', 'text-reset');
        link.classList.add('bg-primary', 'text-white', 'shadow-sm');
        if (icon) {
          icon.className = 'bi bi-check-circle-fill text-white small';
        }
      } else {
        link.classList.remove('bg-primary', 'text-white', 'shadow-sm');
        link.classList.add('bg-surface-alt', 'text-reset');
        if (icon) {
          icon.className = 'bi bi-chevron-right text-muted small';
        }
      }
    });
  }

  // Expose to window
  if (typeof window !== 'undefined') {
    window.renderService = renderService;
  }
})();
