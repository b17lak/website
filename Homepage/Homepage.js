document.addEventListener('DOMContentLoaded', function() {
  // Initialisiert Bootstrap Komponenten
  var dropdowns = document.querySelectorAll('.dropdown-toggle');
  dropdowns.forEach(function(dropdown) {
    new bootstrap.Dropdown(dropdown);
  });
  
  // Mobile Menü Toggle
  var navbarToggler = document.querySelector('.navbar-toggler');
  navbarToggler.addEventListener('click', function() {
    var target = document.querySelector(this.getAttribute('data-bs-target'));
    target.classList.toggle('show');
  });
});