// Javascript demo on capturing mouse coordinates
//

function mouseMove(event) {
  let x = event.clientX;
  let y = event.clientY;
  let text = "X Coordinates: " + x + ", Y Coordinates: " + y;
  displayCoordinates.innerHTML = text;
}

var displayCoordinates = document.querySelector("#coordinates");
document.addEventListener("mousemove", mouseMove);
