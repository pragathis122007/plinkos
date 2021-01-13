const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1; 


function setup() {
  createCanvas(480,800);
 
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(10,790,1600,20);

  Engine.run(engine);
}

function draw() {
  background("black");  

  ground.display();

 
 

  objects();
  drawSprites();

  Engine.update(engine);

}

function objects(){

 
  var plinkos = [];

for (var j = 40; j <= width; j=j+50){
  plinkos.push(new Plinko(j,75));
}

for (var j = 15; j <= width-10; j=j+50){
  plinkos.push(new Plinko(j,175))
}

for (var j = 40; j <= width-20; j=j+50){
  plinkos.push(new Plinko(j,275))
}

for (var j = 15; j <= width-10; j=j+50){
  plinkos.push(new Plinko(j,375))
}

for (var j = 0; j < plinkos.length; j++) {
  plinkos[j].display();
}

var particles = [];

if(frameCount%40===0){
  particles.push(new Particle(random(width/2-30, width/2+30),100,100));
}

for (var p = 0; p < particles.length; p++){
 particles[p].display();
 }

var divisions = [];

var divisionHeight = 300;
for (var k = 0; k <= width; k = k + 80){
  divisions.push(new Divisions(k,height-divisionHeight/2, 10, divisionHeight));
}

for (var k = 0; k < divisions.length; k++){
  divisions[k].display();
}
 


}


