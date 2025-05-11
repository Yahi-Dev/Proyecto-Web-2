// Animaciones más avanzadas
document.addEventListener('DOMContentLoaded', function() {
    // Efecto de onda en el logo
    const logoCircle = document.querySelector('.logo-circle');
    if (logoCircle) {
        logoCircle.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 1s ease';
        });
        
        logoCircle.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    }

    // Efecto de hover en los botones
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 8px 15px rgba(0, 180, 216, 0.3)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 10px rgba(0, 180, 216, 0.2)';
        });
    });

    // Efecto de aparición secuencial para las especialidades
    const specialtyCards = document.querySelectorAll('.specialty-card');
    specialtyCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Efecto de parallax mejorado
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        });
    }

    // Efecto de hover 3D para las tarjetas de médicos
    const doctorCards = document.querySelectorAll('.doctor-card');
    doctorCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });

    // Efecto de carga para las imágenes
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        img.onload = function() {
            this.style.opacity = '1';
        };
        
        // En caso de que la imagen ya esté cargada
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});