// Menu scene
class Menu extends Phaser.Scene { 
    constructor() {
        super('menuScene')
    }

    create() {
        // set up RIGHT and DOWN key input detection
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
            this.sound.play('howTo')
            this.scene.start('instructionsScene')
        }
        // check for UP input
        if(Phaser.Input.Keyboard.JustDown(keyUP)) {
            this.scene.start('creditsScene')
        }
    }
}