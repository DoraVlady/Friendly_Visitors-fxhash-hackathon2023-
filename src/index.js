import final from "./final"
import minting from "./minting"
$fx.params([
  {
    id: "x",
    name: "X pos",
    type: "number",
    update: "code-driven",
    default: 0.5,
    options: {
      min: 0,
      max: 1,
      step: 0.000001,
    },
  },
  {
    id: "y",
    name: "Y pos",
    type: "number",
    update: "code-driven", 
    default: 0.5,
    options: {
      min: 0,
      max: 1,
      step: 0.000001,
    },
  },
  {
    id: "size",
    name: "Size",
    type: "number",
    options: {
      min: 0.12,
      max: 1.12,
      step: 0.02,
    },
  },
  {
    id: "particles",
    name: "Num_of_Particles",
    type: "number",
    options: {
      min: 0,
      max: 100,
      step: 1,
    },
  },
])
document.body.classList.add($fx.context)
if ($fx.context === "minting") {
  minting() 
}
else {
  final() 
}
$fx.features({
X_Position:$fx.getParam("x"),
Y_Position:$fx.getParam("y"),
Size:$fx.getParam("size"),
Num_of_Particles:$fx.getParam("particles"),
})
