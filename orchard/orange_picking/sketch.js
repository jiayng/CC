var oranges = [];

function preload(){
  orangepicking = loadImage('assets/orangepicking.JPEG');
  orange = loadImage('assets/orange.png');
}

function setup() {
  createCanvas(1400, 700);
 
}


function draw() {
  background(255);
  for (var i = 0; i < oranges.length; i++) {
    oranges[i].display();
  
}
  image(orangepicking, 700, 352);
  imageMode(CENTER);
  orangepicking.resize(792, 524);
  
class Orange {
  constructor(startX, startY){
this.x = startX;
this.y = startY;
  }
  display(){
  
  circle(mouseX, mouseY, 100);
//image(orange, mouseX, mouseY);
  }
}
  function mousePressed() {
    var o = new Orange(mouseX, mouseY);
    oranges.push(o);
  }

}