const images = ["0.jpg", "1.jpg", "2.jpeg", "3.jpg", "4.JPG", "5.jpeg", "6.png"];
const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.prepend(bgImage);