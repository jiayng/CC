var apples = [];

function preload(){
  orchard = loadImage('assets/orchard.jpeg');
  apple = loadImage('assets/apple.png');
}

function setup() {
  createCanvas(1400, 700);
 
}


function draw() {
  background(255);
  
  image(orchard, 700, 350);
  imageMode(CENTER);
  orchard.resize(792, 524);
  for (var i = 0; i < apples.length; i++) {
    apples[i].display();
  
}
  

}
class Apple {
  constructor(startX, startY){
this.x = startX;
this.y = startY;
  }
  display(){
  image(apple, this.x, this.y, 100, 100);
    
  }
}
function mousePressed() {
    var a = new Apple(mouseX, mouseY);
    apples.push(a);
    console.log(apples);
  }