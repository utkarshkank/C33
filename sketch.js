var snow1,snow2,snow3,snow4,snow5;
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const constraint = Matter.Constraint
function preload(){
snow1 = snow1.loadImage("snow1.jpg");
snow2 = snow2.loadImage("snow2.jpg");
snow3 = snow3.loadImage("snow3.jpg");
snow4 = snow4.loadImage("snow4.webp");
snow5 = snow5.loadImage("snow5.webp");

   
}









function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}