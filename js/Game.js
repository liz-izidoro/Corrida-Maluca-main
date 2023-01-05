class Game {
  constructor() {}

  start() {
    player = new Player();
    player.getPlayerCount();

    form = new Form();
    form.display();
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

  setGameState() {
    database.ref("/").update({
      gameState: 4
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
      // image()
    }
  }
}
