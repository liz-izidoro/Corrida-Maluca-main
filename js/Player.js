class Player {
  constructor() {
    this.name = null;
    this.id = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  getPlayerCount()
  {
    var playerCountRef = database.ref("playerCount");

    playerCountRef.on("value", function (data) {
      playerCount = data.val();
    });

  }

  updatePlayerCount(count)
  {
    database.ref("/").update({
      playerCount: count
    });
  }

  addPlayer()
  {
    var idGamer = "players/player" + this.id;

    if (this.id === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    database.ref(idGamer).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY
    });
  }

  static getPlayersInfo()
  {
    var playerInfoRef = database.ref("players")
    playerInfoRef.on("value", function (data){
      allPlayers = data.val()
    })
  }
}
