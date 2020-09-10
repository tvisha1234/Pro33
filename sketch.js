const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var divisionHeight = 300;
var plinko;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,795,480,20);

  //divisions
  for(var i = 0; i <= width; i = i + 80) {
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  //plinkos
  for(var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75, 10));
  }

  for(var j = 15; j <= width-10; j = j + 50) {
    plinkos.push(new Plinko(j, 175, 10));
  }

  for(var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275, 10));
  }

  for(var j = 15; j <= width-10; j = j + 50) {
    plinkos.push(new Plinko(j, 375, 10));
  }

  //particles
  if(frameCount % 60 === 0) {
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }
  //plinko = new Plinko(70,500,40);

  Engine.run(engine);
}

function draw() {
  background("black");  

  Engine.update(engine);

  ground.display();

   //particles
   if(frameCount % 60 === 0) {
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }

  //divisions
  for(var i = 0; i < divisions.length; i++) {
    divisions[i].display();
  }

  //plinkos
  for(var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  //particles
  for(var k = 0; k < particles.length; k++) {
    particles[k].display();
  }

  //plinko.display();
  
}