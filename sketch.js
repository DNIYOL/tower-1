const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var groundOBJ;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	
	world = engine.world;
	
  groundOBJ = Ground(width/2,650,width,20)

	
	
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
}

