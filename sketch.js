
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	
	block1=new Block(1000,520,20,100);

	block2 =new Block(1100,560,200,20);

	block3=new Block(1200,520,20,100);

	block4 = new Block(750,590,1500,20);

	ball= new Ball(20,20,25); 

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  block2.display();
  block1.display();
  block3.display();
  block4.display();
  ball.display();

  drawSprites();
  
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:120,y:-200});
	}
	if(keyCode===DOWN_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-120,y:-200});
	}
}



