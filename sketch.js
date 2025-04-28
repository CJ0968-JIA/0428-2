let capture;
let graphics;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
  capture.hide();
  graphics = createGraphics(windowWidth * 0.8, windowHeight * 0.8);
}

function draw() {
  background('#00b4d8');
  graphics.background(0); // 黑色背景
  for (let x = 0; x < graphics.width; x += 20) {
    for (let y = 0; y < graphics.height; y += 20) {
      let col = capture.get(x, y); // 從 capture 取得對應位置的顏色
      let boxColor = color(0, col[1], 100); // 方框顏色：R=0, G=col[1], B=100
      graphics.fill(boxColor);
      graphics.noStroke();
      graphics.rect(x + 1, y + 1, 18, 18); // 方框寬高為 18
      graphics.fill(0); // 黑色圓
      graphics.ellipse(x + 10, y + 10, 5, 5); // 圓的寬高為 5
    }
  }
  graphics.fill(255);
  graphics.textSize(32);
  graphics.textAlign(CENTER, CENTER);
  graphics.text('Overlay Text', graphics.width / 2, graphics.height / 2);
  image(graphics, (windowWidth - capture.width) / 2, (windowHeight - capture.height) / 2);
  image(capture, (windowWidth - capture.width) / 2, (windowHeight - capture.height) / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
  graphics = createGraphics(windowWidth * 0.8, windowHeight * 0.8);
}
