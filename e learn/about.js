document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.classList.add("visible");
    });
});
