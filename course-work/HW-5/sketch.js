function setup() {
  // create the canvas - try this animation thing
  // createCanvas( windowWidth, windowHeight );
  createCanvas( windowWidth, 600 );
}

function draw() {
    background( "Orange" )
    textSize(36);
    noStroke();
    fill('white');
    text("'mouseX' : " + floor(mouseX), 10, 40 );
    text("'mouseY' : " + floor(mouseY), 10, 80 );
}
