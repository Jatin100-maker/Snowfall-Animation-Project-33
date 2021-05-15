const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

drops = [];
var bg;
var engine, world;

function preload(){
bg = loadImage("snow3.jpg")
}


function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(bg); 

  if(frameCount%60===0){
    drops.push(new Drop(random(width/2-10, width/2+10), 50,50))
  }


  for (var j = 0; j< drops.length; j++){
    drops[j].display();
  }


}

  
