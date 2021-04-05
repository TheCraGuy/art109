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
  console.log("");
  splat1(color(34,139,34,75), mouseX, mouseY);
  break;
case 'p':
  console.log("P");
  ktPetals(color(255,10,25,75),mouseX, mouseY);
  break;
case 'l':
  console.log("L");
  ktWater(color(10,75,75+(mouseY/4),(mouseY/4))-50,mouseX,mouseY);
  break;
case 'a':
 console.log("A");
  ktWood(color(101,67,33,75), mouseX, mouseY);
  break;
case 't':
  console.log("T");
  ktEmbers(mouseX, mouseY);
  break;
case 'r':
  console.log("drip");
  ktDrip(mouseX, mouseY);
  break;
  case 'e':
  console.log("eraser");
  eraser(mouseX, mouseY,30);
  break;
default:             // Default executes if the case labels
  console.log("not a good key");   // don't match the switch parameter
  break;
}
}
// function kt
function ktDrip( lx,  ly) {
  noStroke();
  var  r = random(2,5);

  for (var i = 0; i <5 ; i++) {
    fill(0,100-4*i);
    ellipse(lx,ly+i,r,r);
  }
}
function ktWater( k,  lx,  ly){
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
  rect(lx+xr,ly+yr,r/2,2*r);
}
function ktPetals( k,  lx, ly) {
  stroke(255,10,25,90);
  var r = random(10,25);
  var xr = random(-15,15);
  var yr = random(-15,15);
  fill(k);
  ellipse(lx + xr, ly + yr, r+5,r-5);
}
function splat1( k, lx, ly) {
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
  fill(255,50);
  ellipse(lx, ly, sz,sz);
}
1
function clear_print() {

1
  if (key == 'x' || key == 'X') {
     background(255);
  }


}
