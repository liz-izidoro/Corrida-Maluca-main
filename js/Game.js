class Game {
  constructor() {}

  start() {
    player = new Player();
    player.getPlayerCount();

    form = new Form();
    form.display();
    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;
    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;
    cars = [car1, car2];
  }

  getGameState() {
    var gameStateRef = database.ref("gameState");
    
    gameStateRef.on("value", data => {
      gameState = data.val();
    });
    
    // funcao anonima
    // gameStateRef.on("value",  function (blabla) {
    //   gameState = blabla.val();
    // });
  }

  setGameState(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  handleElements() {
    form.hide()
    form.titleImg.position(40, 50)
    form.titleImg.class("gameTitleAfterEffect")
  }

  play() {
    this.handleElements()
    Player.getPlayersInfo()
    if (allPlayers !== undefined) {
      image(track, 0, - height * 5, height * 6);
      drawSprites();
    }
  }
}
