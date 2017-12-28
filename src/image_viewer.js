import "../styles/image_viewer.css";

const image = document.createElement("img");
image.src = "http://lorempixel.com/400/400";

document.body.appendChild(image);

// if there isnt any code that we can execute, then we can just import the whole file
// i.e import "./image_viewer"
