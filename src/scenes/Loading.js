// Loading scene
class Loading extends Phaser.Scene {
    constructor() {
        super('loadingScene')
    }

    preload() {
        // loading bar
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            // reset fill/line style
            loadingBar.clear();
            // (color, alpha)
            loadingBar.fillStyle(0x09DB3A, 1);
            // (x, y, w , h)
            loadingBar.fillRect(0, centerY, w * value, 5)
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });

        this.load.path = './assets/';
        // load graphics assets
        this.load.image('instructions', 'visual/instructionsSun.png');
        this.load.image('background', 'visual/backgroundSun.png');
        this.load.image('foreground', 'visual/foregroundSun.png');
        this.load.image('titleScreen', 'visual/titleSun.png');
        this.load.image('credits', 'visual/creditsSun.png');
        this.load.image('coin', 'visual/coinSun.png');
        this.load.image('player', 'visual/guardian.png');
        this.load.image('bunny', 'visual/bunny.png');
        this.load.image('bee', 'visual/bee.png');
        this.load.image('frog', 'visual/frog.png');
        // load audio assets
        this.load.audio('change', 'audio/changeScene.wav');
        this.load.audio('startGame', 'audio/startGame.wav');
        this.load.audio('coinPickup', 'audio/coinPickup.wav');
    }

    create() {
        // go to title screen
        this.scene.start('menuScene');
    }
}