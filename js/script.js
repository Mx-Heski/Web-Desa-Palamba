document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const pathname = window.location.pathname;
  let section;
  let sectionPosition;

  if (pathname.includes('index.html') || pathname === '/') {
      section = document.getElementById('sejarah-desa');
  } else if (pathname.includes('pemerintah.html')) {
      section = document.getElementById('struktur-pemerintahan');
  }

  if (section) {
      window.addEventListener('scroll', function () {
          sectionPosition = section.offsetTop;
          const scrollPosition = window.scrollY;

          if (scrollPosition >= sectionPosition) {
              navbar.classList.add('scrolled');
          } else {
              navbar.classList.remove('scrolled');
          }
      });
  }
});

document.querySelector('.toggle-link').addEventListener('click', function() {
  this.parentElement.classList.toggle('active');
});
