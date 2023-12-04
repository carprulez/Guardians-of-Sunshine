// instructions scene
class Instructions extends Phaser.Scene {
    constructor() {
        super('instructionsScene')
    }

    preload() {
        // adding scene art
        this.load.image('instructions', './assets/visual/instructionsSun.png');
    }

    create() {
        // set up UP input detection
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    }

    update() {
        // check for UP input
        if(Phaser.Input.Keyboard.JustDown(keyUP)) {
            this.sound.play('menu');
            this.scene.start('creditsScene');
        }
    }
}