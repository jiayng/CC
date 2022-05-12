let cats = [];
let curImage = 0;
let meow;

function preload(){
  for (let i =1; i <17; i ++) {
 let filename = 'assets/cat' + i + '.jpg'
 let cat = loadImage(filename);
  cats.push(cat);
meow = loadSound('meow.mp3');
}
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

 imageMode(CENTER);
  image(cats[curImage], 700, 390);
  
  if (frameCount % 10 == 0) {
    curImage= (curImage +1) % cats.length;
  }
  
}
function mousePressed() {
  meow.play();
}
