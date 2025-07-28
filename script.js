let currentScene = 'default';

function setup() {
  const container = document.getElementById('canvas-container');
  const cnv = createCanvas(container.offsetWidth, container.offsetHeight);
  cnv.parent('canvas-container');
  textAlign(CENTER, CENTER);
  textSize(32);
  noLoop();
}

function draw() {
  clear();
  switch (currentScene.toLowerCase()) {
    case 'forest':
      drawForest();
      break;
    case 'ocean':
      drawOcean();
      break;
    case 'space':
      drawSpace();
      break;
    default:
      drawDefault();
  }
}

function drawDefault() {
  background(51);
  fill(255);
  text("Type 'forest', 'ocean' or 'space' and press Enter!", width / 2, height / 2);
}

function drawForest() {
  background(34, 85, 34);
  for (let i = 0; i < 100; i++) {
    fill(255, random(150, 255));
    circle(random(width), random(height), random(2, 5));
  }
  fill(200, 255, 200);
  noStroke();
  text('🌲 You are in a glowing forest...', width / 2, height / 2);
}

function drawOcean() {
  background(10, 50, 150);
  noFill();
  stroke(255, 255, 255, 150);
  strokeWeight(2);
  for (let y = height * 0.7; y < height; y += 20) {
    beginShape();
    for (let x = 0; x <= width; x += 10) {
      vertex(x, y + sin((x + frameCount * 2) / 50) * 10);
    }
    endShape();
  }
  fill(200, 200, 255);
  noStroke();
  text('🌊 You dive into the ocean...', width / 2, height / 2);
}

function drawSpace() {
  background(0);
  for (let i = 0; i < 200; i++) {
    stroke(255);
    strokeWeight(random(1, 3));
    point(random(width), random(height));
  }
  fill(255, 255, 200);
  noStroke();
  text('🚀 You fly through space...', width / 2, height / 2);
}

function windowResized() {
  const container = document.getElementById('canvas-container');
  resizeCanvas(container.offsetWidth, container.offsetHeight);
  redraw();
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('search');
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      currentScene = e.target.value.trim();
      redraw();
      e.target.value = '';
    }
  });
});