// Bunny prefab
class Bunny extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame); // call Sprite parent class
        scene.add.existing(this);           // add bunny to existing scene
        scene.physics.add.existing(this);   // add physics body to scene
    }
}