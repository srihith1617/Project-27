
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ball2,ball3,ball4,ball5,roof1,rope1,rope2,rope3,rope4,rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof1= new roof(400,200, 500,50);
	ball1= new bob(200,400);
	ball2= new bob(300,400);
	ball3= new bob(400,400);
	ball4= new bob(500,400);
	ball5= new bob(600,400);
	rope1= new rope(ball1.body,roof1.body, -200,0);
	rope2= new rope(ball2.body,roof1.body, -100,0);
	rope3= new rope(ball3.body,roof1.body, 0,0);
	rope4= new rope(ball4.body,roof1.body, 100,0);
	rope5= new rope(ball5.body,roof1.body, 200,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
  if (keyDown("UP_ARROW")) {
	  Matter.Body.applyForce(ball1.body,ball1.body.position, {x:-400,y:0})
  }
}



