
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin, ground;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new Dustbin(800,300,80,80);
	paper = new Paper(300,10,30,30);
	ground = new Ground(10,390,2400,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");

  keyPressed();

  dustbin.display();
  paper.display();
  ground.display();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body.position,{x:85,y:85});
	}
}

