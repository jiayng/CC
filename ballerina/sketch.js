let dancer;

function setup() {
  let cnv = createCanvas(500, 500);
  cnv.parent("canvasContainer")
  dancer = new joyDancer(width/2, height/2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  dancer.update();
  dancer.display(); 
}


// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class joyDancer{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    
    
  }  
  update(){
  this.x+= random(-0.1, 0.1);
  this.y+= random(-5, 5);
    
  }
  display(){
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);
    
    
    // ******** //
    // ⬇️ draw your dancer here ⬇️
    
    noStroke();
    scale(0.7);
    
    //legs
    fill(250, 220, 203);
    triangle(-40, 30, 0, 0, 0, 150);
    triangle(50, 30, 10, 0, 0, 150);
    fill(240, 140, 190);
    triangle(0, 140, -10, 150, 0, 150);
    triangle(2, 140, 10, 150, 2, 150);
    
     //arms
    push();
    scale(0.9);
    fill(250, 220, 203)
    triangle(0, 0, -55, -80, -40, -80);
    triangle(-40, -80, 0, -150, -50, -80);
    triangle(0, 0, 55, -80, 40, -80);
    triangle(40, -80, 0, -150, 50, -80);
    ellipse(0, -150, 10, 30);
    pop();
    
    //dress
    fill(243, 141, 188);
    push();
    translate(0, -20)
    beginShape();
    vertex(0, 0);
    vertex(-80, 80);
    vertex(80, 80);
    endShape();
    pop();
    rect(-10, -40, 20, 30)
    
    push();
    translate(180, 30);
    rotate(QUARTER_PI);
    ellipse(-100, 100, 80, 30);
    pop();
    
    push();
    translate(-38, -115);
    rotate(-QUARTER_PI);
    ellipse(-100, 100, 80, 30);
    pop();
    
    ellipse(-60, 60, 35, 20);
    ellipse(60, 60, 35, 20);
    ellipse(0, 60, 35, 20);
    ellipse(30, 60, 35, 20);
    ellipse(-30, 60, 35, 20);
    
   
    //hair
    fill(155, 85, 80);
    ellipse(0, -60, 50, 55);
    circle(-13, -30, 20);
    
    //face
    fill(250, 220, 203)
    circle(0, -50, 40);
    circle(-20, -50, 15);
    circle(20, -50, 15);
    fill(255, 0, 0, 100);
    circle(-15, -42, 15);
    circle(15, -42, 15);
    
    // ⬆️ draw your dancer here ⬆️
    
    
    pop();
  } 
  }
  

/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmomize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 

*/