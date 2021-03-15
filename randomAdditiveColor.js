function setup() {
    createCanvas(400,400);
      frameRate(1);
  }
  
  function draw() {
    background(255);
    noStroke();
    //Our first color group
    //additive color
    var col1 = color(random(255), random(255), random(255));
    var col2 = color(random(255), random(255), random(255));
      
    fill(col1);
    rect(0,0,width/2, height/2);
    
    fill(col2);
    rect(width/2,0,width/2, height/2);
    
      //combine the rgb components of colors 1 and 2
    fill(
      red(col1) + red(col2),
      green(col1) + green(col2),
      blue(col1) + blue(col2));
    rect(0, width/2, width,height/2);
  }