// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');
    const ctaButton = document.querySelector('.cta-button');
    const contactForm = document.getElementById('contact-form');

    // Función para cambiar de sección
    function changeSection(id) {
        // Ocultar todas las secciones
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Mostrar la sección seleccionada
        document.getElementById(id).classList.add('active');

        // Actualizar navegación activa
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === '#' + id) {
                link.classList.add('active');
            }
        });

        // Scroll al inicio de la página
        window.scrollTo(0, 0);
    }

    // Event listeners para los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            changeSection(sectionId);
        });
    });

    // Event listener para el botón CTA
    if(ctaButton) {
        ctaButton.addEventListener('click', function() {
            changeSection('proyecto');
        });
    }

    // Manejar envío del formulario de contacto
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener valores del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Aquí normalmente enviarías los datos a un servidor
            // Para este ejemplo, solo mostraremos un mensaje de confirmación
            alert(`¡Gracias ${name} por contactarnos! Te responderemos pronto a ${email}.`);
            
            // Limpiar formulario
            contactForm.reset();
        });
    }

    // Efectos de animación para elementos al hacer scroll
    function animateOnScroll() {
        const features = document.querySelectorAll('.feature');
        const teamMembers = document.querySelectorAll('.team-member');
        
        // Función para verificar si un elemento está en el viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
        // Animar características del proyecto
        features.forEach((feature, index) => {
            if(isInViewport(feature)) {
                setTimeout(() => {
                    feature.style.opacity = '1';
                    feature.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
        
        // Animar miembros del equipo
        teamMembers.forEach((member, index) => {
            if(isInViewport(member)) {
                setTimeout(() => {
                    member.style.opacity = '1';
                    member.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }
    
    // Inicializar estilos para animaciones
    document.querySelectorAll('.feature, .team-member').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
    });
    
    // Event listener para scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Llamar a la función una vez al cargar la página
    animateOnScroll();
});