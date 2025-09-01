const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !expanded);
    nav.classList.toggle('nav-open');
  });
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (window.innerWidth < 700 && nav) nav.style.display = 'none';
    }
  });
});

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        headers: { 'Accept': 'application/json' },
        body: formData
      });

      if (response.ok) {
        alert('✅ Thanks! Your message has been sent.');
        form.reset();
      } else {
        alert('❌ Oops! There was a problem sending your message.');
      }
    } catch (error) {
      alert('❌ Network error. Please try again later.');
    }
  });
}
