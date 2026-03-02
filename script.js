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

    // Countdown Timer Logic
    const targetDate = new Date("March 9, 2026 20:00:00").getTime();

    const daysEl = document.getElementById("cd-days");
    const hoursEl = document.getElementById("cd-hours");
    const minsEl = document.getElementById("cd-mins");
    const secsEl = document.getElementById("cd-secs");

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            daysEl.innerText = "00";
            hoursEl.innerText = "00";
            minsEl.innerText = "00";
            secsEl.innerText = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Format to always have 2 digits
        daysEl.innerText = days.toString().padStart(2, '0');
        hoursEl.innerText = hours.toString().padStart(2, '0');
        minsEl.innerText = minutes.toString().padStart(2, '0');
        secsEl.innerText = seconds.toString().padStart(2, '0');
    }

    // Initial call
    if (daysEl) {
        updateCountdown();
        // Update every second
        setInterval(updateCountdown, 1000);
    }
});
