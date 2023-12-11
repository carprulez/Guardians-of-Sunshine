// Game over scene
class Lose extends Phaser.Scene {
    constructor() {
        super('loseScene')
    }

    create() {
        // adding art
        this.loss = this.add.image(0, 0, 'loseScreen').setOrigin(0);
        // adding text to get back to menu
        let textConfig = {
            fontFamily: 'Impact',
            fontSize: '15px',
            color: '#68BE16',
            align: 'center',
            fixedWidth: 0
        }
        this.add.text(centerX, h - 15, 'Use SPACE to go back to menu', textConfig).setOrigin(0.5);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start('menuScene')
        }
    }
}