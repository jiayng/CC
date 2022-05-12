let trees = [];
let curImage = 0;

function preload(){
  for (let i =1; i <8; i ++) {
 let filename = 'assets/tree' + i + '.jpeg'
 let tree = loadImage(filename);
  trees.push(tree);
}
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

 imageMode(CENTER);
  image(trees[curImage], 700, 390);
  
  if (frameCount % 40 == 0) {
    curImage= (curImage +1) % trees.length;
  }
  
}
