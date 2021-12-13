var boy, boyImage;


function preload() {
    groundImage = loadImage("bg.jpg");
    boyDieImage = loadImage("boy1.png","boydie2.png")
    boyJumpImage = loadImage("boyjump1.png","boyjump2.png","boyjump3.png","boyjump4.png","boyjump5.png","boyjump6.png")
    boyRunImage = loadImage("boyRun.png","boyRun2.png","boyRun3.png")
}

function setup() {
    createCanvas(windowWidth,windowHeight)

    ground = createSprite(300,300, 50, 50)
    ground.addImage("ground",groundImage)
    ground.velocityX=-6+3, width/300;
    
    
     boy = createSprite(300,20)
     boy.debug=true;
     boy.velocityX=-2
     

}

function draw() {
    background("black")
    ground.velocityX = -6;
   

    drawSprites();
}