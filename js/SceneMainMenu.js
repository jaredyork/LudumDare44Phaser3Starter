class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "SceneMainMenu" });
  }

  init(data) {
    this.passingData = data;
  }

  create() {
    // TODO: Add the main menu
    this.scene.start("SceneMain");
  }

  update() {

  }
}