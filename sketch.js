var spaceimg, spacecraftimg, issimg;
var iss, spacecraft;

function preload(){
spaceimg.loadImage("spacebg.jpg");
spacecraftimg.loadImage("spacecraft1.png");
issimg.loadImage("iss.png")
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 10, 10);
  iss.addImage("issimg");
  
  spacecraft = createSprite(500, 300, 10, 10);
  spacecraft.addImage("spacecraftimg")
}

function draw() {
  background(spaceimg);  
  
  if(keyDown("LEFT_ARROW")){
  spacecraft.x = spacecraft.x-3;
}
 
  if(keyDown("RIGHT_ARROW")){
  spacecraft.x = spacecraft.x+3;
}

  if(keyDown("UP_ARROW")){
 spacecraft.y = spacecraft.y-2
}

if(spacecraft.isTouching(iss)){
text("DOCKING COMPLETE", 390, 200)
}
  drawSprites();
}