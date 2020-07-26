var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionsHeight=300;
var score =0;
var count =0;
var particle ;
var turn = 0;
var gameState;
function setup() {
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  ground = new Grounds(width/2,height,width,20);


  for(var l = 0;l <=innerWidth;l = l + 80){
    divisions.push(new Divisions(l,height-divisionsHeight/2,10,divisionsHeight));
      }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

  
}
 


function draw() {
  background("black");
  textSize(20)
  fill(0,255,0);
 text("Score : "+score,20,30);
 text("1000",100,600);
 text("100",175,600);
 text("100",250,600);
 text("500",325,600);
 text("500",415,600);
 text("1000",25,600);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var l = 0; l < divisions.length; l++) {
     
     divisions[l].display();
   }
   if(particle!=null) {
      particle.display(); 
      if (particle.body.position.y>600) {
        console.log("100") 
        if (particle.body.position.x < 100) { 
          score=score+1000; 
          console.log("123")
          particle=null; 
    if ( count>= 5) gameState ="end"; 
  } 
  else if (particle.body.position.x > 173 &&  particle.body.position.x < 321){
    console.log("1234")
    score=score+100
    particle=null; 
    if ( count>= 5) gameState ="end"; 
    
  }
  else if (particle.body.position.x > 333){
    console.log("12345")
    score=score+500
    particle=null; 
    if ( count>= 5) gameState ="end"; 
    
  }
  } 
  }
  text(mouseX+"subs me "+mouseY,100,100)
  }
function mousePressed(){
if(gameState!=="end"){
count++;
particle=new Particle(mouseX,10,10,10);
}
}
