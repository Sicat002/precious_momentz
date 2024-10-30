// List of image URLs
const images = [
    "https://i.ibb.co/HhMwxRQ/Designer-3.png",
    "https://i.ibb.co/s2HdQc5/Designer-1.png",
    "https://i.ibb.co/PzQzWqC/Designer.png",
    "https://i.ibb.co/nL98CDj/Designer-2.png",
    "https://i.ibb.co/kck2Wjp/dee.png"
];

// Set initial index
let currentImageIndex = 0;

// Get the ad image element by its id
const adImage = document.getElementById("adImage");

// Function to switch images
function switchImage() {
    // Increment the index and loop back if we reach the end of the array
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Update the image source
    adImage.src = images[currentImageIndex];
}

// Change the image every 5 seconds (5000 milliseconds)
setInterval(switchImage, 5000);
