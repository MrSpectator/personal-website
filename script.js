// Staggered hero animation
window.addEventListener('DOMContentLoaded', () => {
  const heroEls = document.querySelectorAll('.hero > *');
  heroEls.forEach((el, i) => {
    setTimeout(() => el.classList.add('show'), 200 + i * 200);
  });
});

// Section reveal on scroll
const revealSections = document.querySelectorAll('.section-reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealSections.forEach(section => {
  revealObserver.observe(section);
});

// Experience tab switching
const expTabs = document.querySelectorAll('.exp-tab');
const expPanels = document.querySelectorAll('.exp-panel');
expTabs.forEach((tab, idx) => {
  tab.addEventListener('click', () => {
    expTabs.forEach(t => t.classList.remove('active'));
    expPanels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    expPanels[idx].classList.add('active');
  });
});

// Mobile nav toggle
const burger = document.querySelector('.navbar-burger');
const mobileNav = document.getElementById('mobileNav');
let navOpen = false;
if (burger && mobileNav) {
  burger.addEventListener('click', () => {
    navOpen = !navOpen;
    mobileNav.style.display = navOpen ? 'flex' : 'none';
    burger.classList.toggle('open', navOpen);
  });
  // Close mobile nav on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navOpen = false;
      mobileNav.style.display = 'none';
      burger.classList.remove('open');
    });
  });
}

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
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