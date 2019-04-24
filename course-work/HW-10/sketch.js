function setup(){
    createCanvas( windowWidth, 400 );
    frameRate(1);
}

function draw() {
    background( 'rgb(91, 255, 147)' );

    // create numbers to pass our function
    let value1 = floor(random(0, 50));
    let value2 = floor(random(0, 50));
    var result = value1 + value2;
    // call our newly defined function
    addThings( value1, value2 );

}

// Our newly defined function
function addThings( value1, value2 ) {
    // 1. Add the values together. Store them into some variable.
    //let result = value1 + value2;

    // 2. Print the results as a string to the canvas.
    //result = "The result of adding '" + value1 + "' and '" + value2 + "' is '" + result + "'.";

    text("The result of adding '" + value1 + "' and '" + value2 + "' is '" + result + "'.", 40, 40);
    textSize(18);
    textAlign( CENTER );
    text( result, width/2, height/2 );

function whatInTheAss( result ) {
    if (result > 50) {
      text("What in the ass?", 50,50);
    } else if (result < 50) {
      text(result, 50,50);
    }

    //if (result > 50){ == "What in the ass???"
    textSize(36);
    textAlign( BOTTOM );


}
}
