//declare an empty array variable
var myCollection = [];

function setup(){
  createCanvas(400,400);
  // you can fill the array by referencing the array's
  // indices
  for(var i =0; i < 5; i++){
    myCollection[i] = random(1,5);
  }
  
  //or you can push items onto the array
  myCollection.push("hello");
  myCollection.push("world");
  myCollection.push(3);
  myCollection.push(2000.2);
  
	//how large is our array?
  text("number of items in array is... " + myCollection.length, 0,10);
	
	//fill our text blue
	fill(0,0,255);
	for(var i=0; i < myCollection.length; i++){
		text("array index " + i, 0, 40*i + 40);
		//now let's display each array item as text on our canvas
  	text(myCollection[i],80,40*i + 40);
	}
  
}