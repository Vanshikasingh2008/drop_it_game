const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var suitcase,suitcase2,rope,rope2,ground,backgroundimg;
var score = 0;
var sec;
var gamestate = "play";
var mdsec = 10;

var suitcaseArray = [];

function preload(){
backgroundimg = loadImage("background.png");
resetimg = loadImage("reset_button_final.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(displayWidth-100,displayHeight-300);

  ground = new Ground(width/2,height-50,width,10);
  //ground.visible = false;
  //ground.shapeColor = rgb(63,45,29)
  suitcase = new Suitcases(300,400,150,50);
  rope = new Rope({x:width/2,y:20},suitcase.body);

  //sec = second();
  console.log(suitcase.body);

  reset = createSprite(width/2,450,200,200);
  reset.addImage("reset_button",resetimg);
  reset.visible = false;
  reset.scale = 0.3;

  fill("black");
  strokeWeight(3);
}

function draw() {
  background(backgroundimg);  
  Engine.update(engine);
  //console.log(second());
  suitcase.display();
  ground.display();
  rope.display();

  if(gamestate === "play"){
    Math.round(mdsec);
    mdsec = mdsec-0.05;
    //Math.round(mdsec);
  text("Seconds = "+Math.round(mdsec),300,50);
  suitcaseArray != null;
    /*if(ground.body.position.y-suitcase.body.position.y === ground.height/2+suitcase.height/2){
      score = score+1;
      console.log(score);
    }*/
    for(i=0 ; i<suitcaseArray.length ; i++){
      suitcaseArray[i].display();
      //suitcaseArray[i].switchCase();
    }
    textSize(30);
  fill("green");
text("You have limited time which is for 10 seconds",100,580);


console.log(score);

  }
  if(mdsec <= 0){
    gamestate = "end";
  }

  textSize(20);
  fill("black");
  text("Score = " + score,50,100);

  if(gamestate === "end"){
    textSize(50);
    fill("red");
    text("Time is up!",width/2-100,height/2);
    text("No more Chance.",width/2-170,height/2+50);
    suitcaseArray = [];
    //image(resetimg,width/2-50,350,200,200);
    reset.visible = true;
    if(mousePressedOver(reset)){
      gamestate = "play";
      suitcaseArray != null;
      mdsec = 10;
      reset.visible = false;

    }
  }
  

//console.log(suitcase.body);
//console.log(ground.body.position.y-suitcase.body.position.y);
//console.log(ground.height/2+suitcase.height/2);
/*
  if(ground.body.position.y-suitcase.body.position.y === ground.height/2+suitcase.height/2){
      suicase2 = new Suitcases(width/2,height-100,width,10);
      suitcase2.display();
      rope2 = new Rope({x:width/2,y:20},suitcase2.body);
      rope2.display();
      console.log(suitcase2);
      console.log(rope2);
      //rope2.band.bodyB != null;
    }
*/

/*if(suitcase.body.velocity.y<0.5){
  suitcase2 = new Suitcases(300,400,150,50);
  suitcase2.display();
  rope.attach(suitcase2.body);

}*/
drawSprites();
}

function mouseClicked(){
  rope.band.bodyB =null;
  suitcaseArray.push(new Suitcases(300,400,150,50));
  rope.attach(suitcaseArray[suitcaseArray.length-1].body);
  mdsec = 10;
  scorePoints();
}
function scorePoints(){
  if(suitcaseArray.length>1){
  for(var i = 0; i<suitcaseArray.length-1; i++){
    var check = 0;
    if( suitcaseArray[i].spritebody.isTouching(suitcaseArray[i+1].spritebody) && check === 0){
      score = score+1;
      check = 1;
    }
  }
  }
}