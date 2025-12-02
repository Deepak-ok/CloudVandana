// Array of image URLs
const images = [
  "https://i.pinimg.com/736x/b1/5f/25/b15f257289f1d06d0e4dd4fc332de429.jpg",
  "https://www.hdhotels.com/data/webp/87.galeriahdbrl966-834836c379529df19c135463e4704a00.webp",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/e2/fe/d8/hotel-valentina.jpg?w=1200&h=-1&s=1",
  "https://the-blue-ivy-and-suites.hotelsinprotarascyprus.com/data/Photos/OriginalPhoto/12801/1280115/1280115505.JPEG"
];

let currentIndex = 0;

// Get DOM elements
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Function to update image
function updateImage() {
  sliderImage.src = images[currentIndex];
}

// Event listeners
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length; // loop forward
  updateImage();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // loop backward
  updateImage();
});

// Initialize slider
updateImage();