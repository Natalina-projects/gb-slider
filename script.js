document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const images = document.querySelectorAll('#images img');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const navDotsContainer = document.getElementById('nav-dots');

    function updateImage() {
        images.forEach((img, index) => {
            if (index === currentIndex) {
                img.style.display = '';
            }  else {
                img.style.display = 'none';
            }
        });
        updateDots();
    }

    function updateDots() {
        navDotsContainer.innerHTML = '';
        images.forEach((img, index) => {
            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateImage();
            });
            if (index === currentIndex) {
                dot.style.backgroundColor = 'black';
            }
            navDotsContainer.appendChild(dot);
        });
    }
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });
  updateImage();
})