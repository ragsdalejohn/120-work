function setup() {
// setup up this assignment

// create canvas
createCanvas( 500, 500 );
background( "brown" );

}

function draw() {

  // draw head
  fill('orange');
  ellipse( 250, 250, 300, 150); 

  // draw dots for eyes
  strokeWeight(50)
  point( 100, 50 );
  point( 400, 50 );
  point( 250, 250 );

}
