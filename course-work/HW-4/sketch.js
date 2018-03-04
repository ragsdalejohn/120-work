function setup() {
// setup up this assignment

// create canvas
createCanvas( 500, 500 );

}

function draw() {
  // background color
  background( 255 );

  // move to center of canvas
  translate( 250, 250 );

  // HEAD
  stroke( 0 );
  fill( "orange" );
  ellipse( 0, 0, 330, 200 );


  // Nose
  nostroke();
  triangle( 0, 0, 20); 

}
