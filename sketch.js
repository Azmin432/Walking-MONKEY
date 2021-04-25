
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite (80,315,20,20);
  monkey.addAnimation ("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,315,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)

  var survivalTime = 0;
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20);
  fill ("black");
  survivalTime = math.ceil( frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50);
}


function draw() {
  background(255);
  if (ground.x<0) {
    ground.x = ground.width/2;
  }
  if (keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  
  drawSprites();
}






