function scrollToSection(sectionId, event) {
    if (event) event.preventDefault(); // Cegah default behavior
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Optional: Add active state to navbar
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});
