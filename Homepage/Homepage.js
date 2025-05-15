document.querySelectorAll('.menu-header').forEach(header => {
    header.addEventListener('click', () => {
      // Aktiven Zustand zurücksetzen
      document.querySelectorAll('.menu-header, .content-item').forEach(el => {
        el.classList.remove('active');
      });
      
      // Neue Auswahl aktivieren
      header.classList.add('active');
      const targetId = header.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });