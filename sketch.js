var student
var gameState = CLASS;
var CLASS = 1;
var OFFICE = 2;
var LIBRARY = 3;
var END = 4;
function preload() {

 boyAni = loadAnimation("images/boy1.png", "images/boy2.png", "images/boy3.png", "images/boy4.png", "images/boy5.png");
keyImg = loadImage("images/key1.png")
door1 = loadImage("images/door1.png")
door2 = loadImage("images/door2.png")
}

function setup() {
  createCanvas(displayWidth-20, displayHeight-20);

  edges = createEdgeSprites();

  ground1 = createSprite(150,750,5000,20)
  ground2 = createSprite(750, 700, 500, 20)
  ground3 = createSprite(1000, 500, 700, 20)
  key = createSprite(900,600,20,20)
  key.addImage(keyImg)
  key.scale = 0.2
  student = createSprite(100,100,30,50)
  student.addAnimation("room2", boyAni);
door = createSprite(1000,400,20,20)
door.addImage(door1)
box = createSprite(900,600)
box.visible = false
}

function draw() {

 background("lightBlue")

student.collide(edges)
student.collide(ground1)
student.collide(ground2)
student.collide(ground3)
//console.log(student.y)

if(gameState === CLASS){
  if (student.isTouching(box)) {
    key.visible = false;
    //doorOpen()
  }
  if (keyDown("space") && student.y >= 100) {
    student.velocityY = -12;
  }

  student.velocityY = student.velocityY + 0.8
  if (keyDown("up")) {
    student.y = student.y - 10

  }
  if (keyDown("down")) {
    student.y = student.y + 10

  }
  if (keyDown("left")) {
    student.x = student.x - 10

  }
  if (keyDown("right")) {
    student.x = student.x + 10

  }
}




else if(gameState === OFFICE){
  if (keyDown("space") && student.y >= 100) {
    student.velocityY = -12;
  }

  student.velocityY = student.velocityY + 0.8
  if (keyDown("up")) {
    student.y = student.y - 10

  }
  if (keyDown("down")) {
    student.y = student.y + 10

  }
  if (keyDown("left")) {
    student.x = student.x - 10

  }
  if (keyDown("right")) {
    student.x = student.x + 10

  }
}



else if(gameState === LIBRARY){
  if (keyDown("space") && student.y >= 100) {
    student.velocityY = -12;
  }

  student.velocityY = student.velocityY + 0.8
  if (keyDown("up")) {
    student.y = student.y - 10

  }
  if (keyDown("down")) {
    student.y = student.y + 10

  }
  if (keyDown("left")) {
    student.x = student.x - 10

  }
  if (keyDown("right")) {
    student.x = student.x + 10

  }
}



else if(gameState === END){

}





   

 drawSprites();

}
//function doorOpen(){
//  if(student.isTouching(door)){
//    door.changeImage(door2)
//  }
//}
