
// The original author: Michael Musick <michaelmusick>
// I have modified this code from its original
// I will try to explain the syntax of the code and
// what is happening.


// set up the canvas area to the width of the window
// height of 300

function setup() {
    createCanvas(windowWidth, 300);
}


// using 'let' instead of 'var'
// using let allows variable to be "locked"
let pos_x = 0;
// popsition of X starts where x=0
let pos_y = 0;
// position of Y starts where y=0
let d = 30;
// diameter is = to 30 pixels
let r = d / 2;
// radius is = to diameter / 2


function draw() {
    background('rgb(3, 78, 115)');

    // define drawing parameters
    fill(255);
    noStroke();

    // circle 0
    pos_x = width * 0 / 10 + r;
    ellipse(pos_x, pos_y, d);

    pos_y++;
    if (pos_y > height) {
        pos_y = 0;
    }
}
