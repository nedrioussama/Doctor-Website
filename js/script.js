  // Menu mobile : on pilote uniquement la liste (ul) via une classe,
  // jamais toute la balise nav, pour ne pas casser l'affichage desktop.
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navList = navMenu.querySelector('ul');

  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('is-open');
  });

  // Fermer le menu mobile apres un clic sur un lien
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => { navList.classList.remove('is-open'); });
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
