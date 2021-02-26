function setup() {
    createCanvas(400, 400);
    background(220,0,0);
    
    
  }
  
  function draw() {
    
    
    if(mouseX >= 200  || mouseY  >= 200)
       {
         fill(0,200,0);
         rect(mouseX,mouseY,100,100);
       }
  }