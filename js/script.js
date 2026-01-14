/* ============================================
   ENTRE'PRIEUR - SCRIPT PRINCIPAL
   Interactivité, Validation, Animations
   ============================================ */

// ============================================
// 1. MENU BURGER & NAVIGATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav a');

  // Toggle menu burger
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
    });
  }

  // Fermer le menu au clic sur un lien
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
    });
  });

  // Marquer le lien actif
  updateActiveNavLink();
});

function updateActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ============================================
// 2. NAVBAR STICKY & SCROLL EFFECT
// ============================================

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ============================================
// 3. SMOOTH SCROLL POUR LES ANCRES
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================================
// 4. COMPTEUR POUR LE PROCHAIN ÉVÉNEMENT
// ============================================

function updateCountdown() {
  const countdownElement = document.getElementById('countdown');
  if (!countdownElement) return;

  // Date du 28 février 2026 à 10h00
  const eventDate = new Date('2026-02-28T10:00:00').getTime();
  
  function updateTimer() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      countdownElement.innerHTML = '<p style="text-align: center; color: #1e3a8a; font-weight: 700;">L\'événement a commencé !</p>';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
      <div class="countdown">
        <div class="countdown-item">
          <span>${days}</span>
          <p>Jours</p>
        </div>
        <div class="countdown-item">
          <span>${hours}</span>
          <p>Heures</p>
        </div>
        <div class="countdown-item">
          <span>${minutes}</span>
          <p>Minutes</p>
        </div>
        <div class="countdown-item">
          <span>${seconds}</span>
          <p>Secondes</p>
        </div>
      </div>
    `;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// ============================================
// 5. VALIDATION DES FORMULAIRES
// ============================================

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  let isValid = true;
  const inputs = form.querySelectorAll('input, textarea, select');

  inputs.forEach(input => {
    const errorElement = input.nextElementSibling;
    input.classList.remove('error');

    // Vérifier si le champ est requis
    if (input.hasAttribute('required') && input.value.trim() === '') {
      input.classList.add('error');
      if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.textContent = 'Ce champ est requis';
        errorElement.classList.add('show');
      }
      isValid = false;
    }
    // Vérifier l'email
    else if (input.type === 'email' && input.value.trim() !== '' && !validateEmail(input.value)) {
      input.classList.add('error');
      if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.textContent = 'Email invalide';
        errorElement.classList.add('show');
      }
      isValid = false;
    }
    // Vérifier la longueur max
    else if (input.hasAttribute('maxlength')) {
      const maxLength = input.getAttribute('maxlength');
      if (input.value.length > maxLength) {
        input.classList.add('error');
        if (errorElement && errorElement.classList.contains('error-message')) {
          errorElement.textContent = `Maximum ${maxLength} caractères`;
          errorElement.classList.add('show');
        }
        isValid = false;
      } else {
        if (errorElement && errorElement.classList.contains('error-message')) {
          errorElement.classList.remove('show');
        }
      }
    }
    else {
      if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.classList.remove('show');
      }
    }
  });

  return isValid;
}

// ============================================
// 6. GESTION DES FORMULAIRES
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // Formulaire de candidature
  const candidatureForm = document.getElementById('candidature-form');
  if (candidatureForm) {
    candidatureForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (validateForm('candidature-form')) {
        showSuccessMessage('candidature-form', 'Merci ! Votre candidature a été envoyée avec succès. Nous vous contacterons bientôt.');
        candidatureForm.reset();
      }
    });
  }

  // Formulaire de contact
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (validateForm('contact-form')) {
        showSuccessMessage('contact-form', 'Merci ! Votre message a été envoyé avec succès. Nous vous répondrons au plus tôt.');
        contactForm.reset();
      }
    });
  }

  // Validation en temps réel
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      validateForm(this.closest('form').id);
    });
  });

  // Compteur de caractères pour textarea
  const motivationField = document.querySelector('textarea[name="motivation"]');
  if (motivationField) {
    motivationField.addEventListener('input', function() {
      const maxLength = this.getAttribute('maxlength');
      const currentLength = this.value.length;
      const counter = document.getElementById('motivation-counter');
      if (counter) {
        counter.textContent = `${currentLength}/${maxLength}`;
      }
    });
  }
});

function showSuccessMessage(formId, message) {
  const form = document.getElementById(formId);
  if (!form) return;

  let successDiv = form.querySelector('.success-message');
  if (!successDiv) {
    successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    form.insertBefore(successDiv, form.firstChild);
  }

  successDiv.textContent = message;
  successDiv.classList.add('show');

  // Masquer le message après 5 secondes
  setTimeout(() => {
    successDiv.classList.remove('show');
  }, 5000);
}

// ============================================
// 7. ANIMATION DES ÉLÉMENTS AU SCROLL
// ============================================

function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeInUp');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.pillar-card, .event-card, .value-item').forEach(el => {
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', observeElements);

// ============================================
// 8. FLIP ANIMATION POUR LES CARTES DES PILIERS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const pillarCards = document.querySelectorAll('.pillar-card');
  
  pillarCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.animation = 'flip 0.6s ease-in-out';
    });
    
    card.addEventListener('animationend', function() {
      this.style.animation = '';
    });
  });
});

// ============================================
// 9. INITIALISATION GÉNÉRALE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // Mettre à jour le lien actif de la navigation
  updateActiveNavLink();
  
  // Démarrer le compteur d'événement
  updateCountdown();
  
  // Observer les éléments pour les animations
  observeElements();
});

// ============================================
// 10. UTILITAIRES
// ============================================

// Fonction pour scroller vers un élément
function scrollToElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Fonction pour ajouter une classe avec délai
function addClassWithDelay(selector, className, delay) {
  setTimeout(() => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add(className);
    });
  }, delay);
}

// Fonction pour formater une date
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(date).toLocaleDateString('fr-FR', options);
}
