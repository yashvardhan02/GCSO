var car,wall

var speed,weight





function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 20, 20);
  wall = createSprite(1500,200,30,height/2);

  speed  = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
}

function draw() {
  background("black"); 
  
  car.velocityX = speed;
   
  if(wall.x - car.x <(car.width + wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500

   if(deformation < 180){
     
    car.shapeColor = "red";
   }


   if(deformation > 100){

   car . shapeColor = "green";

   }

  if(deformation >100 && deformation < 180 ){

    car.shapeColor = "yellow";

  }



  }

  drawSprites();
}