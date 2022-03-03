const count = 3,
  size = 110;
const colors = ["grey", "grey", "grey"];
const speeds = [40, 30, 35];
const radius = [
  { x: 50, y: 15 },
  { x: 40, y: 11 },
  { x: 45, y: 12 },
];
const rotates = [0, Math.PI * 0.33, Math.PI * 0.33];
const centerX = size / 2,
  centerY = size / 2;
const atomRad = 5;

function init() {
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  ctx.globalCompositeOperation = "destination-over";
  ctx.clearRect(0, 0, size, size); // clear canvas

  ctx.save();
  ctx.translate(centerX, centerY);

  const time = new Date();
  const rotate = ((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds();

  for (let i = 0; i < count; i++) {
    const x = radius[i].x * Math.cos(speeds[i] * (rotate + rotates[i]));
    const y = radius[i].y * Math.sin(speeds[i] * (rotate + rotates[i]));
    ctx.fillStyle = colors[i];
    ctx.strokeStyle = colors[i];
    ctx.rotate(rotates[i]);
    ctx.beginPath();
    ctx.arc(x, y, atomRad, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(0, 0, radius[i].x, radius[i].y, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.restore();

  ctx.fillStyle = "grey";
  ctx.beginPath();
  ctx.arc(centerX, centerY, atomRad * 1.5, 0, Math.PI * 2, false);
  ctx.fill();

  window.requestAnimationFrame(draw);
}

init();
