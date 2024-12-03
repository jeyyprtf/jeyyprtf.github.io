function scrollToSection(sectionId) {
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

// JavaScript for Video Cards
document.querySelectorAll('.play-btn').forEach(button => {
    button.addEventListener('click', function () {
        const videoId = this.getAttribute('data-video-id');
        const modal = document.getElementById('videoModal');
        const iframe = document.getElementById('youtubeFrame');
        iframe.src = `https://www.youtube.com/watch?v=${videoId}`;
        modal.style.display = 'flex';
    });
});

document.querySelector('.close-modal').addEventListener('click', function () {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('youtubeFrame');
    modal.style.display = 'none';
    iframe.src = '';
});
