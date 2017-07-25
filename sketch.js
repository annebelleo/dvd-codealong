// variable defined with var, always define variable first
// as opposed to ruby - you can skip this step in ruby
var dvdImage
var dvdX = 50
var dvdY = 100
var velocityX=5
var velocityY=5
var dvdWidth = 350
var dvdHeight = 250

// compared to ruby, you do not need to call in a variable in js
function preload() {
  // where you want to put stuff that automatically loads
  dvdImage = loadImage("dvdlogo.jpg");
}

function setup() {
  // size of screen
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  // 60fps
  clear();
  image(dvdImage, dvdX, dvdY, dvdWidth, dvdHeight);
  dvdX = dvdX + velocityX
  dvdY = dvdY + velocityY
  if (dvdX > windowWidth - dvdWidth || dvdX == 0) {
    velocityX = velocityX * -1
  }
  
  if (dvdY > windowHeight - dvdHeight || dvdY==0) {
    velocityY = velocityY * -1
  }
}
