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

        // load graphics assets

        // load audio assets
    }

    create() {
        // go to title screen
        this.scene.start('menuScene');
    }
}