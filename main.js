const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.color = "#7b3fe4"; // Purple color on hover
    });

    link.addEventListener("mouseleave", () => {
        link.style.color = ""; // reset to default on mouse leave
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.querySelector(".themeToggle");
    const root = document.documentElement;
    const body = document.body;

    toggleSwitch.addEventListener("change", () => {
        if (toggleSwitch.checked) {
            // Light mode selected
            root.setAttribute("data-theme", "light");

            // Change body background
            body.style.background = "linear-gradient(to bottom, #ffffff, #e6ddff)";
            body.classList.remove("text-white");
            body.classList.add("text-dark");

            // Example: Change navbar bg color
            const navbar = document.querySelector("nav.navbar");
            navbar.style.backgroundColor = "#e0d7ff"; // light purple bg

            // Change nav links color
            const navLinks = document.querySelectorAll("nav a.nav-link");
            navLinks.forEach(link => link.style.color = "#4b0082"); // purple text

            // Change card background color
            const cards = document.querySelectorAll(".card");
            cards.forEach(card => {
                card.style.backgroundColor = "#f0e6ff"; // light purple card bg
                card.style.color = "#3a007d"; // darker purple text
            });

            // Update toggle switch label text color
            const toggleLabel = document.querySelector("label[for='.themeToggle']");
            toggleLabel.style.color = "#6f10d3";

        } else {
            // Dark mode selected
            root.setAttribute("data-theme", "dark");

            // Body background dark purple gradient
            body.style.background = "linear-gradient(to bottom, #1f1f3a, #0b0b0f)";
            body.classList.remove("text-dark");
            body.classList.add("text-white");

            // Navbar bg dark
            const navbar = document.querySelector("nav.navbar");
            navbar.style.backgroundColor = "#1a1a2e"; // dark navy

            // Nav links color
            const navLinks = document.querySelectorAll("nav a.nav-link");
            navLinks.forEach(link => link.style.color = "#ccc"); // light gray text

            // Cards dark bg
            const cards = document.querySelectorAll(".card");
            cards.forEach(card => {
                card.style.backgroundColor = "#6f10d3";
                card.style.color = "#eee";
            });

            // Toggle label color
            const toggleLabel = document.querySelector("label[for='.themeToggle']");
            toggleLabel.style.color = "#eee";
        }
    });
});


// Gladde scrollfunctie voor navigatielinks
// const scrollLinks = document.querySelectorAll('.scroll-link');

// scrollLinks.forEach(link => {
//     link.addEventListener('click', e => {
//         e.preventDefault();
//         const targetId = link.getAttribute('href').slice(1); // Verwijder "#" van href
//         const targetSection = document.getElementById(targetId);
//
//         if (targetSection) {
//             targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         } else {
//             console.error(`Geen sectie gevonden met ID: ${targetId}`);
//         }
//     });
// });
//
// Explore knop om naar de projecten sectie te scrollen
const exploreButton = document.querySelector('.btn');

if (exploreButton) {
    exploreButton.addEventListener('click', () => {
        const projectsSection = document.querySelector('.projects-section');

        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.error('Projecten sectie niet gevonden.');
        }
    });
}

document.querySelector('#contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Bedankt voor je bericht! Ik neem binnenkort contact met je op.');
                this.reset();
            } else {
                alert('Er is iets misgegaan. Probeer het later opnieuw.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Er is iets misgegaan. Probeer het later opnieuw.');
        });
});