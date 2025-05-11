document.addEventListener('DOMContentLoaded', function() {
    // Efecto de scroll para el header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Menú móvil
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });

    // Smooth scroll para enlaces del menú
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
            
            // Cerrar menú móvil si está abierto
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });

    // Slider de médicos
    const doctorsSlider = document.querySelector('.doctors-slider');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    if (doctorsSlider && prevBtn && nextBtn) {
        let currentPosition = 0;
        const cardWidth = 330; // Ancho de cada tarjeta + gap
        
        nextBtn.addEventListener('click', function() {
            const maxScroll = doctorsSlider.scrollWidth - doctorsSlider.clientWidth;
            currentPosition = Math.min(currentPosition + cardWidth, maxScroll);
            doctorsSlider.scrollTo({
                left: currentPosition,
                behavior: 'smooth'
            });
        });
        
        prevBtn.addEventListener('click', function() {
            currentPosition = Math.max(currentPosition - cardWidth, 0);
            doctorsSlider.scrollTo({
                left: currentPosition,
                behavior: 'smooth'
            });
        });
    }

    // Animación al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.reveal-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('revealed');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar al cargar la página

    // Efecto hover para las tarjetas de especialidades
    const specialtyCards = document.querySelectorAll('.specialty-card');
    
    specialtyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });

    // Validación del formulario de contacto
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación simple
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            if (name && email && message) {
                // Aquí iría el código para enviar el formulario
                alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
                this.reset();
            } else {
                alert('Por favor completa todos los campos requeridos.');
            }
        });
    }
});