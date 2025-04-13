document.addEventListener('DOMContentLoaded', () => {
    const currentImage = document.getElementById('current-image');
    const largeImages = document.querySelectorAll('.large-image');
    const imageCaption = document.getElementById('image-caption');

    function showImage(src, caption = '') {
        currentImage.classList.add('fade-out');
        setTimeout(() => {
            currentImage.src = src;
            currentImage.classList.remove('fade-out');
            imageCaption.textContent = caption;
        }, 300);
    }

    // Set initial image and caption
    if (largeImages.length > 0) {
        const firstImage = largeImages[0];
        showImage(firstImage.src, firstImage.getAttribute('data-caption'));
    }

    largeImages.forEach(img => {
        img.addEventListener('click', () => {
            const caption = img.getAttribute('data-caption') || 'No caption available';
            showImage(img.src, caption);
        });
    });
});
