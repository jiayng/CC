let home;
let birdsounds;

function preload(){
  home = loadImage('home.jpg');
  birdsounds = loadSound('birdsounds.mp3');
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("canvasContainer")
}

function draw() {
  background(255);

  image(home, 700, 400);
  imageMode(CENTER);

function mousePressed() {
    birdsounds.play();
  }
}
