document.addEventListener("DOMContentLoaded", function () {
    const darkBox = document.getElementById("darkBox");
    const body = document.body;

    // Check if the user has a preference stored
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    // Toggle dark mode on dark-box click
    darkBox.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        // Save user preference to localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            console.log('Enabled dark-mode')
        } else {
            localStorage.setItem("dark-mode", "disabled");
            console.log('Disabled dark-mode')
        }
    });
});
