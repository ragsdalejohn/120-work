function setup(){
    createCanvas( windowWidth, 400 );
    // refreshing at a certain framerate
    frameRate(1);
}

function draw() {
    background( 'rgb(91, 255, 147)' );

    // create random numbers for the values
    let value1 = floor(random(0, 50));
    let value2 = floor(random(0, 50));
//tried var and let to get result
    let result = value1 + value2;
    // call our newly defined function
    addThings( value1, value2 );

}

//new defined function
function addThings( value1, value2 ) {
    // Add the values together and store as result
    // let result = value1 + value2;

    // Display values and result
    // result = text("The result of adding '" + value1 + "' and '" + value2 + "' is '" + result + "'.");

    text("The result of adding '" + value1 + "' and '" + value2 + "' is '" + result + "'.", 40, 40);
    textSize(18);
    textAlign( CENTER );
    text( result, width/2, height/2 );


// Emily modified this function
// this function is for if the result is greater than 50
function whatInTheAss( result ) {
    if (result > 50) {
      text("What in the ass?", 50,50);
    } else if (result < 50) {
      text(result, 50,50);
    }

// tried this - didnt work
    //if (result > 50){ == "What in the ass???"
    textSize(36);
    textAlign( BOTTOM );


}
}
