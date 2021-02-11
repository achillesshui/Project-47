const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var engine, world;
var monkey;
var fruits;
var veggies;
var rope;
var ground;
var jungle, bg;
var tree1IMG, tree2IMG, tree3IMG, tree4IMG;
var tree;
var fruits, fruitGroup;
var grapeIMG, bananaIMG, appleIMG, strberryIMG;
var score;

function preload() {
  jungle = loadImage("images/bg1.jpg");
  tree1IMG = loadImage("images/tree1.png");
  tree2IMG = loadImage("images/tree2.png");
  tree3IMG = loadImage("images/tree3.png");
  tree4IMG = loadImage("images/tree4.png");
  grapeIMG = loadImage("images/grape.png");
  bananaIMG = loadImage("images/banana.png");
  appleIMG = loadImage("images/apple.png");
  strberryIMG = loadImage("images/str. berry.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  engine = Engine.create();
  world = engine.world;
  bg = createSprite(1900, displayHeight/2, 10,10);
  bg.addImage(jungle);
  monkey = new Monkey(500, 200);
  rope = new Rope(monkey.body, {x:400, y:400});
  
  fruitGroup = new Group();

  score = 0;

}

function draw() {
  background(225);  
  Engine.update(engine);
  drawSprites();
  fill("red")
  textSize(60);
  text("SCORE: "+score, displayWidth-400, 100);
  monkey.display();
  rope.display();
  bg.velocityX = -10;
  if(bg.x<-300){
    bg.x = 1900;
  }

  // if(monkey.isTouching(fruitGroup)) {
  //   fruitGroup.destroyEach();
  //   score+=10;
  // }

  console.log(tree)
  console.log(frameCount)
  spawnTrees();
  spawnFruits();
}

function spawnTrees() {
  if(frameCount%200 === 0) {
    tree = createSprite(displayWidth+100, displayHeight/2, 300,300);
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: tree.addImage(tree1IMG);
      tree.scale = 1;
      break;
      case 2: tree.addImage(tree2IMG);
      tree.scale = 3;
      break;
      case 3: tree.addImage(tree3IMG);
      tree.scale = 3;
      break;
      case 4: tree.addImage(tree4IMG);
      tree.scale = 3;
      break;
      default:
      break;
    }
    tree.velocityX = -15;
    tree.lifetime = displayWidth + 100;

  }
}

function spawnFruits() {
  if(frameCount%100 === 0) {
    fruits = createSprite(displayWidth, random(displayHeight/4, 3*displayWidth/4), 300,300);
    var rand1 = Math.round(random(1,4));
    switch(rand1) {
      case 1: fruits.addImage(grapeIMG);
      fruits.scale = 0.7;
      break;
      case 2: fruits.addImage(bananaIMG);
      fruits.scale = 0.4;
      break;
      case 3: fruits.addImage(appleIMG);
      fruits.scale = 0.5;
      break;
      case 4: fruits.addImage(strberryIMG);
      fruits.scale = 0.7;
      break;
      default:
      break;
    }
    fruits.velocityX = -15;
    fruits.lifetime = displayWidth + 100;
    fruitGroup.add(fruits);

  }
}