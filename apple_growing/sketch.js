let trees = [];
let curImage = 0;

function preload(){
  for (let i =1; i <8; i ++) {
 let filename = 'assets/tree' + i + '.JPEG'
 let tree = loadImage(filename);
  trees.push(tree);
}
}

function setup() {
  let cnv = createCanvas(2366, 1600);
  cnv.parent("canvasContainer")
}


function draw() {
  background(0);

 imageMode(CENTER);
  image(trees[curImage], 1200, 800);
  
  
  if (frameCount % 10 == 0) {
    curImage= (curImage +1) % trees.length;
  }
  
}
