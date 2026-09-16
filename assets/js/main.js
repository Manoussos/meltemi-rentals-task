const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        mobileNav.classList.toggle("is-open", !isOpen);
        document.body.classList.toggle("menu-open", !isOpen);
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menuToggle.setAttribute("aria-expanded", "false");
            mobileNav.classList.remove("is-open");
            document.body.classList.remove("menu-open");
        });
    });
}
