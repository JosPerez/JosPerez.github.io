function main() {
const carousel = document.querySelector('.carousel');
const carouselContainer = carousel.querySelector('.carousel-container');
const prevButton = carousel.querySelector('.carousel-prev');
const nextButton = carousel.querySelector('.carousel-next');
const carouselItems = carousel.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
let currentIndex = 0;
let slideWidth = 0;

// Set slideWidth to the width of one slide
function setSlideWidth() {
  slideWidth = carouselItems[0].clientWidth;
}
setSlideWidth();
window.addEventListener('resize', setSlideWidth);

// Move to the previous slide
function prevImage() {
  if (currentIndex === 0) {
    currentIndex = totalItems - 1;
  } else {
    currentIndex--;
  }
  moveCarousel();
}

// Move to the next slide
function nextImage() {
  if (currentIndex === totalItems - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  moveCarousel();
}

// Move the carousel container to show the current slide
function moveCarousel() {
  carouselContainer.style.transform = `translateX(-${ currentIndex * slideWidth}px)`;
}

// Add click event listeners to the previous and next buttons
prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);
} 
main();