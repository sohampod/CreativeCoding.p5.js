var theta = 0.0;
var ewMultiply= 10;
var ehMultiply= 20;
var rotationSpeed = 0.001;



function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(255);
  noFill();
  translate(width/2,height/2);
  
  for(var i=0;i<25;i++)
    {
      rect(0,0,i*ewMultiply,i*ehMultiply);    
    }
  //rotate(theta);
  
  for(var i=0;i<25;i++)
    {
        rotate(theta);
      rect(0,0,i*ewMultiply,i*ehMultiply);    
      theta+=rotationSpeed;
    }
  //theta+=rotationSpeed;
  
}