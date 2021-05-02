var bgimage;
var tom1;
var tom2;
var tom3;
var jerry1;
var jerry2;
var jerry3;
var tom;
var jerry;
function preload() {
    bgimage=loadImage("images/garden.png");
    tom1=loadAnimation("images/cat1.png");
    tom2=loadAnimation("images/cat2.png","images/cat3.png");
    tom3=loadAnimation("images/cat4.png");
    jerry1=loadAnimation("images/mouse1.png");
    jerry2=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600)
    tom.addAnimation("tomsleeping",tom1)
    tom.scale=0.2;
    jerry=createSprite(200,600);
    jerry.addAnimation("jerrystanding",jerry1)
    jerry.scale=0.2;
}

function draw() {

    background(bgimage);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.addAnimation("tomlast",tom3)
        tom.changeAnimation("tomlast");
        jerry.addAnimation("jerrylast",jerry3)
        jerry.changeAnimation("jerrylast");
        tom.velocityX=0
         tom.x=300;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode==LEFT_ARROW)
tom.velocityX=-5;
tom.addAnimation("tomrunning",tom2)
tom.changeAnimation("tomrunning");
jerry.addAnimation("jerryteasing",jerry2)
jerry.changeAnimation("jerryteasing");

}
