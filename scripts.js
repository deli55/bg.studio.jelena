// Smooth scroll with offset for sticky header
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // stop default instant jump

        const targetID = this.getAttribute('href').slice(1); // remove '#'
        const targetSection = document.getElementById(targetID);

        const header = document.querySelector('header');
        const headerOffset = header.offsetHeight + 10; // 10px extra padding
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});
