function setup() {
// setup up this assignment

// create canvas
createCanvas( 600, 900 );

}

function draw() {
  // background color
  background( "black" )

  // ********
  // Create sandbox
  push();

  // move to center of canvas
  translate( 300,450 );

  // HEAD
  push();
  translate( 0,-175 );

  fill( "orange" );
  ellipse( 0, 0, 330, 200 );

  // Nose
  push();
  fill( "black" );
  Triangle ( 0, -20, 30, 20, -30, 20 );
  pop(); 

  pop();

  pop();
}
