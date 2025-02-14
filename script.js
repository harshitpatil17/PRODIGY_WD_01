function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    
    if (trailer.classList.contains('active')) {
        video.pause();
    }

    trailer.classList.toggle('active');
}

let currentBg = ""; // Store the current background

function changeBg(bgImage, title, trailerSrc) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    const video = document.querySelector('.trailer video');

    // Check if background is already set to avoid unnecessary changes
    if (currentBg === bgImage) return;
    currentBg = bgImage; // Update current background

    // Smooth background transition
    banner.style.transition = "background 0.5s ease-in-out";
    banner.style.background = `url("${bgImage}") no-repeat center center/cover`;

    // Update visible content
    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });

    // Update trailer video only if it's different
    if (video.src !== trailerSrc) {
        video.src = trailerSrc;
    }
}
