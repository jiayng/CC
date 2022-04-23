let kois = [];
var bubbles = [];

function setup() {
  createCanvas(800, 300);
  let numKois = 80;
  
  for (let i = 0; i < numKois; i++) {
    let k = new Koi(random(width), random(height));
    kois.push(k);
  }
  }


function draw() {
  background(177, 223, 243, 130);
  for (let i = 0; i < kois.length; i++) {
    kois[i].update();
    kois[i].display();
    kois[i].checkOutOfCanvas();
  }

  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();
  }
  
    for (let i = kois.length - 1; i >= 0; i --) {
    let k = kois[i];
    if (k.isDone == true){
      kois.splice(i, 1);
      let n = new Koi(random(width), random(height));
      kois.push(n);

    }
}
}
class Koi {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.sinAxisIncrement = random(360);
    this.xOffset = 0;
    this.yOffset = 0;
    this.speed = random(1, 5);
    this.isDone = false;

    this.bodyIndex = floor(random(5));
    this.eyeIndex = floor(random(5));
    this.tailIndex = floor(random(3));
    this.flippersIndex = floor(random(4));
    this.degree = random(radians(360));
    this.scale = random(0.5, 1);
  }
  checkOutOfCanvas(){
    if (this.x <0 || this.x > width) {
      this.isDone = true;
    }
    if (this.y < 0 || this.y > height){
      this.isDone = true;
    }
  }

  update() {
    let rad = radians(this.sinAxisIncrement);
    let sinValue = sin(rad);
    this.xOffset = map(sinValue, -1, 1, -30, 30);
    this.yOffset = map(sinValue, -1, 1, -30, 30);
    this.y = this.y -1
    this.sinAxisIncrement += this.speed;
  }
  display() {
    push();
    rotate(this.degree);
    translate(this.x + this.xOffset, this.y + this.yOffset);
    scale(this.scale);
    this.drawBody();
    this.drawEyes();
    this.drawTail();
    this.drawFlippers();

    push();
    rotate(radians(50));
    stroke(255);
    strokeWeight(1);
    noFill();
    arc(15, 10, 60, 60, HALF_PI, PI);
    rotate(radians(170));
    arc(-19, -15, 60, 50, HALF_PI, PI);
    pop();
    pop();

    //push();
    //fill("green");
    //circle(0, 0, 5);
    //text("center point", 0, 0);
    //pop();

    //pop();
  }

  drawTail() {
    if (this.tailIndex == 0) {
      push();
      translate(0, 76); // rotation point
      let radius = 5;
      for (let i = 0; i < 100; i++) {
        let length = random(40, 80);
        strokeWeight(4);
        stroke(220, 100, 55, 10);

        push();
        rotate(radians(random(120, 50)));
        line(radius, 0, length, 0);
        pop();
      }
      pop();
    } else if (this.tailIndex == 1) {
      push();
      scale(0.9);
      translate(-10, 70);
      ellipseMode(CORNER);
      rotate(random(radians(20)));
      fill(220, 100, 55, 100);
      ellipse(0, 0, 30, 100);
      ellipse(0, 0, 20, 80);
      rotate(radians(55));
      ellipse(0, 0, 30, 100);
      pop();
    } else if (this.tailIndex == 2) {
      push();
      scale(0.7);
      translate(-10, 110);
      ellipseMode(CORNER);
      rotate(random(radians(-20)));
      fill(180, 70, 60, 150);
      ellipse(0, 0, 30, 100);
      ellipse(0, 0, 20, 80);
      rotate(radians(-45));
      ellipse(0, 0, 30, 100);
      pop();
    }
  }

  drawEyes() {
    if (this.eyeIndex == 0) {
      push();
      fill(0, 0, 0, 150);
      ellipse(-23, -20, 10, 19);
      ellipse(23, -20, 10, 19);
      pop();
    } else if (this.eyeIndex == 1) {
      push();
      fill(0, 0, 0, 150);
      ellipse(-23, -20, 10, 13);
      ellipse(23, -20, 10, 13);
      pop();
    } else if (this.eyeIndex == 2) {
      push();
      fill(0, 0, 0, 150);
      ellipse(-23, -20, 16, 18);
      ellipse(23, -20, 16, 18);
      fill(255, 255, 255, 100);
      ellipse(-20, -25, 5, 7);
      ellipse(20, -25, 5, 6);
      pop();
    } else if (this.eyeIndex == 3) {
      push();
      stroke(255, 255, 255, 100);
      strokeWeight(3);
      fill(0, 0, 0, 150);
      ellipse(-23, -20, 10, 19);
      ellipse(23, -20, 10, 19);
      pop();
    } else if (this.eyeIndex == 4) {
      push();
      stroke(255, 255, 255, 100);
      strokeWeight(7);
      fill(0, 0, 0, 150);
      ellipse(-23, -20, 16, 18);
      ellipse(23, -20, 16, 18);
      pop();
    }
  }

  drawBody() {
    noStroke();
    if (this.bodyIndex == 0) {
      push();
      fill(230, 100, 55, 230);
      ellipse(0, 20, 40, 60);
      fill(222, 80, 0, 230);
      ellipse(0, 0, 45, 70);
      ellipse(0, -25, 30);
      triangle(0, 80, -7, 48, 7, 48);
      pop();
    } else if (this.bodyIndex == 1) {
      noStroke();
      push();
      fill(200, 0, 0);
      ellipse(0, 0, 50, 60);
      ellipse(0, 10, 50, 90);
      ellipse(0, 28, 45, 80);
      ellipse(0, 46, 40, 80);
      ellipse(0, 55, 30, 100);
      fill(255, 255, 255, 200);
      ellipse(-10, 30, 20);
      ellipse(15, -10, 15);
      pop();
    } else if (this.bodyIndex == 2) {
      push();
      noStroke();
      fill(255, 255, 255, 250);
      ellipse(0, 0, 50, 60);
      ellipse(0, 5, 52, 50);
      ellipse(0, 10, 50, 60);
      ellipse(0, 15, 50, 60);
      triangle(-15, 50, 15, 50, 0, 80);
      push();
      rotate(radians(-25));
      ellipse(-20, 35, 30, 40);
      pop();
      push();
      rotate(radians(25));
      ellipse(20, 35, 30, 40);
      pop();
      fill(220, 100, 50, 200);
      ellipse(-10, 2, 30, 40);
      ellipse(6, 2, 40, 40);
      ellipse(0, -15, 30);
      fill(0, 0, 0, 150);
      ellipse(4, -10, 20);
      ellipse(-10, 30, 20, 15);
      stroke(0, 0, 0, 100);
      strokeWeight(3);
      line(0, 10, 0, 50);
      pop();
    } else if (this.bodyIndex == 3) {
      push();
      noStroke();
      fill(0, 0, 0, 180);
      ellipse(0, 0, 50, 60);
      ellipse(0, 5, 52, 50);
      ellipse(0, 10, 50, 60);
      ellipse(0, 15, 50, 60);
      triangle(-15, 50, 15, 50, 0, 65);
      push();
      rotate(radians(-25));
      ellipse(-20, 35, 30, 40);
      pop();
      push();
      rotate(radians(25));
      ellipse(20, 35, 30, 40);
      pop();
      fill(220, 100, 50, 200);
      ellipse(-10, 2, 30, 40);
      ellipse(0, -15, 30);
      fill(0, 0, 0, 150);
      ellipse(4, -10, 20);
      ellipse(-10, 30, 20, 15);
      stroke(0, 0, 0, 100);
      strokeWeight(3);
      pop();
    } else if (this.bodyIndex == 4) {
      push();
      noStroke();
      fill(0, 0, 0, 250);
      ellipse(0, 0, 50, 60);
      ellipse(0, 5, 52, 50);
      ellipse(0, 10, 50, 60);
      ellipse(0, 15, 60, 60);
      push();
      rotate(radians(-25));
      ellipse(-20, 35, 30, 40);
      pop();
      push();
      rotate(radians(25));
      ellipse(20, 35, 30, 40);
      pop();
      fill(255, 0, 0, 150);
      ellipse(6, 2, 36);
      ellipse(-2, -13, 30);
      fill(0, 0, 0, 150);
      ellipse(4, -10, 20);
      ellipse(-10, 0, 30, 15);
      stroke(250, 250, 250, 100);
      strokeWeight(3);
      line(10, 20, 0, 60);
      line(0, 20, 0, 60);
      line(-10, 20, 0, 60);
      pop();
    }
  }

  drawFlippers() {
    if (this.flippersIndex == 0) {
      push();
      fill(0, 0, 0, 100);
      push();
      rotate(random(radians(15)));
      translate(-20, 10);
      rotate(radians(50));
      stroke(255);
      strokeWeight(1);
      arc(0, 0, 60, 60, HALF_PI, PI);
      pop();
      push();
      translate(20, 10);
      rotate(random(radians(15)));
      stroke(255);
      rotate(radians(220));
      arc(0, 0, 60, 50, HALF_PI, PI);
      pop();
      pop();
    } else if (this.flippersIndex == 1) {
      push();
      scale(0.8);
      rotate(random(radians(15)));
      translate(-25, 10);
      rotate(radians(50));
      stroke(255);
      strokeWeight(1);
      fill(255, 0, 0, 120);
      arc(0, 0, 60, 60, HALF_PI, PI);
      pop();
      push();
      scale(0.8);
      translate(25, 10);
      rotate(random(radians(15)));
      fill(255, 0, 0, 100);
      stroke(255);
      rotate(radians(220));
      arc(0, 0, 60, 50, HALF_PI, PI);
      pop();
    } else if (this.flippersIndex == 2) {
      push();
      scale(0.8);
      rotate(random(radians(15)));
      translate(-25, 10);
      rotate(radians(50));
      stroke(255);
      strokeWeight(1);
      fill(255, 255, 255, 100);
      arc(0, 0, 60, 60, HALF_PI, PI);
      pop();
      push();
      scale(0.8);
      translate(25, 10);
      rotate(random(radians(15)));
      fill(255, 255, 255, 100);
      stroke(255);
      rotate(radians(220));
      arc(0, 0, 60, 50, HALF_PI, PI);
      pop();
    } else if (this.flippersIndex == 3) {
    }
  }
}

class Bubble {
  constructor(startX, startY, r) {
    this.x = startX;
    this.y = startY;
    this.bubbleSize = random(0.2, 1.1);

  }
  update() {
    this.y = this.y -random(0.5, 15);
  }

  display() {

    push();
    translate(this.x, this.y);
    rotate(radians(random(150)));
    scale(this.bubbleSize);
    scale(random(0.4, 0.5));
    stroke(255, 255, 255, 100);
    fill(177, 233, 243, 150);
    ellipse(10, 0, 100, 110);
    stroke(255, 255, 255, 100);
    fill(187, 233, 243, 150);

    ellipse(0, 0, 100, 110);
    fill(255, 255, 255, 200)
    ellipse(45, -10, 20);
    ellipse(30, -20, 15);
    pop();
  }
}
function mousePressed() {
  // A new ball object
  var b = new Bubble(mouseX,mouseY);
  bubbles.push(b);
}