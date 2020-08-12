var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  

  bullet = createSprite(50,200,100,30);
  bullet.shapeColor = color(256,256,256);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
}

function draw() {
  background(0,0,0);  
  


  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  
  bullet.velocityX = speed;

 //console.log(height/2);
if (hasCollided(bullet,wall)){
    bullet.velocityX =0;
    
    var damage = 0.5 *weight*speed*speed/(thickness*thickness*thickness);
    console.log(damage);
    if(damage >10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}
function hasCollided(lbullet,lwall){
    //if(lwall.x-lbullet.x<=lwall.width/2+lbullet.width/2){
      console.log(lwall.x);
    if(lwall.x<=lbullet.x+lbullet.width){
      return true;
    }  
      return false;
}
