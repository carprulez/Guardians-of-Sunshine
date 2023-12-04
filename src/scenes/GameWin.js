// Game Win scene
class Win extends Phaser.Scene {
    constructor() {
        super('winScene')
    }

    preload() {
        this.load.image('winScreen', './assets/visual/winScreenSunshine.png')
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