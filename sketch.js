var Money,thief,floor1,door1,money1,money2,money3,money4;
var floor2,score,box2,laser1,door2,floor3,computer,box,laser2;
var laser3,laser4,laser5,suitcase,edges;

function setup(){
createCanvas(1200,400)
floor1 = createSprite(500,85,1200,10);
floor1.shapeColor='black';
Money = createSprite(1000,1000,10,10);
thief = createSprite(20,38,20,40);
edges=createEdgeSprites()
door1 = createSprite(1160,85,120,10);
door1.shapeColor='brown' ;
money1 = createSprite(268,55,10,10);
money2 = createSprite(200,122,10,10);
money3 = createSprite(280,255,10,10);
money4 = createSprite(170,355,10,10);

score =0;
floor2 = createSprite(600,190,1200,10);
floor2.shapeColor='black';
box = createSprite(206,165,40,40);
box.shapeColor='orange';
laser1 = createSprite(0,110,10,45);
laser1.shapeColor='red';
laser1.velocityX=5;
door2 = createSprite(5,150,10,70);
door2.shapeColor='brown';
floor3 = createSprite(600,290,1200,10);
floor3.shapeColor='black';
door3 = createSprite(1160,290,120,10);
door3.shapeColor='brown';
computer = createSprite(1155,240,10,10);

box2 = createSprite(1155 ,272,35,25);
box2.shapeColor='orange';
laser2 = createSprite(300,325,10,10);
laser3 = createSprite(225,364,10,10);
laser4 = createSprite(150,325,10,10);
laser5 = createSprite(75,364,10,10);
laser2.shapeColor='red';
laser3.shapeColor='red';
laser4.shapeColor='red';
laser5.shapeColor='red';

laser2.velocityY=6;
laser3.velocityY=6;
laser4.velocityY=6;
laser5.velocityY=6;

suitcase = createSprite(30,380,10,10);

}
function draw() {
background("lightgreen");
text(mouseX+" "+mouseY,mouseX,mouseY)
 thief.scale=0.5;
 computer.scale=0.4;
 suitcase.scale=0.4;
 
 if (thief.isTouching(door1)) {
   textSize(15);
   fill("white");
   text("Press X to Open Door",240,115);
 }
  
if (thief.isTouching(door1) && keyDown("x")) {
   door1.width = 10;
   door1.height = 80;
   door1.x = 1170;
   door1.y = 50;
 }
 if (thief.isTouching(door2)) {
   textSize(15);
   fill("white");
   text("Press X to Open Door",57,140);
 }
  
if (thief.isTouching(door2) && keyDown("x")) {
   door2.width = 10;
   door2.height = 80;
   door2.x = 312;
   door2.y = 50;

thief.x=100;
thief.y=276;
 }
  
if (keyDown("left")) {
  thief.x = thief.x-10;
}

 if (keyDown("right")) {
 thief.x = thief.x+10;
} 

if (keyDown("space") || keyDown("up")) {
 thief.velocityY=-10;
  
  
}

thief.velocityY= thief.velocityY+0.5;
 
 textSize(20);
 fill("white");
 text(score,25,20);
 
 
createEdgeSprites() ;
 thief.collide(box2);
thief.collide(edges) ;
thief.collide(door3);
thief.collide(floor3);
thief.collide(door1);
thief.collide(floor1);
thief.collide(floor2);
thief.collide(box);
laser1.bounceOff(edges);
laser2.bounceOff(edges);
laser3.bounceOff(edges);
laser4.bounceOff(edges);
laser5.bounceOff(edges); 
laser2.bounceOff(floor3); 
laser3.bounceOff(floor3); 
laser4.bounceOff(floor3);  
laser5.bounceOff(floor3);  
 
if (thief.isTouching(money1)) {
  money1.y = 1000;

 score=+100; 
  
}

if (thief.isTouching(money2)) {
  money2.y = 1000;
  
 score=+200; 
  
}

if (thief.isTouching(money3)) {
  money3.y = 1000;

 score=+300; 
  
}

if (thief.isTouching(money4)) {
  money4.y = 1000;
  
 score=+400; 
  
}

money1.scale=0.35;
money2.scale=0.35;
money3.scale=0.35; 
money4.scale=0.35;
 
if (thief.isTouching(laser1) || thief.isTouching(laser2) || thief.isTouching(laser3) || thief.isTouching(laser4) || thief.isTouching(laser5)) {
  reset();
  
}

if (thief.isTouching(computer)) {
  
  fill("white");
  textSize(15);
  text("Press H to Hack",97,217);
}

if (thief.isTouching(computer) && keyDown("h")) {
  
thief.x=1120
thief.y=340

door3.shapeColor='green';
  
}    
 
if (thief.isTouching(suitcase)) {
  
  textFont(15);
  fill("white");
  text("Press D to Deposit Money",10,310);
  
}

if (thief.isTouching(suitcase) && keyDown("d")) {
  
 textSize(25);
fill("white");
text("All Money Collected",115,16);
text("Press R to Reset",108,40);
}

if (keyDown("r")) {
    reset();
  }
 
 drawSprites(); 
}

function reset (){

score=0;
thief.x=50;
thief.y=60;

door1.width=110;
door1.height=10;
door1.x=370;
door1.y=85;

money1.y=55;
money2.y=122;
money3.y=255;
money4.y=355;

door3.x=370;
door3.y=290;
door3.width=110;
door3.height=10;
door3.shapeColor='brown';

computer.setAnimation("computer");

laser1.x=0;

door2.x=5;
door2.y=150;

box.y=165;
box2.y=272;

floor1.y=85;
floor2.y=190;
floor3.y=290;

computer.y=240;

}

