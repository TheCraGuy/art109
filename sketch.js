 var currentkey = '1';


function setup() {
rectMode(CENTER);
var canvas= createCanvas(600, 800);
canvas.parent('sketch-holder');
background(255);
//smooth();

}

function draw(){

  if(keyIsPressed) {
    clear_print();
}
 if(mouseIsPressed) {
   drawChoice();
}
}

function drawChoice() {
   var currentkey = key;

switch(currentkey) {

case 's':
  console.log("S");
  splat1(color(214, 24, 11), mouseX, mouseY);
  break;
case 'p':
  console.log("P");
  splat2(color(10, 24, 209),mouseX, mouseY);
  break;
case 'l':
  console.log("L");
  splat3(color(237, 230, 21),mouseX, mouseY);
  break;
case 'a':
 console.log("A");
  splat4(color(random(25,237),random(25,237),random(25,237)), mouseX, mouseY);
  break;
case 't':
  console.log("T");
  splat5(mouseX, mouseY);
  break;
case 'e':
  console.log("E");
  splat6(mouseX, mouseY);
  break;
  case 'r':
  console.log("R");
  splat7(mouseX, mouseY,30);
  break;
default:             // Default executes if the case labels
  console.log("not a good key");   // don't match the switch parameter
  break;
}
}
//S
function splat1(k, lx,  ly) {
  noStroke();
  var r = random(10,50);
  var xr = random(-20,20);
  var yr = random(-20,20);
  fill(k);
  ellipse(lx + xr, ly + yr, r+xr-yr,r+yr-xr);
  }
//P
function splat2( k,  lx,  ly){
  noStroke();
  var  r = 0;
  var  xr = 0;
  var  yr = 0;
  if( mouseY<= 400){
   r = random(10,50);
   xr = random(-15,15);
   yr = random(-15,15);
  }else{
    r = random(50,75);
   xr = random(-25,25);
   yr = random(-25,25);
  }
  fill(k);
  ellipse(lx+xr,ly+yr,r-xr+yr,r+xr-yr);
}
//L
function splat3( k,  lx, ly) {
  noStroke();
  var r = random(10,50);
  var xr = random(-15,15);
  var yr = random(-15,15);
  fill(k);
  ellipse(lx + xr, ly + yr, r+xr-yr,r+yr-xr);
}
//A
function splat4( k, lx, ly) {
  noStroke();
  var r = random(10,50);
  var xr = random(-15,15);
  var yr = random(-15,15);
  fill(k);
  rect(lx+xr,ly+yr,r-xr+yr,r+xr-yr);
  rect(lx+yr,ly+xr,r-xr+yr,r+xr-yr);
}
//T
function splat5( lx, ly) {
  noStroke();
  var r = random(10,50);
  var xr = random(-10,10);
  var yr = random(-10,10);
  ellipse(lx + xr, ly + yr, r+xr-yr,r+yr-xr);
  ellipse(ly+yr,lx+xr,r-xr+yr,r+xr-yr);
  // ellipse(ly-yr,lx-xr,r-xr+yr,r+xr-yr);
  // ellipse(lx-xr,ly-yr,r-xr+yr,r+xr-yr);
}
//E
function splat6( lx, ly, r) {
  noStroke();
  var r = random(25,50);
  var xr = random(-50,50);
  var yr = random(-50,50);
  noStroke();
  fill(255);
  ellipse(lx, ly,r-xr+yr,r+xr-yr);
}
//R
function splat7(  lx, ly) {
  noStroke();
  var r = random(10,25);
  var xr = random(-15,15);
  var yr = random(-15,15);
  fill(0);
  ellipse(lx + xr, ly + yr, r+xr-yr,r+yr-xr);
  ellipse(lx+xr,ly+yr,r-xr+yr,r+xr-yr);
}

1
function clear_print() {

1
  if (key == 'x' || key == 'X') {
     background(255);
  }


}
