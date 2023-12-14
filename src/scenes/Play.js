// Play scene
class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    create() {
        // tilemap info
        const level = this.add.tilemap('tilemapJSON');
        const tileset = level.addTilesetImage('tilesetSun', 'tilesetImage');

        // adding layers
        const bgLayer = level.createLayer('Background', tileset, 0, 0);
        const bgLayer2 = level.createLayer('Second Background', tileset, 0, 0);
        const groundLayer = level.createLayer('Ground', tileset, 0, 0);
        const coinLayer = level.createLayer('Coins', tileset, 0, 0);

        // add Guardian to scene and give it gravity and hitbox
        this.guardian = new Guardian(this, 50, centerY + 136, 'guardian', 0, 'right');
        this.guardian.setGravityY(300);
        this.guardian.body.setSize(this.guardian.width / 2, this.guardian.height - 5);

        // set up camera
        this.cameras.main.setBounds(0, 0, level.widthInPixels, level.heightInPixels);
        this.cameras.main.startFollow(this.guardian, false, 0.5, 0.5);
        this.physics.world.setBounds(0, 0, level.widthInPixels, level.heightInPixels);

        // collisions
        // ground
        groundLayer.setCollisionByProperty({
            collides: true
        })

        this.physics.add.collider(this.guardian, groundLayer);

        // coins
        coinLayer.setCollisionByProperty({
            collides: true
        })

        this.physics.add.collider(this.guardian, coinLayer);

        
        // adding key inputs
        this.keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    }

    update() {
        // update state machine
        this.guardianFSM.step();

        // detect hitting bottom of world bound
        if(this.guardian.y > 420) {
            this.guardian.destroy();
            this.sound.play('death');
            this.start.scene('loseScene');
        }
    }
}