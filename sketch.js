
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper=new Paperball();
	d1=new Dustbin(500,570,10,60);
	d2=new Dustbin(540,590,80,10);
	d3=new Dustbin(580,570,10,60);
    ground=new Ground();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  fill("red")
  d1.display();
  d2.display();
  d3.display();
  
  drawSprites();
 
}



