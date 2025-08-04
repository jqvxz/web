document.addEventListener('DOMContentLoaded', () => {

    const sections = document.querySelectorAll('header[id], main[id], section[id]');
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-btn');

    const observerOptions = {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const visibleSectionId = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                const activeLink = document.querySelector(`.nav-btn[href="#${visibleSectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    const toggleButtons = document.querySelectorAll('.btn-toggle-info');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');

            if (card) {
                card.classList.toggle('show-text');

                if (card.classList.contains('show-text')) {
                    button.textContent = 'Show Image';
                } else {
                    button.textContent = 'More Info';
                }
            }
        });
    });

    const tiltableCards = document.querySelectorAll('.card, .intro-card, .large-card, .social-card, .contact-card, .history-card');

    tiltableCards.forEach(card => {
        const onMouseMove = (event) => {
            const { left, top, width, height } = card.getBoundingClientRect();
            const mouseX = event.clientX - left;
            const mouseY = event.clientY - top;
            const centerX = width / 2;
            const centerY = height / 2;
            const rotateX = ((mouseY - centerY) / centerY) * -4;
            const rotateY = ((mouseX - centerX) / centerX) * 4;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        };

        const onMouseEnter = () => {
            card.style.transition = 'transform 0.1s linear';
        };

        const onMouseLeave = () => {
            card.style.transition = 'transform 0.4s ease-out';
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        };

        card.addEventListener('mousemove', onMouseMove);
        card.addEventListener('mouseenter', onMouseEnter);
        card.addEventListener('mouseleave', onMouseLeave);
    });

    const animatedElements = document.querySelectorAll(
        '.intro-card, .social-card, .contact-card, .card, .large-card, .history-card, .timeline-container, .decorative-line, .decorative-line-low'
    );

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } 
            else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, { threshold: 0.2 });

    animatedElements.forEach(element => {
        fadeInObserver.observe(element);
    });

    const introLogo = document.querySelector('.intro-logo');
    let clickTimestamps = [];

    if (introLogo) {
        introLogo.addEventListener('click', () => {
            const now = Date.now();
            clickTimestamps.push(now);
            clickTimestamps = clickTimestamps.filter(ts => now - ts < 1000);

            if (clickTimestamps.length >= 3) {
                alert("\n\n I miss u E...");
                clickTimestamps = [];
            }
        });
    }

    function showAlertIfMobile() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        || (window.innerWidth < 2000);

    if (isMobile) {
        alert(
        "This website currently works best on desktop devices.\n\n" +
        "The mobile version is still in development and will be available soon.\n\n" +
        "For the best experience, please view this site on a desktop device with a landscape screen orientation.\n\n" +
        "Visit GitHub for more information: https://github.com/jqvxz/web\n\n" +
        "2025 - jqvxz"
        );
    }
    }

    window.onload = showAlertIfMobile;

});