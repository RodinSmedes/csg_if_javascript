var R = 255;
var G = 127;
var B = 127;

function setup() {
  canvas = createCanvas(451,451);
  canvas.parent('processing');
  frameRate(5);
}

function draw() {
  for (var rij = 0;rij < 450;rij += 50) {
     G = random(0,255);
     B = random(0,255);
     R = random(0,255);
    for (var kolom = 0;kolom < 450;kolom += 50) {
      fill(R,R,R);
      rect(kolom,rij,50,50);
    }
  }
}