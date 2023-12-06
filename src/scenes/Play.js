// Play scene
class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    create() {
        // add background
        this.background = this.add.image(0, 0, 'background').setOrigin(0);
        // add foreground
        this.foreground = this.physics.add.sprite(0, 0, 'foreground').setOrigin(0)
        // adding key inputs
        this.keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    }
}