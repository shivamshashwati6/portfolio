document.addEventListener('DOMContentLoaded', () => {
    // ScrollReveal-like functionality for elements
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.project-card, .skill-item, .section-title');
    scrollElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
        observer.observe(el);
    });

    // Smooth navigation for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Logo parallax effect (subtle)
    const logo = document.querySelector('.logo');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        logo.style.transform = `scale(${1 + scrolled * 0.0001})`;
    });
});
