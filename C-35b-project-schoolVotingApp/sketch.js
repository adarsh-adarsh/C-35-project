var database;
var canvas;

function setup()
{
  database = firebase.database();
  canvas = createCanvas(500,500);
}

function draw()
{
  background("white");
  drawSprites();
}