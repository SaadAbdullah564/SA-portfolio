/* 
   Muhammad Saad Abdullah Portfolio - Vanilla JavaScript
   Interactions and Animations
*/

document.addEventListener('DOMContentLoaded', () => {
    // 2. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Optional: stop observing after reveal
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));

    // 3. Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 4. Parallax effect for hero (subtle)
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroVisual = document.querySelector('.ambient-glow');
        if (heroVisual) {
            heroVisual.style.transform = `translate3d(0, ${scrolled * 0.2}px, 0)`;
        }
    });

    // 5. Image Reveal Effect
    const images = document.querySelectorAll('.about-image img, .project-img img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.onload = () => {
            img.style.transition = 'opacity 1s ease';
            img.style.opacity = '1';
        };
        // If image is already cached
        if (img.complete) {
            img.style.opacity = '1';
        }
    });

    // Log for verification
    console.log('Muhammad Saad Abdullah Portfolio Initialized.');
});
