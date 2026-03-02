// Interactive Tilt Effect Vanilla JS
document.addEventListener("DOMContentLoaded", () => {
    // Info Cards 3D effect
    const tiltElements = document.querySelectorAll(".tilt-effect");

    // Only apply on desktop where it looks good cleanly
    if (window.matchMedia("(min-width: 768px)").matches) {
        tiltElements.forEach(el => {
            el.addEventListener("mousemove", (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                // Very subtle rotation for a clean design
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;

                el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            el.addEventListener("mouseleave", () => {
                el.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
            });
        });

        // Advanced 3D Title Parallax Effect
        const heroTitle = document.getElementById('hero-title-3d');
        if (heroTitle) {
            heroTitle.addEventListener('mousemove', (e) => {
                const rect = heroTitle.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                // Exaggerated rotation for the title
                const rotateX = ((y - centerY) / centerY) * -15;
                const rotateY = ((x - centerX) / centerX) * 15;

                heroTitle.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            heroTitle.addEventListener('mouseleave', () => {
                heroTitle.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
            });
        }
    }
});
