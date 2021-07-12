
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,20);

	binPartLeft = new Dustbin(550,620,20,100);
	binPartBottom = new Dustbin(610,660,100,20);
	binPartRight = new Dustbin(670,620,20,100);

	trashPaper = new Trash(100,600,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 Engine.update(engine); 

  ground.display();

  binPartBottom.display();
  binPartLeft.display();
  binPartRight.display();

  trashPaper.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(trashPaper.body, trashPaper.body.position, {x:15, y:-15});
	}
}



