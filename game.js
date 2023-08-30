class mainScene {
  preload() {
    // first time load
    this.load.image('player', 'assets/player.png');
    this.load.image('coin', 'assets/coin.png');


  }
  create() {
    // create first time after preload
    this.player = this.physics.add.sprite(100, 100, 'player');
    this.coin = this.physics.add.sprite(300, 300, 'coin');
    // Store the score in a variable, initialized at 0
    this.score = 0;

    // The style of the text
    // A lot of options are available, these are the most important ones
    let style = { font: '20px Arial', fill: '#fff', width: "100%" };

    // Display the score in the top left corner
    // Parameters: x position, y position, text, style
    this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style);
    this.arrow = this.input.keyboard.createCursorKeys();

  }
  update() {
    // update 60 time per sec
    // Handle horizontal movements
    if (this.arrow.right.isDown) {
      // If the right arrow is pressed, move to the right
      this.player.x += 3;
    } else if (this.arrow.left.isDown) {
      // If the left arrow is pressed, move to the left
      this.player.x -= 3;
    }

    // Do the same for vertical movements
    if (this.arrow.down.isDown) {
      this.player.y += 3;
    } else if (this.arrow.up.isDown) {
      this.player.y -= 3;
    }
    // If the player is overlapping with the coin
    if (this.physics.overlap(this.player, this.coin)) {
      // Call the new hit() method
      this.hit();
    }
  }
  hit() {
    // Change the position x and y of the coin randomly
    this.coin.x = Phaser.Math.Between(100, 600);
    this.coin.y = Phaser.Math.Between(100, 300);

    // Increment the score by 10
    this.score += 10;

    // Display the updated score on the screen
    this.scoreText.setText('score: ' + this.score);
  }
}

new Phaser.Game({
  width: 700, // Width of the game in pixels
  height: 400, // Height of the game in pixels
  backgroundColor: '#3498db', // The background color (blue)
  scene: mainScene, // The name of the scene we created
  physics: { default: 'arcade' }, // The physics engine to use
  parent: 'game', // Create the game inside the <div id="game">
});