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
    text("'mouseX' : " + floor(mouseX), 1200, 440 );
    text("'mouseY' : " + floor(mouseY), 1200, 480 );

    // elipse to follow the mouse
    fill(0, 200, 200);
    ellipse(mouseX, mouseY, 100, 100);
}
