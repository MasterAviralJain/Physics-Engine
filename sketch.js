const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ball,ground;


function setup() {
  createCanvas(800,1000);
  engine=Engine.create();
  world=engine.world;

  var ground_option={
    isStatic:true
  }

  ground=Bodies.rectangle(400,850,1500,100,ground_option);
  World.add(world,ground);
  
  var ball_option={
    restitution:1.1;
  }
  ball=Bodies.circle(100,500,20,ball_option);
  World.add(world,ball);

}

function draw() {
  background(255,255,255);  
 Engine.update(engine);
  fill("yellow")
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,100);
  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}