// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.vertical-nav .nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 30,
        behavior: 'smooth'
      });
    }
  });
});

// Scrollspy for active nav
const sections = document.querySelectorAll('section[data-section]');
const navItems = document.querySelectorAll('.vertical-nav .nav-link');
function activateNav() {
  let index = sections.length;
  while(--index && window.scrollY + 120 < sections[index].offsetTop) {}
  navItems.forEach(link => link.classList.remove('active'));
  if (navItems[index]) navItems[index].classList.add('active');
}
window.addEventListener('scroll', activateNav);
activateNav();

// Fade-in animation on scroll
const fadeEls = document.querySelectorAll('.fade-in');
const fadeInObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
fadeEls.forEach(el => fadeInObserver.observe(el));

// Contact form handler (existing)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formAlert').classList.remove('d-none');
  this.reset();
}); 