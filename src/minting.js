import { drawLines } from "./shared";
// rendering logic; 
export default function minting() {
  const cvs = document.getElementById("canvas");
  const ctx = cvs.getContext("2d");
  cvs.width = cvs.height = 900;
  ctx.scale(900, 900);
  const details = document.getElementById("details");
  
  const divisionOptions = [2, 2.7, 2.6, 3.2, 1.5]; // Different division options
  let divisions = divisionOptions[Math.floor(Math.random() * divisionOptions.length)]; // Assign a random value from the array

  // Calculate the size of each grid square
  const gridSize = 0.8 / divisions;
  function drawSquare(x, y, size, particles) {
  // Calculate the position and size for the square
  const squareX = x * gridSize + (1.42 - divisions * gridSize)/4;
  const squareY = y * gridSize + (1.45 - divisions * gridSize)/4; 
  const squareSize = size * gridSize;
    // Draw the square and lines
    drawPointer(squareX + squareSize / 2, squareY + squareSize / 2, squareSize);
    drawLines(ctx, squareX + squareSize / 3, 1 - (squareY + squareSize / 2), squareSize, particles);
  }
  let mouseActive = false;
  // draw the coordinates indicator, ie "pointer"
  function drawPointer(x, y, size) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(x, 1.0 - y, size, 0, 2 * Math.PI);
    ctx.fill();
  }
  // Add event listener for key press
  document.addEventListener("keydown", handleKeyDown);
  // re-draws everything
  function draw() {
    // ! important !!!!!
    $fx.rand.reset();
    // [X, Y, size] will have the up-to-date param values
    const X = $fx.getParam("x");
    const Y = $fx.getParam("y");
    const size = $fx.getParam("size");
    const particles = $fx.getParam("particles");
    const shadow_Color = $fx.getParam("select");
    ctx.clearRect(0, 0, 1, 1);

    // Assign a random value from the array to "divisions"
    divisions = divisionOptions[Math.floor(Math.random() * divisionOptions.length)];

    // Draw in each of the four grid squares
    for (let i = 0; i < divisions; i++) {
      for (let j = 0; j < divisions; j++) {
        drawSquare(i, j, size, particles);
       // drawPointer(X, Y, size);
        drawLines(ctx, X, 1 - Y, size, particles );
      }
    }
    // ui feedback
    details.innerHTML = `
      <strong>coordinates:</strong> <span>[${X.toFixed(3)}; ${Y.toFixed(
      3)}]</span>
      <strong>size:</strong> <span>${size.toFixed(3)}</span>`;
  }
  draw();
  // this function takes mouse position as an input, and pushes normalized
  // coordinates in the canvas space as parameters
  function refreshPosition(mouseX, mouseY) {
    const bounds = cvs.getBoundingClientRect();
    const x = clamp01((mouseX - bounds.x) / bounds.width);
    const y = 1.0 - clamp01((mouseY - bounds.y) / bounds.height);

    $fx.emit("params:update", {
      x: x,
      y: y,

    });
  }
  // handle coordinates moudulation with mouse drag
  cvs.addEventListener("mousedown", (evt) => {
    mouseActive = true;
    refreshPosition(evt.clientX, evt.clientY);
  });
  window.addEventListener("mouseup", () => {
    mouseActive = false;
  });
  window.addEventListener("mouseleave", () => {
    mouseActive = false;
  });
  window.addEventListener("mousemove", (evt) => {
    if (mouseActive) {
      refreshPosition(evt.clientX, evt.clientY);
    }
  });
  $fx.on(
    "params:update",
    // we do nothing when the event is received
    () => {},
    // once the params are updated and available, we trigger a draw
    () => {
      draw();
    }
  );
  function handleKeyDown(event) {
    if (event.key === "F" || event.key === "f") {
      exportCanvasAsImage();
    }
  }
  // Export canvas as PNG image
  function exportCanvasAsImage() {
    const canvas = document.getElementById("canvas");
    const dataURL = canvas.toDataURL("image/png");
    const anchor = document.createElement("a");
    anchor.href = dataURL;
    anchor.download = "canvas_image.png";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}
}
// utilities
function clamp(x, min, max) {
  return Math.max(min, Math.min(max, x));
}
function clamp01(x) {
  return clamp(x, 0, 1);
}
