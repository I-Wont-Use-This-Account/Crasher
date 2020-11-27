var wall,car;
var speed,weight;
var deformation;

function setup() {
  createCanvas(800,200);

  speed = Math.round(random(60,135));
  weight = Math.round(random(750,1500));

  wall = createSprite(700,100,50,200);
  car = createSprite(100, 100, 50, 30);

  car.shapeColor = ("black");

  car.velocityX = speed - weight/50;
}

function draw() {
  background(255,255,255);

  deformation = 0.5*weight*speed*speed/22500;

  text("Car Speed = " + (speed-weight/50) + " KM per hour", 25, 25);
  text("Car Weight: " + weight, 550,25);

  if(isColliding()){

    car.velocityX = -0;

    text("Deformation Level: " + deformation, width/3, height/2);

    if(deformation < 100){
      car.shapeColor = ("green");

    }
    else if (deformation >= 100 && deformation <= 200){
      car.shapeColor = ("yellow");
    }

    else if (deformation > 200){
      car.shapeColor = ("red")
    }

  }

  drawSprites();
}

function isColliding(){
  if(wall.x - car.x < car.width/2 + wall.width/2 && wall.x - car.x < wall.width/2 + car.width/2){
    return true;
  }
  else{
    return false;
  }
}