
// The original author: Michael Musick <michaelmusick>
// I have modified this code from its original
// 


function setup() {
    createCanvas(windowWidth, 300);
}


// using 'let' instead of 'var'
let pos_x = 0;
let pos_y = 0;
let d = 30;
let r = d / 2;

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
