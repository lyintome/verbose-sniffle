let wall1, wall2,wall3,wall4,wall5,wall31,wall34,wall32,wall33
let up1,up2,up3,up4
function preload()
{

}


function setup()
{
createCanvas(1400,680)
wall1=createSprite(700,50,1200,3);
wall1.shapeColor="blue"

wall2=createSprite(700,58,1190,3);
wall2.shapeColor="blue"

wall3=createSprite(700,500,1200,3);
wall3.shapeColor="blue"

wall31=createSprite(280,492,350,3);
wall31.shapeColor="blue"

wall32=createSprite(605,492,250,3);
wall32.shapeColor="blue"

wall33=createSprite(830,492,130,3);
wall33.shapeColor="blue"

wall34=createSprite(1095,492,320,3);
wall34.shapeColor="blue"

left1=createSprite(100,274,3,450)
left1.shapeColor="blue"

left1=createSprite(107,274,3,445)
left1.shapeColor="blue"

var K=createSprite(230,280,15,200)

}


function draw()
{
background("black")
fill("white")
text(mouseX+" "+mouseY,mouseX,mouseY)
push()
stroke("blue")
line(223,180,238,380)
pop()
drawSprites()
}