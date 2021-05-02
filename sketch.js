var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxL,boxR,boxB;
var boxLB,boxRB,boxBB;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() 
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	boxL=createSprite(width/2-45, 615, 10,75);
    boxL.shapeColor="red";

	boxR=createSprite(width/2+45, 615, 10,75);
    boxR.shapeColor="red";
	
	boxB=createSprite(width/2, 650, 95,10);
    boxB.shapeColor="red";
	
 
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	
	
	
    
	//rectangle1=createSprite( 450,642,100,30)
	//rectangle2=createSprite(415,590,30,100);
   //rectangle3=createSprite( 350,600,100,30)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	boxLB = Bodies.rectangle(width/2-45 , 610 , 10 ,75, { isStatic:true});
    World.add(world, boxLB);
 
    boxRB = Bodies.rectangle(width/2+45 , 610 , 10 ,75, { isStatic:true});
    World.add(world, boxRB);

    boxBB = Bodies.rectangle(width/2 , 650 ,95 ,10, {isStatic:true});
    World.add(world, boxBB);

	
	


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  //packageBody.display(package.png);
  drawSprites();
  //ractangle1.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   Matter.Body.setStatic(packageBody,false)
    
  }
}



