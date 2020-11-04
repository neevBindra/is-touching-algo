var fixedRect, movingRect;



function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(450, 200, 80, 50);
  fixedRect.shapeColour = "green";
  movingRect.shapeColour = "green";
  movingRect.debug = true;
  fixedRect.debug = true;
}

function draw() {
  background(0,0,0);  
  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){

    fixedRect.shapeColour = "red";
    movingRect.shapeColour = "red";
  }

  else{

    fixedRect.shapeColour = "green";
    movingRect.shapeColour = "green";

  }
  drawSprites();
}