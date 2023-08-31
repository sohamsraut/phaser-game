var playScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function() {
    Phaser.Scene.call(this, {"key": "playScene"});
  },
  init: function(){},
  preload: function() {

  },
  create: function() {

    // The style of the text
    // A lot of options are available, these are the most important ones
    let style = { font: '20px Arial', fill: '#fff', width: "100%" };

    // Display the score in the top left corner
    // Parameters: x position, y position, text, style
    this.scoreText = this.add.text(20, 20, 'Press space to start', style);
    this.arrow = this.input.keyboard.createCursorKeys();
    console.log(this.arrow);
  },
  update: function() {
    if (this.arrow.space.isDown) {
      this.scene.start("mainScene");
    }
  }
});
