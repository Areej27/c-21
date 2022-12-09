const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground1, leftside, rightside;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	var balloptions={
		isStatic: false,
		restitution: 0.3,
		friction:0,
		density: 1.2

	}

	//Create the Bodies Here.
	
	ball= Bodies.circle(200, 100, 50, balloptions);
  	World.add(world, ball);

	  ground1= new Ground (800, 690, 1600, 20);
	  leftside= new Ground (1100, 650, 20, 150);
	  rightside= new Ground (1350, 650, 20, 150);

	  Engine.run(engine);

}

function draw() {
	background(0);
	
	Engine.update(engine);
  
	ellipse(ball.position.x, ball.position.y, 50);

	ground1.display();
	leftside.display();
	rightside.display();

	drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball, ball.position, {x:85, y:-385} )

	}

}

