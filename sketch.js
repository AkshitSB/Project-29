const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var slingshot;


function setup(){
    createCanvas(1800, 700);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(700,600,500,15);
    block1 = new Box(250,286,40,40);
    block2 = new Box(270,286,40,40);
    block3 = new Box(290,286,40,40);
    block4 = new Box(310,286,40,40);
    block5 = new Box(330,286,40,40);
    block6 = new Box(350,286,40,40);
    block7 = new Box(370,286,40,40);
    block8 = new Box(390,286,40,40);
    block9 = new Box(410,286,40,40);
    block10 = new Box(430,286,40,40);
    block11 = new Box(450,286,40,40);
    block12 = new Box(270,266,40,40);
    block13 = new Box(430,266,40,40);
    block14 = new Box(290,266,40,40);
    block15 = new Box(310,266,40,40);
    block16 = new Box(330,266,40,40);
    block17 = new Box(350,266,40,40);
    block18 = new Box(370,266,40,40);
    block19 = new Box(390,266,40,40);
    block20 = new Box(410,266,40,40);
    block21 = new Box(410,246,40,40);
    block22 = new Box(290,246,40,40);
    block23 = new Box(390,246,40,40);
    block24 = new Box(310,246,40,40);
    block25 = new Box(350,246,40,40);
    block26 = new Box(350,226,40,40);
    block27 = new Box(350,206,40,40);
    block28 = new Box(350,186,40,40);
    block29 = new Box(350,166,40,40);
    block30 = new Box(350,146,40,40);
    block31 = new Box(410,226,40,40);
    block32 = new Box(410,206,40,40);
    block33 = new Box(290,226,40,40);
    block34 = new Box(290,206,40,40);
    block35 = new Box(390,226,40,40);
    block36 = new Box(390,206,40,40);
    block37 = new Box(310,226,40,40);
    block38 = new Box(310,206,40,40);
    block39 = new Box(310,186,40,40);
    block40 = new Box(310,166,40,40);
    block41 = new Box(390,186,40,40);
    block42 = new Box(390,166,40,40);
   
    polygon = new Polygon(50, 200, 20)
    slingshot = new Slingshot(polygon.body, {x:100, y:200})
    
}

function draw(){
    rectMode(CENTER);
    background("cyan");
    Engine.run(engine);
    ground.display();
    strokeWeight(2);
  stroke(15);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    block33.display();
    block34.display();
    block35.display();
    block36.display();
    block37.display();
    block38.display();
    block39.display();
    block40.display();
    block41.display();
    block42.display();
    
    polygon.display();
    slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body);
  }
}

/**function detectCollision(lpolygon,lblock){
  
  blockBodyPosition = lblock.body.position;
  polygonBodyPosition = lpolygon.body.position;
  var distance=dist(polygonBodyPosition.x,polygonBodyPosition.y,blockBodyPosition.x,blockBodyPosition.y)
   if (distance <= lblock.radius+lpolygon.radius ){
     Matter.Body.setStatic(lblock.body,false);
   }
}**/