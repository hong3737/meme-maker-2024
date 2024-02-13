const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
    "#18dcff",
    "#7d5fff",
];

let offsetX = 0;
let offsetY = 0;

function onClick(event) {
    offsetX = event.offsetX;
    offsetY = event.offsetY;
}

function onMove(event) {
    ctx.beginPath();
    if (offsetX !== 0 || offsetY !== 0) {
        ctx.moveTo(offsetX, offsetY);
    } else {
        ctx.moveTo(0, 0);
    }
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("click", onClick);
