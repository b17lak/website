document.addEventListener('DOMContentLoaded', function() {
  // Überprüfe ob Bootstrap geladen ist
  if(typeof bootstrap === 'undefined') {
    console.error('Bootstrap nicht geladen!');
    return;
  }

  // Initialisiere Dropdowns
  var dropdowns = document.querySelectorAll('.dropdown-toggle');
  dropdowns.forEach(function(dropdown) {
    new bootstrap.Dropdown(dropdown);
  });

  // Mobile Navigation
  var navbarToggler = document.querySelector('.navbar-toggler');
  if(navbarToggler) {
    navbarToggler.addEventListener('click', function() {
      var targetId = this.getAttribute('data-bs-target');
      var target = document.querySelector(targetId);
      if(target) {
        target.classList.toggle('show');
      }
    });
  }
});