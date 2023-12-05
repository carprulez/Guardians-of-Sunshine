// Menu scene
class Menu extends Phaser.Scene { 
    constructor() {
        super('menuScene')
    }

    create() {
        // title art
        this.title = this.add.image(0, 0, 'titleScreen').setOrigin(0);
        // set up RIGHT, DOWN and UP key input detection
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    }

    update() {
        // check for RIGHT input
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            this.sound.play('startGame');
            this.scene.start('playScene');
        }
        // check for DOWN input
        if(Phaser.Input.Keyboard.JustDown(keyDOWN)) {
            this.sound.play('change');
            this.scene.start('instructionsScene');
        }
        // check for UP input
        if(Phaser.Input.Keyboard.JustDown(keyUP)) {
            this.sound.play('change');
            this.scene.start('creditsScene');
        }
    }
}