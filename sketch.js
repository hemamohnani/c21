const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground, rightwall,leftwall,topwall


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ground = new Ground(200, 380, 400, 20)
  rightwall = new Ground(390,200,20,400)
  leftwall = new Ground(10,200,20,400)
  topwall = new Ground(200,10,400,20)

  
}

function draw() 
{
  background("black");
  Engine.update(engine);

  ground.show()
  rightwall.show()
  leftwall.show()
  topwall.show()
}

