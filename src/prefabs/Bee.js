// Bee prefab
class Bee extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture); // call Sprite parent class
        scene.add.existing(this);           // add bee to existing scene
        scene.physics.add.existing(this);   // add physics body to scene
    }

    update() {
        
    }
}