function setup() {
    createCanvas(400,400);
  
    var evenNumbers = [];
      //create first 25 even numbers
    for(var i=0; i < 24; i++){
      evenNumbers[i] = i *2;
    }
    text(evenNumbers,0,40);
    
    var tenths = [];
    var floatingPointNumber = 0;
    for(var j=0; j < 10; j++){
      tenths[j] = floatingPointNumber;
          floatingPointNumber += 0.10;
          //**See note below about toFixed()**
          println(tenths[j].toFixed(1));
          text(tenths[j].toFixed(1), j*40, height/2);
      //	text(tenths[j].toFixed(1));
    }
    // text(tenths, 0,height/2);
  }
  
  /*
  ** Note about decimal places and floating point number precision in Javascript **
  Javascript handles floating point numbers differently than integer numbers. 
  If you want to display a decimal (aka floating point) number on screen or in the console, 
  just call the .toFixed() function after accessing the number. In the example above, tenths[j].toFixed(1)
  means we want to display only 1 decimal place after the number in our array.
  */