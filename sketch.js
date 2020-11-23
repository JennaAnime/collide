function setup() {
  createCanvas(800,400);
 Rantaro= createSprite(400, 200, 50, 50);
 Anime= createSprite(400, 200, 50, 70);
 Jam= createSprite( 300,300,30,30)
 PB= createSprite(300,100,30,50)
PB.velocityY= 3
edges= createEdgeSprites()
}

function draw() {
  background(120,233,80);  
  Rantaro.x= mouseX 
  Rantaro.y = mouseY

  if(collide(Rantaro, Anime)){
   Rantaro.shapeColor=('green')
   Anime.shapeColor=('green')
  }
  else{
    Rantaro.shapeColor=('blue')
    Anime.shapeColor=('blue')
  }
if(collide(Jam,PB)){

  PB.visible= false
  Jam.visible=false 
} 
  else{
    PB.visible= true
    Jam.visible=true 

  }
  PB.bounceOff(edges)  
  drawSprites();
}

