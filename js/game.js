var config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  backgroundColor: "#e9e9e9",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  },
  scene: [
    SceneMainMenu,
    SceneMain
  ],
  pixelArt: true,
  roundPixels: true
};

var game = new Phaser.Game(config);
