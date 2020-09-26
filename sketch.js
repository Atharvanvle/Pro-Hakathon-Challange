const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundIMG = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(800,330,500,10);
    platform = new Ground(150, 318, 350, 200);
    fill("red");
    box1 = new Box(640,290);
    box2 = new Box(950,290);
    pig1 = new Pig(880, 300);
    log1 = new Log(795,280,360, PI/2);

    box3 = new Box(800,300);
    box4 = new Box(720,240);
    pig3 = new Pig(700, 300);
    pig4 = new Pig(800,220);
    log2 =  new Log(800,190,360, PI/2);

    box5 = new Box(880,240);
    log4 = new Log(810,120,320, PI/2);
    log5 = new Log(9760,100,220, PI/2);

    bird = new Bird(200,50);

    pig5 = new Pig(730,140);
    pig6 = new Pig(860,140);

    box6 = new Box(670,190);
    box7 = new Box(940,120);
    box8 = new Box(800,150);
    box9 = new Box(9670,140);
    box10 = new Box(9850,120);
    box11 = new Box(9670,120);


    log6 = new Log(720,100,140, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundIMG);
    Engine.update(engine);
    //strokeWeight(4);
    fill("yellow");
    textSize(25);
    text("LEVEL : 3",580,20);
    fill("yellow");
    textSize(18);
    text("tap 'space' to play another chance",925,20);

    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    pig6.display();
    box3.display();
    box4.display();
    pig3.display();
    pig4.display();
    log2.display();
    pig5.display();
    box5.display();
    log4.display();
    log5.display();
    //log6.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
function keyPressed(){
    if(keyCode==32){
        Matter.Body.setPosition(bird.body,{x:200,y:50});
    slingshot.attach(bird.body);
    }
}

function mouseReleased(){
    slingshot.fly();
}