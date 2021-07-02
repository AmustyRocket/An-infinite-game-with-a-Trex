var trex, trex_running, edges;
var groundImage;
var Inivis

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  ground  = createSprite(200,180,400,20);
  ground.addImage("ground1",groundImage);
  ground.velocityX = -6;
  
  Inivis  = createSprite(200,190,400,20);
  Inivis.visible = false;

  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50;
}


function draw(){
  //set background color 
  background("blue");
  
  //logging the y position of the trex
  console.log(trex.y)

  if(ground.x < 0 ) {
    ground.x = ground.width/2;
  }
  
  //jump when space key is pressed
  if(keyDown("space")&& trex.y > 9){
    trex.velocityY = -9.5;
  }
  if (keyDown('LEFT_ARROW'))
  {
    trex.velocityX += -12;
  }
  if (keyDown('RIGHT_ARROW'))
  {
    trex.velocityX += 12;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide( Inivis)
  drawSprites();
}