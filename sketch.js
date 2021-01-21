
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,treeImg;

function preload()
{
	tree.loadImage("tree.png");
}

function setup() {
	createCanvas(1000, 500);

	tree= createSprite(200,300,50,50);
	tree.addImage("t",treeImg);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



