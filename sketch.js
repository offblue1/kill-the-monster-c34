const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(2000, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,790,width+300,10);
  g2 = new Ground(800,700,500,10);
  hero = new Hero(250,400,45);
  rope = new Rope(hero.body,{x:300,y:150});
  monster = new Monster(1300,200,45);

  b1 = new Box(900,100,70,70);
    b2 = new Box(900,100,70,70);
    b3 = new Box(900,100,70,70);
    b4 = new Box(900,100,70,70);
    b5 = new Box(900,100,70,70);
    b6 = new Box(900,100,70,70); 
    b7 = new Box(800,100,70,70); 
    b8 = new Box(800,100,70,70); 
    b9 = new Box(800,100,70,70); 
    b10 = new Box(800,100,70,70); 
    b11 = new Box(800,100,70,70); 
    b12 = new Box(800,100,70,70);
    b13 = new Box(700,100,70,70);
    b14 = new Box(700,100,70,70);
    b15 = new Box(700,100,70,70);
    b16 = new Box(700,100,70,70);
    b17 = new Box(700,100,70,70);
    b18 = new Box(700,100,70,70);
    b19 = new Box(700,100,70,70);
    b20 = new Box(900,100,70,70);  

}

function draw() {
  background(bg);
  Engine.update(engine);

  detectollision(hero,monster);

  ground.display();
  g2.display();
  hero.display();
  rope.display();
  monster.display();

  fill(33,242,61);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX , y:mouseY});
}

function detectollision(hero,monster){
  body1Position = hero.body.position;
  body2Position = monster.body.position;

  var distance = dist(body1Position.x,body1Position.y,body2Position.x,body2Position.y)
  if(distance<= hero.r+monster.r){
    Matter.Body.setStatic(monster.body,false);
  }
}
