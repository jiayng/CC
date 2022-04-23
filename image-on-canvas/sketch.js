let heartImage;

let numHearts = 1;
let hearts = [];

function preload(){
  heartImage = loadImage("assets/heart.png")
}

function setup(){
  let cnv = createCanvas(400, 400):
  cnv.parent("canvasContainer");

}

function draw(){
  background(220);

  //image(heart, 0, 0)
  for(let i = 0, i < hearts.length; i++){
    hearts[i].update();
    hearts[i]display();

  }
}

class Heart{
  constructor(startX, startY, srcImg){
    this.x = startX;
    this.y = startY;
    this.yOffset = 0;
    this.img = srcImg;
  }
update(){
  this.y = sin(frameCount*0.6)*10
}
display(){
  push();
  translate(this.x, this.y);
  image(this.img, 0, 0);

  fill("red");
  circle(0, 0, 5);

  pop();
}
}
