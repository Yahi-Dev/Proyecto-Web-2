// Preloader
window.addEventListener('load', function() {
  const preloader = document.querySelector('.preloader');
  setTimeout(() => {
    preloader.classList.add('fade-out');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }, 1500);
});

// Header Scroll Effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', function() {
  menuToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Hero Slider
const heroSlides = document.querySelectorAll('.hero-slide');
const heroDots = document.querySelectorAll('.hero-dot');
let currentSlide = 0;

function showSlide(index) {
  heroSlides.forEach(slide => slide.classList.remove('active'));
  heroDots.forEach(dot => dot.classList.remove('active'));
  
  heroSlides[index].classList.add('active');
  heroDots[index].classList.add('active');
  
  // Reiniciar animaciones
  const animateElements = heroSlides[index].querySelectorAll('.animate-text');
  animateElements.forEach((el, i) => {
    el.style.animation = 'none';
    setTimeout(() => {
      el.style.animation = '';
    }, 10);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % heroSlides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
  showSlide(currentSlide);
}

// Auto slide change
let slideInterval = setInterval(nextSlide, 5000);

// Pause on hover
const heroSlider = document.querySelector('.hero-slider');
heroSlider.addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

heroSlider.addEventListener('mouseleave', () => {
  slideInterval = setInterval(nextSlide, 5000);
});

// Dot navigation
heroDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  });
});

// Next/Prev buttons
document.querySelector('.hero-next').addEventListener('click', () => {
  nextSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
});

document.querySelector('.hero-prev').addEventListener('click', () => {
  prevSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
});

// Testimonial Slider
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialDots = document.querySelectorAll('.testimonial-dot');
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonialSlides.forEach(slide => slide.classList.remove('active'));
  testimonialDots.forEach(dot => dot.classList.remove('active'));
  
  testimonialSlides[index].classList.add('active');
  testimonialDots[index].classList.add('active');
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
  showTestimonial(currentTestimonial);
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonialSlides.length) % testimonialSlides.length;
  showTestimonial(currentTestimonial);
}

// Dot navigation
testimonialDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentTestimonial = index;
    showTestimonial(currentTestimonial);
  });
});

// Next/Prev buttons
document.querySelector('.testimonial-next').addEventListener('click', nextTestimonial);
document.querySelector('.testimonial-prev').addEventListener('click', prevTestimonial);

// Auto testimonial change
setInterval(nextTestimonial, 7000);

// Back to Top Button
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    backToTop.classList.add('active');
  } else {
    backToTop.classList.remove('active');
  }
});

backToTop.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
});

// Form Submission
const appointmentForm = document.getElementById('appointmentForm');
if (appointmentForm) {
  appointmentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.querySelector('span').textContent;
    
    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = 'Enviando...';
    
    setTimeout(() => {
      submitBtn.querySelector('span').textContent = '¡Cita Agendada!';
      submitBtn.classList.remove('btn-primary');
      submitBtn.classList.add('btn-success');
      
      // Reset form
      setTimeout(() => {
        appointmentForm.reset();
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = originalText;
        submitBtn.classList.remove('btn-success');
        submitBtn.classList.add('btn-primary');
        
        // Show success message
        alert('¡Gracias! Tu cita ha sido agendada. Nos pondremos en contacto contigo pronto.');
      }, 2000);
    }, 1500);
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      if (navMenu.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    }
  });
});