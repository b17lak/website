// Warten bis alles geladen ist
window.addEventListener('load', function() {
  // Debug-Ausgabe
  console.log('Bootstrap Version:', bootstrap ? bootstrap.Tooltip.VERSION : 'nicht geladen');
  
  // Initialisiere alle Dropdowns
  var dropdowns = document.querySelectorAll('.dropdown-toggle');
  dropdowns.forEach(function(dropdown) {
    new bootstrap.Dropdown(dropdown);
  });

  // Mobile Navigation
  var navbarToggler = document.querySelector('.navbar-toggler');
  if(navbarToggler) {
    navbarToggler.addEventListener('click', function() {
      var target = document.querySelector(this.getAttribute('data-bs-target'));
      if(target) {
        target.classList.toggle('show');
        console.log('Menü wurde getoggelt');
      }
    });
  }
});