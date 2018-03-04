function setup() {
// setup up this assignment

// create canvas
createCanvas( 500, 500 );

}

function draw() {
  // background color
  background( "blue" );

  // ********
  // Create sandbox
  push();

  // move to center of canvas
  translate( 250, 250 );

  // HEAD
  push();
  translate( 0, -175 );

  fill( "orange" );
  ellipse( 0, 0, 330, 200 );

  // Nose
  
  pop();

  pop();
}
