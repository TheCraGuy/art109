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
  splat4(color(101,67,33), mouseX, mouseY);
  break;
case 't':
  console.log("T");
  splat4(mouseX, mouseY);
  break;
case 'e':
  console.log("E");
  splat5(mouseX, mouseY);
  break;
  case 'r':
  console.log("R");
  splat6(mouseX, mouseY,30);
  break;
default:             // Default executes if the case labels
  console.log("not a good key");   // don't match the switch parameter
  break;
}
}
// function kt
function splat1(k, lx,  ly) {
  noStroke();
  var r = random(25,50);
  var xr = random(-15,15);
  var yr = random(-15,15);
  fill(k);
  ellipse(lx + xr, ly + yr, r+xr-yr,r+yr-xr);
  }

function splat2( k,  lx,  ly){
  noStroke();
  var  r = 0;
  var  xr = 0;
  var  yr = 0;
  if( mouseY<= 400){
   r = random(25,50);
   xr = random(-15,15);
   yr = random(-15,15);
  }else{
    r = random(50,75);
   xr = random(-25,25);
   yr = random(-25,25);
  }
  fill(k);
  rect(lx+xr,ly+yr,1.5*(rs+xr-yr),1.5*(r+xr-yr));
}
function splat3( k,  lx, ly) {
  stroke(255,10,25,90);
  var r = random(10,25);
  var xr = random(-15,15);
  var yr = random(-15,15);
  fill(k);
  ellipse(lx + xr, ly + yr, r+5,r-5);
}
function splat4( k, lx, ly) {
  stroke(0,100,0);
  var r = random(25,50);
  var xr = random(-15,15);
  var yr = random(-15,15);
  fill(k);
  rect(lx + xr, ly + yr, r-5,r+5);
}
function ktWood( k, lx, ly) {
  stroke(101,67,33);
  var r = random(10,25);
  var xr = random(-10,10);
  var yr = random(-10,10);
  fill(k);
  rect(lx + xr, ly + yr, r-5,r+5);
}
function ktEmbers(  lx, ly) {
  noStroke();
  var r = random(10,25);
  var xr = random(-15,15);
  var yr = random(-15,15);
  fill(253,random(94,201),83,90);
  ellipse(lx + xr, ly + yr, r,r);
}
function eraser( lx, ly, sz) {
  noStroke();
  fill(255);
  ellipse(lx, ly, sz,sz);
}
1
function clear_print() {

1
  if (key == 'x' || key == 'X') {
     background(255);
  }


}
