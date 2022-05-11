var apples = [];

function preload(){
  orchard = loadImage('assets/orchard.jpeg');
  apple = loadImage('assets/apple.png');
}

function setup() {
  createCanvas(900, 600);
 
}


function draw() {
  background(255);
  for (var i = 0; i < apples.length; i++) {
    apples[i].display();
  
}
  image(orchard, 546, 412);
  imageMode(CENTER);
  orchard.resize(792, 524);
  
class Apple {
  constructor(startX, startY){
this.x = startX;
this.y = startY;
  }
  display(){
  
  circle(mouseX, mouseY, 100);
//image(apple, mouseX, mouseY);
  }
}
  function mousePressed() {
    var a = new Apple(mouseX, mouseY);
    apples.push(a);
  }

}