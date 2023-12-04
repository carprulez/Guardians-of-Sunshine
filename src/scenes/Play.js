// Play scene
class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    preload() {
        // loading background
        this.load.image('background', './assests/visual/backgroundSun.png');
        this.load.image('foreground', './assets/visual/foregroundSun.png');
    }

    create() {
    }
}