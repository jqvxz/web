// script.js
document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.innerWidth <= 768;

    const sections = document.querySelectorAll('header[id], main[id], section[id]');
    const observerOptions = {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const visibleSectionId = entry.target.id;
                document.querySelectorAll('.sidebar-nav .nav-btn').forEach(link => {
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

    document.querySelectorAll('.sidebar-nav .nav-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = button.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const elementPosition = targetSection.offsetTop;
                const elementHeight = targetSection.offsetHeight;
                const viewportHeight = window.innerHeight;
                const offsetPosition = elementPosition - (viewportHeight / 2) + (elementHeight / 2);

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    document.querySelectorAll('.btn-toggle-info').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            if (card) {
                card.classList.toggle('show-text');
                button.textContent = card.classList.contains('show-text') ? 'Show Image' : 'More Info';
            }
        });
    });

    if (!isMobile) {
        const tiltableCards = document.querySelectorAll('.card, .intro-card, .large-card, .social-card, .contact-card, .history-card');
        tiltableCards.forEach(card => {
            card.addEventListener('mousemove', (event) => {
                const { left, top, width, height } = card.getBoundingClientRect();
                const mouseX = event.clientX - left;
                const mouseY = event.clientY - top;
                const rotateX = ((mouseY - height / 2) / (height / 2)) * -4;
                const rotateY = ((mouseX - width / 2) / (width / 2)) * 4;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            });
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'transform 0.1s linear';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transition = 'transform 0.4s ease-out';
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            });
        });
    }

    const animatedElements = document.querySelectorAll('.intro-card, .social-card, .contact-card, .card, .large-card, .history-card, .timeline-container, .section-separator, .decorative-line, .decorative-line-low');
    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        fadeInObserver.observe(element);
    });

    const introLogo = document.querySelector('.intro-logo');
    let clickTimestamps = [];
    if (introLogo) {
        introLogo.addEventListener('click', () => {
            const now = Date.now();
            clickTimestamps = clickTimestamps.filter(ts => now - ts < 1000);
            clickTimestamps.push(now);
            if (clickTimestamps.length >= 3) {
                alert("\n\n I miss u E...");
                clickTimestamps = [];
            }
        });
    }

    if (isMobile) {
        const burgerMenu = document.querySelector('.burger-menu');
        const sidebar = document.querySelector('.sidebar');
        burgerMenu.addEventListener('click', () => {
            sidebar.classList.toggle('show');
        });

        document.querySelectorAll('.sidebar .nav-btn').forEach(link => {
            link.addEventListener('click', () => {
                sidebar.classList.remove('show');
            });
        });
    }

    function showMobileBetaAlert() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        || (window.innerWidth < 768);

    if (isMobile) {
        alert(
        "Mobile Support Now in Beta\n\n" +
        "You're visiting from a mobile or tablet device. Mobile support has been added, but it's still in beta and may not work perfectly on all devices.\n\n" +
        "For updates or to report issues, visit:\nhttps://github.com/jqvxz/web"
        );
    }
    }

    window.onload = showMobileBetaAlert;
});