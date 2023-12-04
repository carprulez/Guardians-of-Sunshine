// Credits scene
class Credits extends Phaser.Scene {
    constructor() {
        super('creditsScene')
    }

    preload() {
        // loading screen
        this.load.image('credits', './assests/visual/creditsSun.png');
        // set up DOWN input detection
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }

    create() {
        // check for DOWN input
        if(Phaser.Input.Keyboard.JustDown(keyDOWN)) {
            this.sound.play('menu');
            this.scene.start('menuScene');
        }
    }
}