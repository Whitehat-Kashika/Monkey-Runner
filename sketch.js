var monkey, monkey_running;
var ground;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 400);

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  monkey.velocityY = 0;
  

  ground = createSprite(400, 380, 900, 40);
  ground.shapeColor = "green";
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  

}


function draw() {

  background("lightblue");
  createBanana();
  createObstacle();
  
  if(keyDown("space")&& monkey.y >= 100){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
 
  monkey.collide(ground);
 
  
  drawSprites();
  
  stroke(7);
  textSize(20);
  fill("black");
  score = Math.ceil(frameCount/frameRate());
  text("Survival Time =  " + score , 200, 30);
}

function createBanana() {
  if(World.frameCount % 80 === 0){
  banana = createSprite(200, 120, 20, 20);
  banana.y = Math.round(random(120,200));
  banana.addImage("food", bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -4;
  banana.lifetime = 500;
  }
}

function createObstacle(){
  if(World.frameCount % 300 === 0){
  obstacle = createSprite(200, 340, 20, 20);
  obstacle.x = Math.round(random(90, 390));
  obstacle.addImage("rock", obstaceImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -4;
  obstacle.lifetime = 200;
  } 
}