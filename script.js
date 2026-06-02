document.addEventListener('DOMContentLoaded', () => {
    
    // Header Scroll Effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Mobile Menu Toggle (Basic Implementation)
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        // In a real app, you'd toggle a class to show a mobile overlay menu.
        // For now, we'll just alert or do a simple toggle if desired.
        alert('Відкриття мобільного меню');
    });

    // Testimonials Slider (Basic functionality for desktop arrows)
    const btnLeft = document.querySelector('.slider-btn.left');
    const btnRight = document.querySelector('.slider-btn.right');
    const testimonialsGrid = document.querySelector('.testimonials-grid');

    if (btnLeft && btnRight && testimonialsGrid) {
        btnLeft.addEventListener('click', () => {
            // Logic to slide left (e.g., updating scrollLeft or CSS transform)
            testimonialsGrid.style.transform = 'translateX(10px)';
            setTimeout(() => {
                testimonialsGrid.style.transform = 'translateX(0)';
            }, 300);
        });

        btnRight.addEventListener('click', () => {
            // Logic to slide right
            testimonialsGrid.style.transform = 'translateX(-10px)';
            setTimeout(() => {
                testimonialsGrid.style.transform = 'translateX(0)';
            }, 300);
        });
    }

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
