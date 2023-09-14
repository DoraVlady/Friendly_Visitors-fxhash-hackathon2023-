import { drawLines } from "./shared";
// rendering logic;
export default function final() {
  const cvs = document.getElementById("canvas");
  const ctx = cvs.getContext("2d");
  cvs.width = cvs.height = 900;
  ctx.scale(900, 900);

  const X = $fx.getParam("x");
  const Y = $fx.getParam("y");
  const size = $fx.getParam("size");
  const particles = $fx.getParam("particles");
  
  ctx.clearRect(0, 0, 1, 1);
  drawLines(ctx, X, 1 - Y, size, particles);
} 

