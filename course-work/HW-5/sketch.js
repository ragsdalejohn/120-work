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
    text("'mouseX' : " + floor(mouseX), 1110, 540 );
    text("'mouseY' : " + floor(mouseY), 1110, 580 );

    // elipse to follow the mouse
    fill(0, 200, 200);
    ellipse(mouseX, mouseY, 100, 100);

    // ok, so I have a blue ball that moves with the mouse and an indicattor
    // in the lower right that tells the x and y position.
    // I am not good at this. 
}
