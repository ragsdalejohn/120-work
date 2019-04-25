//name objects
//let img; ++ image of GRID ++
let img1 = "Grid 2.jpg"
let img2 = "CURSOR.jpg"
// ++ define r for the class/constructor ++
// ++ x and y starting positions? ++
var x = position.x
var y = position.y

////////////////////////////////
//setup canvas
////////////////////////////////

fuction setup(){

// below is from Prof Musick to set image as background
// I built on it by adding an additional loadImage and
// setting background as img1

function preload() {
      img1 = loadImage('Grid 2.jpg');
      img2 = loadImage('CURSOR.jpg')
  }

  function setup() {
      createCanvas( 600, 400 );
  }

  function draw() {
      background( img1 );
// +++ draw image here for cursor to use later? +++

  }


///////////////////////////
//draw Mr. T
///////////////////////////

// define class "r"
class r {
  constructor() {
//define starting position of image
ellipse( 200, 0, 10, 10)
//+++ import image of MR. T Cursor to tie to ellipse??? +++

//starting position
// x=1, y=200

///////////////////////////////////
//movement function
///////////////////////////////////

//moves at constant rate x+1, y=0 from starting position
//if up "I" pushed direction x=0, y+1
//if down "K" pushed direction x=0, y-1
//if right "J" pushed direction x+1, y=0
//if left "L" pushed direction x-1, y=0

// +++ below is code I found from p5.js +++
function keyPressed() {
  switch (keyCode) {
    case 74:
      if (direction !== 'right') {
        direction = 'left';
      }
      break;
    case 76:
      if (direction !== 'left') {
        direction = 'right';
      }
      break;
    case 73:
      if (direction !== 'down') {
        direction = 'up';
      }
      break;
    case 75:
      if (direction !== 'up') {
        direction = 'down';
      }
      break;
  }


//////////////////////////////////
//Bounce function
//////////////////////////////////

// if position.x < 0 then y=0, x+1
// if position.y < 0 then x=0, y+1
// if position.x > width then x-1, y=0
// if position.y > height then x=0, y-1
  }
}
