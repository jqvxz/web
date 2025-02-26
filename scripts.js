
// Make the Scroll Button usable

document.addEventListener("DOMContentLoaded", function() {
    
    const scrollButton = document.getElementById("scrollButton");

    if (scrollButton) {
        scrollButton.addEventListener("click", function() {
            window.scrollTo({
                top: -1,
                behavior: 'smooth'
            });
        });
    }
});

// Dark mode funktion (only mobile, pc soon)

document.addEventListener("DOMContentLoaded", function() {

    const darkButton = document.getElementById('darkButton');
    const body = document.body;
    const contentContainer = document.querySelector('.content-container-main');
    const contentContainer15 = document.querySelector('.content-container-main-15');
    const b2Elements = document.querySelectorAll('.b-2');
    const b3Elements = document.querySelectorAll('.b-3');
    const b2CenterElements = document.querySelectorAll('.b-2-center');
    const linkButtons = document.querySelectorAll('.link-button');
    const originalColor = 'rgb(181, 181, 181)';
    const darkColor = 'rgb(33, 33, 33)';
    const lighterB2Color = 'rgba(255, 255, 255, 0.5)';
    const originalB2Color = 'rgba(22, 22, 22, 0.625)';

    function applyBackgroundColor(color) {
        body.style.backgroundColor = color;
        if (contentContainer) {
            contentContainer.style.backgroundColor = color;
        }
        if (contentContainer15) {
            contentContainer15.style.backgroundColor = color;
        }
        b2Elements.forEach(function(element) {
            element.style.backgroundColor = (color === darkColor) ? lighterB2Color : originalB2Color;
            element.style.color = (color === darkColor) ? 'black' : 'white';
            
            const h1Elements = element.querySelectorAll('h1');
            h1Elements.forEach(h1 => {
                h1.style.color = (color === darkColor) ? 'black' : 'white';
            });
        });
        b3Elements.forEach(function(element) {
            element.style.backgroundColor = (color === darkColor) ? lighterB2Color : originalB2Color;
            element.style.color = (color === darkColor) ? 'black' : 'white';

            const h1Elements = element.querySelectorAll('h1');
            h1Elements.forEach(h1 => {
                h1.style.color = (color === darkColor) ? 'black' : 'white';
            });
        });
        b2CenterElements.forEach(function(element) {
            element.style.color = (color === darkColor) ? 'black' : 'white';
        });
        
        linkButtons.forEach(function(button) {
            if (color === darkColor) {
                button.style.color = 'black';
                button.style.borderColor = 'black';
                
                button.onmouseover = function() {
                    button.style.backgroundColor = 'black';
                    button.style.color = 'white';
                };
                button.onmouseout = function() {
                    button.style.backgroundColor = 'transparent';
                    button.style.color = 'black';
                };
            } else {
                button.style.color = 'white';
                button.style.borderColor = 'white';
                
                button.onmouseover = function() {
                    button.style.backgroundColor = 'white';
                    button.style.color = 'black';
                };
                button.onmouseout = function() {
                    button.style.backgroundColor = 'transparent';
                    button.style.color = 'white';
                };
            }
        });
    }

    const savedColor = localStorage.getItem('bgColor');
    if (savedColor) {
        applyBackgroundColor(savedColor);
    } else {
        applyBackgroundColor(originalColor);
    }

    darkButton.addEventListener('click', function() {
        if (body.style.backgroundColor === darkColor) {
            applyBackgroundColor(originalColor);
            localStorage.setItem('bgColor', originalColor);
        } else {
            applyBackgroundColor(darkColor);
            localStorage.setItem('bgColor', darkColor);
        }
    });

});

// Menu for mobile devices

document.addEventListener("DOMContentLoaded", function() {

    const toggleButton = document.getElementById("toggleMenu");
    const navMenu = document.querySelector(".nav-menu");
    const navContent = document.querySelector(".nav-content");

    navMenu.style.transform = "translateX(-100%)";
    navMenu.style.opacity = "0";
    navMenu.style.transition = "transform 0.5s ease, opacity 0.5s ease";
    navContent.style.opacity = "0";
    navContent.style.transition = "opacity 0.5s ease";

    let menuVisible = false;
    toggleButton.addEventListener("click", function() {
        if (!menuVisible) {
            navMenu.style.transform = "translateX(0)";
            navMenu.style.opacity = "1";
            navContent.style.opacity = "1";
        } else {
            navMenu.style.transform = "translateX(-100%)";
            navMenu.style.opacity = "0";
            navContent.style.opacity = "0";
        }
        menuVisible = !menuVisible;
    });
});

