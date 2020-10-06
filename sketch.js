
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper_object, ground;
var bin1, bin2, bin3;
var dust;


function preload(){

	dust = loadImage("bin.png");

}


function setup() {
	createCanvas(2250, 1000);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper_object = new Paper();
	ground = new Ground(width/2, 900, width, 30);
	bin1 = new Bin(1740, 620, 40, 350);
	bin3 = new Bin(2060, 620, 40, 350);
	bin2 = new Bin(1900, 790, 400, 40);

	


	Engine.run(engine);


  
}
function draw(){
	background(255);

	
	
	paper_object.display();
	ground.display();
	bin1.display();
	bin2.display();
	bin3.display();
	imageMode(CENTER);
	image(dust, 1900, 670, 440, 440);
	
	

}
function keyPressed() {

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper_object.body, paper_object.body.position, {x:500, y:-500});

	}

}


