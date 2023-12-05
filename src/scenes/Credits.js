// Credits scene
class Credits extends Phaser.Scene {
    constructor() {
        super('creditsScene')
    }

    create() {
        // credit art
        this.credits = this.add.image(0, 0, 'credits').setOrigin(0);
        // adding text to get back to menu
        let textConfig = {
            fontFamily: 'Impact',
            fontSize: '15px',
            color: '#68BE16',
            align: 'center',
            fixedWidth: 0
        }
        this.add.text(centerX, h - 15, 'Use DOWN to go back to menu', textConfig).setOrigin(0.5);
        // set up DOWN input detection
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }

    update() {
        // check for DOWN input
        if(Phaser.Input.Keyboard.JustDown(keyDOWN)) {
            this.sound.play('change');
            this.scene.start('menuScene');
        }        
    }
}