
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball;
var ground1;
var wall1,wall2,wall3;
var bin,binimg;

function preload()
{
	binimg=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;
	paperball=new Paper(100,200,30)
	ground1=new Ground(400,700,1200,20)
	wall1=new Box(900,680,200,20)
	wall2=new Box(800,550,20,280)
	wall3=new Box(1000,550,20,280)
	bin=createSprite(900,550)
	bin.addImage(binimg)
	bin.scale=0.9

	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  paperball.display();
  ground1.display();
  wall1.display();
  wall2.display();
  wall3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:200,y:-140})
	}
}

