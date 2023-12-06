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
        // win and lose
        this.load.image('loseScreen', 'visual/loseScreenSun.png');
        this.load.image('winScreen', 'visual/winScreenSunshine.png')
        // how to art
        this.load.image('instructions', 'visual/instructionsSun.png');
        // background and foreground of play scene
        this.load.image('background', 'visual/backgroundSun.png');
        this.load.image('foreground', 'visual/foregroundSun.png');
        // title screen art
        this.load.image('titleScreen', 'visual/titleSun.png');
        // credits art
        this.load.image('credits', 'visual/creditsSun.png');
        // anims and sprites
        this.load.image('coin', 'visual/coinSun.png');
        this.load.image('player', 'visual/guardian.png');
        this.load.image('bunny', 'visual/bunny.png');
        this.load.image('bee', 'visual/bee.png');
        this.load.image('frog', 'visual/frog.png');
        this.load.spritesheet('guardian', 'guardianAnims.png', {
            frameWidth: 32,
            frameHeight: 32,
        })
        // load audio assets
        this.load.audio('change', 'audio/changeScene.wav');
        this.load.audio('startGame', 'audio/startGame.wav');
        this.load.audio('coinPickup', 'audio/coinPickup.wav');
    }

    create() {
        // Guardian animations (walking)
        this.anims.create({
            key: 'walk-right',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('guardian', { start: 0, end: 1 }),
        })

        this.anims.create({
            key: 'walk-left',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('guardian', { start: 3, end: 4 }),
        })

        // Guardian animations (punching)
        this.anims.create({
            key: 'punch-right',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('guardian', { start: 0, end: 2 }),
        })

        this.anims.create({
            key: 'punch-left',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('guardian', { start: 3, end: 5 }),
        })

        // Guardian animations (jumping)
        this.anims.create({
            key: 'jump-right',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('guardian', { start: 0, end: 6 }),
        })

        this.anims.create({
            key: 'jump-right',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('guardian', { start: 0, end: 7 }),
        })

        // go to title screen
        this.scene.start('menuScene');
    }
}