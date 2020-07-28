var car,wall;
var deformation;

function setup() {
  createCanvas(1000, 400);
  
  car = createSprite(100,190,50,25);
  car.shapeColor ="lightpink"
 
  wall = createSprite(900,200,20,300);
  wall.shapeColor ="lightpink";
  
  speed=random(55,90);
  weight=random(400,1500);
   car.velocityX = 10;
}

function draw() {

  background("skyblue");
  drawSprites();

  fill("black");
  textSize(25);
  text("Bullet Collision Test",250,50);
  
  //refer to function collide.
  collide(wall,car)
  
  textSize(15);
  text("Damage : > 10 ===> bullet is red ===> wall is ineffective ",30,340);
  text("Damage is : < 10 ===> bullet is Yellow ===> wall is effective",30,360);
  fill("red");
  textSize(25);
  text("DAMAGE IS : "+Math.floor(deformation),30,300);
}

function deformations(){

  deformation=(0.5 * weight * speed * speed)/225000;
  
	if(deformation>10)
	{
    car.shapeColor="red";
    wall.shapeColor="red";
	}

	if(deformation<10 )
	{
    car.shapeColor="yellow";
    wall.shapeColor="yellow";
	}

	
  
}
function collide(object1,object2){
  if(object1.x-object2.x===object1.width/2 + object1.width/2+10)
    {
      deformations();
      object1.velocityX = 0;
      object2.velocityX = 0;
     
    }
}