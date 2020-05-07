const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var object;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var ball_options ={
        restitution: 1.0
    }

    ground = Bodies.rectangle(200,380,400,20,ground_options);
    World.add(world,ground);

    object = Bodies.circle(200,100,10,ball_options);
    World.add(world,object);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    ellipseMode(RADIUS);
    rect(ground.position.x,ground.position.y,400,20);
    ellipse(object.position.x, object.position.y, 10, 10);
}