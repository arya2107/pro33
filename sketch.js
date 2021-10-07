
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var plinkos=[]
var divisions=[]
var particles=[]
var score=0
var turn=0
var particle
var gameState="start"
var dh=300
function setup() {
  createCanvas(800,800);
  engine=Engine.create()
  world=engine.world
  ground=new Ground(width/2,height,width,20)
  for(var i=75;i<width;i+=80){
    divisions.push(new Division(i,height-dh/2,10,dh))
  }
  for(var i=50;i<width-50;i+=50){
    plinkos.push(new Plinko(i,175))
  }
  for(var i=75;i<width-50;i+=50){
    plinkos.push(new Plinko(i,275))
  }
  for(var i=50;i<width-50;i+=50){
    plinkos.push(new Plinko(i,375))
  }
  for(var i=75;i<width-50;i+=50){
    plinkos.push(new Plinko(i,75))
  }
}

function draw() {
  background(0);  
  Engine.update(engine)
  ground.display()
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  if(particle!==undefined){
    particle.display()
    if(particle.body.position.y>750){
      if(particle.body.position.x<300){
        score=score+500
        particle=null
if(turn>=5){
  gameState="end"
}
      }
    else  if(particle.body.position.x>300 && particle.body.position.x<600){
        score=score+100
        particle=null
if(turn>=5){
  gameState="end"
}
      }
      else  if(particle.body.position.x>600 && particle.body.position.x<900){
        score=score+200
        particle=null
if(turn>=5){
  gameState="end"
}
      }
    }
  }
  if(gameState==="end"){
  text("Game Over",200,200)
  }
for(var i=0;i<divisions.length;i++){
divisions[i].display()
}
for(var i=0;i<plinkos.length;i++){
  plinkos[i].display()
}
//if(frameCount%60===0){
//particles.push(new Particle(random(width/2-200,width/2+200),10,10))
//}
//for(var i=0;i<particles.length;i++){
//  particles[i].display()
//}
}
function mousePressed(){
  console.log("event")
  if(gameState!=="end"){
    turn++
    particle=new Particle(mouseX,10)
console.log(particle)
  }
}