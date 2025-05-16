document.addEventListener('DOMContentLoaded', function() {
  // Initialisiere Tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Initialisiere Dropdowns
  var dropdownToggleList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
  var dropdownList = dropdownToggleList.map(function (dropdownToggleEl) {
      return new bootstrap.Dropdown(dropdownToggleEl);
  });

  // Mobile Menü Handling
  function handleResize() {
      var navbarCollapse = document.querySelector('.navbar-collapse');
      if (window.innerWidth >= 992) {
          navbarCollapse.classList.add('show');
      } else {
          navbarCollapse.classList.remove('show');
      }
  }

  window.addEventListener('resize', handleResize);
  handleResize();
});