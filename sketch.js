var canvas; var backgroundImage, bgImg, car1_img, car2_img, track; var database, gameState; var form, player, playerCount; var allPlayers, car1, car2; var cars = []; function preload() { backgroundImage = loadImage("./assets/planodefundo.png"); car1_img = loadImage("../assets/car1.png"); car2_img = loadImage("../assets/car2.png"); track = loadImage("../assets/pista.png"); }

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.setGameState();
  game.getGameState();
  game.start();
}

function draw() {
  background(backgroundImage);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
