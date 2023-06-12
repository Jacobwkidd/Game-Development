const SPACE_BAR = 32;
let bird;
let numPipe = 10;
let pipe = [];


function setup(){
    createCanvas(600, 600);
    bird = new Bird()
}
function draw(){
    background(0);
    bird.draw();
    bird.update();


 
    // if (frameCount % 60 === 0) {
    //     pipe.push(new Pipepair());
    // }
}

function keyPressed() {
    if (keyCode == SPACE_BAR) {
      bird.up();
    }
  }