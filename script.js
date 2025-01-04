const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const sliderTrack = document.querySelector('.slider-track');
const images = document.querySelectorAll('.product-image');
const modal = document.querySelector('.modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close');

let currentSlide = 0;

// Slider navigation
prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSliderPosition();
    }
});

nextButton.addEventListener('click', () => {
    if (currentSlide < sliderTrack.children.length - 4) {
        currentSlide++;
        updateSliderPosition();
    }
});

function updateSliderPosition() {
    const slideWidth = sliderTrack.children[0].offsetWidth;
    sliderTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Open modal on image click
images.forEach((image) => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = image.src;
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
