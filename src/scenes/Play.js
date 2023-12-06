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
    }
}