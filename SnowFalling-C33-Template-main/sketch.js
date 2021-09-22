const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snowman;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  snow1 = new Snow(100,350,50,50);
  snow2 = new Snow(200,350,50,50);
  snow3 = new Snow(300,350,50,50);
  snow4 = new Snow(400,350,50,50);
  snow5 = new Snow(500,350,50,50);
  snow6 = new Snow(600,350,50,50);
  snow7 = new Snow(700,350,50,50);

}

function preload(){
  backgroundImg = loadImage("snow2.jpg");
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(keyDown(UP_ARROW)){
    snowman.velocityY = 3;
    snowman.velocityY = snowman.velocityY - 0.8;
  }
  if(keyDown(DOWN_ARROW)){
    snowman.velocityX = 3;
  }

  Engine.update(engine);
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
}