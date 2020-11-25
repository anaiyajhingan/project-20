var car,car1,car2,wall,wall1,wall2;
var speed,weight;
var l1,l2


function setup() {
 
  createCanvas(800,600);
  l1=createSprite(400,200,800,10)
  l2=createSprite(400,400,800,10)


  speed=random(55,90)
weight=random(400,1500)


car=createSprite(100,100,20,20)
car.velocityX=speed;
car.shapeColor="white";

car1=createSprite(100,300,20,20)
car1.velocityX=speed;
car1.shapeColor="white";

car2=createSprite(100,500,20,20)
car2.velocityX=speed;
car2.shapeColor="white";

wall=createSprite(700,100,20,40)
wall.shapeColor="white";


wall1=createSprite(700,300,20,40)
wall1.shapeColor="white";

wall2=createSprite(700,500,20,40)
wall2.shapeColor="white";



}

function draw() {
  background(0);  
  if(wall.x-car.x<(car.width+wall.width)/2){
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22000
if(deformation>180){
  car.shapeColor="red";
}}
if(wall1.x-car1.x<(car1.width+wall1.width)/2){
if(deformation<180&& deformation>100){
  car1.shapeColor="yellow";
  car1.velocityX=0;
var deformation=0.5*weight*speed*speed/22000

}}
if(wall2.x-car2.x<(car2.width+wall2.width)/2){
if (deformation<100){
  car2.shapeColor="green";
  car2.velocityX=0;
var deformation=0.5*weight*speed*speed/22000
}}

    drawSprites();
}
