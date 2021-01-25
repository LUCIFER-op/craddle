
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var ballObject1,ballObject2,ballObject3, ballObject4,ballObject5, ballObject
var string1, string2,string3, string4, string5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

       barObject=new bar(width/2,height/4,width/7,20);

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	ballObject1=new bob(startballPositionX-Diameter*2,startballPositionY,ballDiameter);
	ballObject2=new bob(startballPositionX-ballDiameter,startballPositionY,ballDiameter);
	ballObject3=new bob(startballPositionX,startBobPositionY,bobDiameter);
	ballObject4=new bob(startballPositionX+ballDiameter,startballPositionY,ballDiameter);
	ballObject5=new bob(startballPositionX+ballDiameter*2,startballPositionY,ballDiameter);
	
	
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});


	string1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)

	string2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	string3=new rope(bobObject3.body,roofObject.body,0, 0)
	string4=new rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	string5=new rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)

	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  barObject.display();

  string1.display()
  string2.display()
  string3.display()
  string4.display()
  string5.display()	
  ballbject1.display();
  ballObject2.display();
  ballObject3.display();
  ballObject4.display();
  ballObject5.display();
 
  
  
	
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(ballObject1.body,ballObject1.body.position,{x:-50,y:-45});

  	}
}


function drawLine(constraint)
{
	ballBodyPosition=constraint.bodyA.position
	barBodyPosition=constraint.bodyB.position

	barBodyOffset=constraint.pointB;
	
	barBodyX=barBodyPosition.x+barBodyOffset.x
	barBodyY=barBodyPosition.y+barBodyOffset.y
	line(ballBodyPosition.x, balBodyPosition.y, barBodyX,barBodyY);
}






