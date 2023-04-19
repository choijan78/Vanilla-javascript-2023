const images = [
    "cabin.jpg",
    "japan.jpg",
    "swiss.jpg",
    "usa.jpg",
    "world.jpg",
    "window.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

console.log(bgImage);