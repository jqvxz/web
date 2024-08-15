// Mobile NAV
document.addEventListener('DOMContentLoaded', function () {
    const mobileButton = document.getElementById('mobileButton');
    const mobileNav = document.getElementById('mobileNav');

    mobileButton.addEventListener('click', function () {
        if (mobileNav.style.display === 'none' || mobileNav.style.display === '') {
            mobileNav.style.display = 'flex';
            console.log("mobile-nav displayed");
        } else {
            mobileNav.style.display = 'none';
            console.log("mobile-nav removed");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const darkBox = document.getElementById("darkBox");
    const html = document.documentElement; // Target the entire document

    // Check if the user has a preference stored
    const isDarkModeEnabled = localStorage.getItem("darkMode") === "true";
    if (isDarkModeEnabled) {
        html.classList.add("dark-mode");
    }

    // Toggle dark mode on dark-box click
    darkBox.addEventListener("click", function () {
        html.classList.toggle("dark-mode");

        // Save user preference to localStorage
        const isDarkModeEnabled = html.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkModeEnabled ? "true" : "false");
    });
});