var fixedrect,movingrect;
function setup(){
  createCanvas(600,600)
fixedrect=createSprite(400,200,50,80);
fixedrect.shapeColor="green"
movingrect=createSprite(200,200,80,50);
movingrect.shapeColor="green"
movingrect.debug=true;
fixedrect.debug=true;
}
function draw(){
  background(0,0,0)
  movingrect.x=mouseX;
  movingrect.y=mouseY;

drawSprites()
}