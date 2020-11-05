function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(300, 200, 40, 80);

  sprite1 = createSprite(100,50,70,70);
  sprite1.velocityX = 6;
  sprite2 = createSprite(700,50,70,70);
  sprite2.velocityX = -5;
}

function draw() {
  background("lightblue");

  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if(isTouching(fixedrect,movingrect)){
    movingrect.shapeColor = "pink";
    fixedrect.shapeColor = "pink";
  } else {
    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";
  }

  if(isTouching(sprite1,sprite2)){
    sprite1.visible = false;
    sprite2.visible = false;
  } else {
    sprite1.visible = true;
    sprite2.visible = true;
  }

  drawSprites();
}

