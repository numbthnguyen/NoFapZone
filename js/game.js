// create a new scene named "Game"
let gameScene = new Phaser.Scene('Game');
 
// our game's configuration
let config = {
  type: Phaser.AUTO,  //Phaser will decide how to render our game (WebGL or Canvas)
  width: 450, // game width
  height: 700, // game height
  scene: gameScene // our newly created scene
};
 
// create the game, and pass it the configuration
let game = new Phaser.Game(config);

// load asset files for our game
gameScene.preload = function() {
 
  // load images
  this.load.image('onodera', 'assets/onodera.jpg');
  this.load.image('block', 'assets/32x32.png');
};
 
// executed once, after assets were loaded
gameScene.create = function() {
 
  // background
  let bg = this.add.sprite(0, 0, 'onodera');

  this.world.createMultiple(12, 'block', 0, true);

  // change origin to the center of the sprite
  bg.alignIn(this.world.bounds, Phaser.CENTER);

    //  Align all of the sprites around the picture
    this.world.getChildAt(1).alignTo(pic, Phaser.TOP_LEFT);
    this.world.getChildAt(2).alignTo(pic, Phaser.TOP_CENTER);
    this.world.getChildAt(3).alignTo(pic, Phaser.TOP_RIGHT);
    this.world.getChildAt(4).alignTo(pic, Phaser.LEFT_TOP);
    this.world.getChildAt(5).alignTo(pic, Phaser.LEFT_CENTER);
    this.world.getChildAt(6).alignTo(pic, Phaser.LEFT_BOTTOM);
    this.world.getChildAt(7).alignTo(pic, Phaser.RIGHT_TOP);
    this.world.getChildAt(8).alignTo(pic, Phaser.RIGHT_CENTER);
    this.world.getChildAt(9).alignTo(pic, Phaser.RIGHT_BOTTOM);
    this.world.getChildAt(10).alignTo(pic, Phaser.BOTTOM_LEFT);
    this.world.getChildAt(11).alignTo(pic, Phaser.BOTTOM_CENTER);
    this.world.getChildAt(12).alignTo(pic, Phaser.BOTTOM_RIGHT);
}