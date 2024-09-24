// JavaScript to handle gallery interactions
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    const caption = document.getElementById('caption');
    const close = document.querySelector('.close');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            modal.style.display = "block";
            modalImg.src = img.src;
            caption.textContent = item.querySelector('p').textContent;
        });
    });

    close.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
// JavaScript to handle gallery interactions
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    const caption = document.getElementById('caption');
    const close = document.querySelector('.close');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            modal.style.display = "block";
            modalImg.src = img.src;
            caption.textContent = item.querySelector('p').textContent;
        });
    });

    close.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

