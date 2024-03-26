import { images } from './dataFetching.js';

const carousel = document.getElementById('carousel');
const pagination = document.getElementById('pagination');

let currentIndex = 0;

// Display images in the carousel
function displayImages() {
  carousel.innerHTML = '';
  pagination.innerHTML = '';

  images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image.download_url;
    img.alt = `Image ${index + 1}`;
    carousel.appendChild(img);

    const dot = document.createElement('span');
    dot.classList.add('pagination-dot');
    dot.addEventListener('click', () => goToImage(index));
    pagination.appendChild(dot);
  });

  showImage(currentIndex);
}

// Show image at the specified index
function showImage(index) {
  const carouselImages = carousel.querySelectorAll('img');
  carouselImages.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });

  const dots = pagination.querySelectorAll('.pagination-dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

// Navigate to the previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Navigate to the next image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Go to a specific image by index
function goToImage(index) {
  currentIndex = index;
  showImage(currentIndex);
}

export { displayImages, prevImage, nextImage, goToImage };
