function setup() {
    createCanvas(500,500);
  }
  
  function draw() {
    background(255);
    
    beginShape(TRIANGLES);
    for(var x=0;x<width; x+=10)
      {
        for(var y=0; y<width; y+=10)
          {
            vertex(x,y);
          }
      }
    endShape();
  }