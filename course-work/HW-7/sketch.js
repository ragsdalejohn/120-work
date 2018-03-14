
// setting the variables for the ball so the size and shape are consistent.
let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

// setup the code, background and area

function setup() {
    createCanvas(windowWidth, 400);
    background(201);
}


function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    fill(255);
    ellipse(ball.x, ball.y, ball.width, ball.width);
}

// I altered the dimensions to change the speed. Hope this works.

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 20);
    ball.scale_y = map(mouseY, 0, height, 0.5, 20);
}
