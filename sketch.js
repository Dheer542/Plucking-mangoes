
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone1, tree1, platform1;

function preload()
{
	 	stone1=loadImage("Plucking mangoes/stone.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone1 = new stone(400,350,30,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  stone1.display();
  drawSprites();
 
}



