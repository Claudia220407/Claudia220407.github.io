const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);
document.body.style.background = savedTheme === "light"
    ? "linear-gradient(to bottom, #ffffff, #bc54f0)"
    : "linear-gradient(to bottom, #1f1f3a, #0b0b0f)";
document.body.classList.toggle("text-light", savedTheme === "dark");
document.body.classList.toggle("text-dark", savedTheme === "light");

document.addEventListener("DOMContentLoaded",
    function () {
        const toggleBtn = document.querySelector("#themeToggle");
        const root = document.documentElement;
        const homeSection = document.querySelector("#home");

        // Start hidden
        homeSection.style.opacity = 0;
        let opacity = 0;
        const fadeInSpeed = 0.02; // adjust speed here
        function fadeIn() {
            opacity += fadeInSpeed;
            if (opacity >= 1) {
                opacity = 1;
                homeSection.style.opacity = opacity;
                return; // stop animation
            }
            homeSection.style.opacity = opacity;
            requestAnimationFrame(fadeIn);
        }

        fadeIn();
        // Set checkbox to saved theme on load
        toggleBtn.checked = savedTheme === "light";

        toggleBtn.addEventListener("change", () => {
            const newTheme = toggleBtn.checked ? "light" : "dark";
            root.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);

            if (newTheme === "light") {
                document.body.style.background = "linear-gradient(to bottom, #e4bef7, #af25f5)";
                document.body.classList.remove("text-light");
                document.body.classList.add("text-dark");
            } else {
                document.body.style.background = "linear-gradient(to bottom, #000000, #7e1fad)";
                document.body.classList.remove("text-dark");
                document.body.classList.add("text-light");
            }
        });
    });
