class SceneBoot extends Phaser.Scene {
  constructor() {
    super({ key: "SceneBoot" });
  }

  preload() {

  }

  create() {
    this.passingData = {
      
    };

    this.scene.start("SceneMainMenu", this.passingData);
  }
}