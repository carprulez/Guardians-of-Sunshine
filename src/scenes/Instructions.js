// instructions scene
class Instructions extends Phaser.Scene {
    constructor() {
        super('instructionsScene')
    }

    create() {
        // adding art
        this.howTo = this.add.image(0, 0, 'instructions').setOrigin(0);
        // adding text to get back to menu
        let textConfig = {
            fontFamily: 'Impact',
            fontSize: '15px',
            color: '#68BE16',
            align: 'center',
            fixedWidth: 0
        }
        this.add.text(centerX, h - 15, 'Use UP to go back to menu', textConfig).setOrigin(0.5);
        // set up UP input detection
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }

    update() {
        // check for UP input
        if(Phaser.Input.Keyboard.JustDown(keyUP)) {
            this.sound.play('change');
            this.scene.start('menuScene');
        }   
    }
}