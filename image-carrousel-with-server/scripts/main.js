import { fetchData } from './dataFetching.js';
import { displayImages, prevImage, nextImage, goToImage } from './carousel.js';

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Fetch data and then display images
fetchData()
  .then(displayImages)
  .catch(error => console.error('Error:', error));

// Event listeners for buttons
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

