// Frog prefab
class Frog extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture); // call Sprite parent class
        scene.add.existing(this);           // add frog to existing scene
        scene.physics.add.existing(this);   // add physics body to scene
    }
}