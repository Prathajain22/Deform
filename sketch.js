var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321)
  weight=random(30,52)

  car =createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  car.velocityX=0;

  wall=createSprite(1500,200,60,height/2)
  
 
}

function draw() {
  background("black");  

  
  hasCollided();
  drawSprites();
}

function hasCollided(){

  if(wall.x-car.x<(car.width+wall.wiwdth)/2){

    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0)
    }

  }
  
}

 