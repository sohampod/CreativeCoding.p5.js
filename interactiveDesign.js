//Create a p5 sketch that checks your mouseX and mouseY positions, 
//and if the positions are less than a number, draws a shape at that mouse position.



function setup() {
    createCanvas(500, 500)
    background(0, 0, 112);
  }
  
  function draw() {
    background(0, 0, 250);
    textSize(16);
    fill(0,0,0);
    textAlign(CENTER);
    text("(" + floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY);
  
  if (mouseY > height / 2) {
    fill(50, 205, 50);
    rect(100, 100, 200, 200);
  }
  if (mouseX > width / 2) {
    fill(0, 191, 255);
    ellipse(200, 200, 210, 210)
  
  
  }
  }