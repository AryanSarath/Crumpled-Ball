
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);
	paper = new Paper(50,650,40);
	//Dustbin
	bin1 = new Dustbin(600,650,100,10);
	bin2 = new Dustbin(545,625,10,60);
	bin3 = new Dustbin(645,625,10,60);

	

	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  Engine.update(engine);

  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  drawSprites();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:100,y:-125})
	}
}



