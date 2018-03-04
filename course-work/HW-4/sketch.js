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
    triangle( 50, 50, 250, 50, 150, 180 );
    triangle( 350, 50, 550, 50, 450, 180 );
    triangle( 10, 225, 590, 225, 375, 375 );

}
