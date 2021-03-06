var garden_image;
var tom, jerry,tomImg,jerryImg;



function preload() {
    //load the images here
    garden_image = loadImage("images/garden.png")
    tomImg = loadAnimation("images/cat1.png")
    jerryImg = loadAnimation("images/mouse4.png")
    tomAnimation = loadAnimation("images/cat3.png","images/cat2.png")
    jerryAnimation = loadAnimation("images/mouse3.png","images/mouse2.png")
    tomStop = loadAnimation("images/cat4.png")
    jerryStop = loadAnimation("images/mouse1.png")

}

function setup(){
    createCanvas(900,680);
    //create tom and jerry sprites here
    tom = createSprite(700,580)
    tom.addAnimation("tom sitting",tomImg);

    tom.scale = 0.1;
    tom.debug = true
    jerry = createSprite(110,550)
    jerry.addAnimation("jerry sitting",jerryImg);
    //
    jerry.scale = 0.1;
    jerry.debug = true
    //
    
}

function draw() {
    background(garden_image);
    //Write condition here to evalute if tom and jerry collide
   
    if(tom.x-jerry.x< (tom.width-jerry.width)/2){
        jerry.addAnimation("stopped rat",jerryStop);
        tom.addAnimation("stopped cat",tomStop);
        tom.changeAnimation("stopped cat",tomStop);
        jerry.changeAnimation("stopped rat",jerryStop);
        tom.velocityX = 0

    }
    
    drawSprites()
    
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode == LEFT_ARROW){
     tom.velocityX = -5;
     tom.addAnimation("running cat",tomAnimation);
     
     tom.changeAnimation("running cat",tomAnimation)
     jerry.addAnimation("teasing rat",jerryAnimation);
     jerry.frameDelay = 25;
     jerry.changeAnimation("teasing rat",jerryAnimation)
 }

}
