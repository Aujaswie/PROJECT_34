var dog, happydog;
var database;
var foodS, foodStock;

function preload()
{
  dogImg = loadImage ("images/dogImg.png");
  dogHappy = loadImage ("images/dogHappy.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite (50,100,250,250);

  dog.addImage (dogImg , dogHappy);

  database = firebase.database();

  foodStock = database.ref('food');
  
  foodStock.on ("value",redStock);

  
}


function draw() {  
 background (46, 139, 87);

 if(keyWentDown(UP_ARROW)){
   writeStock (foodS);
   dog.addIMage (dogHappy);
 }

  drawSprites();

  textSize (25);
  fill (lavender);
  stroke (black);

  text ("dog is happy", 250 ,100);

}

function readStock (data){
    foodS = data.val ();
}

function writeStock (x) {

  if (x <= 0) {
    x = 0 
  }
  else {
    x= x-1
  }

  database.ref ('/').update({
    Food : x
  })
}


