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
        // loading tilemap
        this.load.image('tilesetImage', 'visual/tilesetSun.png');
        this.load.tilemapTiledJSON('tilemapJSON', 'visual/level.json');
        // win and lose
        this.load.image('loseScreen', 'visual/loseScreenSun.png');
        this.load.image('winScreen', 'visual/winScreenSun.png')
        // how to art
        this.load.image('instructions', 'visual/instructionsSun.png');
        // title screen art
        this.load.image('titleScreen', 'visual/titleSun.png');
        // credits art
        this.load.image('credits', 'visual/creditsSun.png');
        // anims and sprites
        this.load.image('coin', 'visual/coinSun.png');
        this.load.image('player', 'visual/guardian.png');
        this.load.image('bunny', 'visual/bunnySun.png');
        this.load.image('bee', 'visual/beeSun.png');
        this.load.image('frog', 'visual/frogSun.png');
        this.load.spritesheet('guardian', 'visual/guardianAnims.png', {
            frameWidth: 32,
            frameHeight: 32,
        })
        // load audio assets
        this.load.audio('death', 'audio/death.wav');
        this.load.audio('change', 'audio/changeScene.wav');
        this.load.audio('startGame', 'audio/startGame.wav');
        this.load.audio('coinPickup', 'audio/coinPickup.wav');
        this.load.audio('jumping', 'audio/jumping.wav');
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
            frames: this.anims.generateFrameNumbers('guardian', {
                frames: [0, 2, 0]
            }),
        })

        this.anims.create({
            key: 'punch-left',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('guardian', { 
                frames: [3, 5, 3] 
            }),
        })

        // Guardian animations (jumping)
        this.anims.create({
            key: 'jump-right',
            frameRate: 4,
            repeat: -1,
            duration: 1000,
            frames: this.anims.generateFrameNumbers('guardian', { 
                frames: [6] 
            }),
        })

        this.anims.create({
            key: 'jump-left',
            frameRate: 4,
            repeat: -1,
            duration: 1000,
            frames: this.anims.generateFrameNumbers('guardian', { 
                frames: [7]
            }),
        })

        // go to title screen
        this.scene.start('menuScene');
    }
}