
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world , engine;
var roof;
var bob1 , bob2 , bob3 , bob4 , bob5;
var MRope , MR1Rope , MR2Rope , ML1Rope , ML2Rope ; 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200,400);
	bob2 = new Bob(270,400);
	bob3 = new Bob(340,400);
	bob4 = new Bob(410,400);
	bob5 = new Bob(480,400);

	roof = new Roof();

	MRope = new Rope(bob1.body , roof.body , -140 , 0);
	MR1Rope = new Rope(bob2.body , roof.body , -70 , 0);
	MR2Rope = new Rope(bob3.body , roof.body , 0 , 0);
	ML1Rope = new Rope(bob4.body , roof.body , 70 , 0);
	ML2Rope = new Rope(bob5.body , roof.body , 140 , 0);

	Engine.run(engine);
  
}

console.log(Rope)
function draw() {
	Engine.update(engine);
  background("white");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
  MRope.display();
  MR1Rope.display();
  MR2Rope.display();
  ML1Rope.display();
  ML2Rope.display();

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-67,y: -64});
	}
	
}


