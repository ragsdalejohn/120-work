function setup() {
  // create the canvas - try this animation thing
  // createCanvas( windowWidth, windowHeight );
  createCanvas( windowWidth, 600 );
}

// per the example in the lecture, this is giving me the exact pointer position
function draw() {
    background( "Orange" )
    textSize(36);
    noStroke();
    fill('green');
    text("'mouseX' : " + floor(mouseX), 1100, 540 );
    text("'mouseY' : " + floor(mouseY), 1100, 580 );

    // elipse to follow the mouse
    fill(0, 200, 200);
    ellipse(mouseX, mouseY, 100, 100);
}
