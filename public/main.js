// darkmode
document.addEventListener("DOMContentLoaded", function () {
    // Get the dark mode toggle button
    const darkModeToggle = document.getElementById('toggle-btn');
    const body = document.body;

    // Add event listener to dark mode toggle button
    darkModeToggle.addEventListener('click', () => {
        // Toggle between light and dark themes
        if (body.classList.contains('theme-dark')) {
            body.classList.remove('theme-dark');
            body.classList.add('theme-light');
            body.style.backgroundColor = '';
            body.style.color = '';
        } else {
            body.classList.remove('theme-light');
            body.classList.add('theme-dark');
            body.style.backgroundColor = '#191970';
            body.style.color = 'blue';
        }

        // Toggle the icon between moon and sun
        const icon = darkModeToggle.querySelector('i');
        if (icon.classList.contains('fa-moon')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
 
    });
