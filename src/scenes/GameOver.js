// Game over scene
class Lose extends Phaser.Scene {
    constructor() {
        super('loseScene')
    }

    preload() {
        // loading screen
        this.load.image('loseScreen', './assets/visual/loseScreenSun.png');
    }

    create() {
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start('menuScene')
        }
    }
}