// I am not purgering as much as borrowing code from the
// online youtube tutorials so I can understand it.
// I did some modifications so I can turn something in.

 // setup variable first
 var Boondoggle = 0

 // Set up the program
 function setup() {
   createCanvas( 600, 500);
 }

 //time to draw
 function draw() {

   // play with the background
   // ----- Boondoggle = mouseX/2;
   // Replace old function of Boondoggle with map function
   Boondoggle = map(mouseX, 0, 600, 0, 255);
   background(Boondoggle);

   // create something for the cursor to follow
   fill(150, 118, 222);
   ellipse(mouseX, 200, 64, 64)
 }
