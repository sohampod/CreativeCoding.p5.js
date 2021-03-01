var numCircles = 10;


function setup(){
  createCanvas(400,400);
  frameRate(2);
  noStroke();
}

function draw(){
  background(255);
  var circleWidth = 400.0;

  for(var i = 1; i <= numCircles; i++){
    fill(random(255), random(255), random(255));
    ellipse(width/2, height/2, circleWidth, circleWidth);
    circleWidth-=40.0;
  }
}