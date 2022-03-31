var isGameOver;
var bike;
var bikeImage;
var obstacle;
var obstacleImage;
var backgroundImage;

function preload() {
  bikeImage = loadImage("https://i.imgur.com/N5uCbDu.png");
  obstacleImage = loadImage("https://i.imgur.com/OdL0XPt.png");
  backgroundImage = loadImage("https://i.imgur.com/aKQOg3G.png");
}

/*function setup() {
  isGameOver = false;
  createCanvas(500, 500);
  bike = createSprite(width / 2, height - (bikeImage.height / 2), 0, 0);
  var x = bike.addImage(bikeImage);
  console.log(bike);
  console.log(x);
  obstacle = createSprite(width / 2, 0, 0, 0);
  obstacle.addImage(obstacleImage);
  obstacle.rotationSpeed = 4.0;
}*/

function draw() {
  if (isGameOver) {
    gameOver();
  } else {
    if (obstacle.overlap(bike)) {
      isGameOver = true;
    }
    background(backgroundImage);
    if (keyDown(RIGHT_ARROW) && bike.position.x < (width - (bikeImage.width / 2))) {
      bike.position.x += 2;
    }
    if (keyDown(LEFT_ARROW) && bike.position.x > (bikeImage.width / 2)) {
      bike.position.x -= 2;
    }
    obstacle.position.y = obstacle.position.y + 3;
    if (obstacle.position.y > height) {
      obstacle.position.y = 0;
      obstacle.position.x = random(5, width - 5);
    }
    drawSprites();
  }
}

function gameOver() {
  background(0);
  textAlign(CENTER);
  fill("white");
  text("Game Over!", width / 2, height / 2);
  text("Click anywhere to try again", width / 2, 3 * height / 4);
}

function mouseClicked() {
  isGameOver = false;
  bike.position.x = width / 2;
  bike.position.y = height - (bikeImage.height / 2);
  obstacle.position.x = width / 2;
  obstacle.position.y = 0;
}