// ============================================================
// 1. TYPEWRITER EFFECT — types out the "status" line in the hero
// ============================================================
const statusMessages = [
  "Open to internship opportunities",
  "Learning React, Node.js & MongoDB",
  "Web Dev · Graphic Design · Social Media",
  "Let's build something together"
];

function typeWriter(el, messages, msgIndex = 0, charIndex = 0, deleting = false) {
  const current = messages[msgIndex];

  if (!deleting) {
    el.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      // pause at full text, then start deleting
      setTimeout(() => typeWriter(el, messages, msgIndex, charIndex, true), 1400);
      return;
    }
  } else {
    el.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      msgIndex = (msgIndex + 1) % messages.length;
    }
  }

  const speed = deleting ? 30 : 55;
  setTimeout(() => typeWriter(el, messages, msgIndex, charIndex, deleting), speed);
}

const typewriterEl = document.getElementById('typewriter');
if (typewriterEl) typeWriter(typewriterEl, statusMessages);


// ============================================================
// 2. MOBILE MENU TOGGLE
// ============================================================
const hamburger = document.getElementById('hamburger');
const tabs = document.getElementById('tabs');

hamburger.addEventListener('click', () => {
  tabs.classList.toggle('open');
});

// close mobile menu after a link is tapped
tabs.querySelectorAll('.tab').forEach(link => {
  link.addEventListener('click', () => tabs.classList.remove('open'));
});


// ============================================================
// 3. ACTIVE TAB HIGHLIGHT ON SCROLL
// ============================================================
const sections = document.querySelectorAll('.section, .hero');
const tabLinks = document.querySelectorAll('.tab');

const tabObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      tabLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.tab === id);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(section => {
  if (section.id) tabObserver.observe(section);
});


// ============================================================
// 4. SCROLL REVEAL — fade up sections and animate skill bars
// ============================================================
document.querySelectorAll('.section').forEach(section => section.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      // if this section contains skill bars, animate them too
      entry.target.querySelectorAll('.skill-fill').forEach(bar => bar.classList.add('in-view'));
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


// ============================================================
// 5. CONTACT FORM — basic validation + mailto handoff
// ============================================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = 'Please fill in every field.';
    formStatus.style.color = '#dc2626';
    return;
  }

  // Opens the user's email client pre-filled with the message.
  // Replace "youremail@example.com" with your real email.
  const mailto = `mailto:youremail@example.com?subject=Portfolio message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`;
  window.location.href = mailto;

  formStatus.textContent = 'Opening your email app...';
  formStatus.style.color = '#10b981';
  contactForm.reset();
});


// ============================================================
// 6. FOOTER YEAR
// ============================================================
document.getElementById('year').textContent = new Date().getFullYear();
