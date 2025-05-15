// Initialisiere Bootstrap-Tooltips
document.addEventListener('DOMContentLoaded', function() {
  // Aktiviere alle Tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Dropdown-Menü Interaktion
  const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
  dropdownElementList.map(function(dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl);
  });

  // Dein bestehender Code mit Bootstrap-Kompatibilität
  document.querySelectorAll('.menu-header').forEach(header => {
    header.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Aktiven Zustand zurücksetzen
      document.querySelectorAll('.menu-header, .content-item').forEach(el => {
        el.classList.remove('active');
      });
      
      // Neue Auswahl aktivieren
      header.classList.add('active');
      const targetId = header.getAttribute('data-bs-target') || header.getAttribute('data-target');
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.classList.add('active');
          
          // Bootstrap Collapse für mobile Ansicht
          if (window.innerWidth < 992) {
            const collapseInstance = bootstrap.Collapse.getInstance(targetElement);
            if (collapseInstance) {
              collapseInstance.show();
            }
          }
        }
      }
    });
  });

  // Responsive Anpassungen
  function handleResize() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (window.innerWidth >= 992) {
      navbarCollapse.classList.add('show');
    } else {
      navbarCollapse.classList.remove('show');
    }
  }

  window.addEventListener('resize', handleResize);
  handleResize();
});