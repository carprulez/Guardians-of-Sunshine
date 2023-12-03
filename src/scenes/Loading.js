// Loading scene
class Loading extends Phaser.Scene {
    constructor() {
        super("loadingScene")
    }

    preload() {
        // loading bar
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();
            loadingBar.fillStyle(0x09DB3A, 1);
            loadingBar.fillRect(0, centerY, w * value, 5)
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });

        this.load.path = './assets/';
        // load graphics assets
        this.load.image('background', 'visual/backgroundSun.png');
        this.load.image('coin', 'visual/coinSun.png');
        this.load.image('foreground', 'visual/foregroundSun.png');
        this.load.image('player', 'visual/guardian.png');
        this.load.image('loseScreen', 'visual/loseScreenSunshine.png');
        this.load.image('titleScreen', 'visual/titleSun.png');
        // load audio assets
    }

    create() {
        // go to title screen
        this.scene.start('menuScene');
    }
}