  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.style.display === 'block';
    navMenu.style.display = isOpen ? 'none' : 'block';
    if (!isOpen) {
      navMenu.querySelector('ul').style.cssText = 'display:flex;flex-direction:column;gap:16px;position:absolute;top:100%;left:0;right:0;background:#FBFCFD;padding:20px 32px;border-bottom:1px solid #DDE8EC;';
    }
  });

  // Close mobile menu on link click
  document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => { navMenu.style.display = 'none'; });
  });

  // Contact form : traitement provisoire (site statique, pas encore de backend)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // TODO: connecter à un service d'envoi (Formspree, Netlify Forms, etc.)
    // ou à une adresse mailto une fois l'email du cabinet défini.
    status.style.display = 'block';
    form.reset();
  });
