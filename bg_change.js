const head = document.getElementById('head');
const images = [
  '/images/head_1.jpg',
  '/images/head_2.jpg',
  '/images/head_3.jpg',
  '/images/head_4.jpg',
  '/images/head_5.jpg',
  '/images/head_6.jpg',

];

let currentIndex = 0;

function changeBackgroundImage() {
  head.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

// Calling the function initially
changeBackgroundImage();

// Seting an interval to change the background image every 5 seconds (3000 milliseconds)
setInterval(changeBackgroundImage, 3000);
