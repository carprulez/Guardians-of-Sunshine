// Play scene
class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    create() {
        // tilemap info
        const level = this.add.tilemap('tilemapJSON');
        const tileset = level.addTilesetImage('tilesetSun', 'tilesetImage');

        // game over flag
        this.gameOver = false;

        // adding layers
        const bgLayer = level.createLayer('Background', tileset, 0, 0);
        const bgLayer2 = level.createLayer('Second Background', tileset, 0, 0);
        const groundLayer = level.createLayer('Ground', tileset, 0, 0);
        this.coinLayer = level.createLayer('Coins', tileset, 0, 0);

        // add Guardian to scene and give it gravity and hitbox
        this.guardian = new Guardian(this, 50, centerY + 127, 'guardian', 0, 'right');
        this.guardian.setGravityY(300);
        this.guardian.body.setSize(this.guardian.width / 2, this.guardian.height - 5);

        this.bee = new Bee(this, 850, centerY + 75, 'bee');
        this.bunny = new Bunny(this, 2050, centerY + 127, 'bunny');
        this.frog = new Frog(this, 3050, centerY + 127, 'frog');

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
        this.physics.add.collider(this.bee, groundLayer);
        this.physics.add.collider(this.bunny, groundLayer);
        this.physics.add.collider(this.frog, groundLayer);

        // coins
        this.coinLayer.setCollisionByProperty({
            collides: true
        })

        this.physics.add.collider(this.guardian, this.coinLayer, (guardian, coin) => {
            this.coinLayer.removeTileAt(coin.x, coin.y);
            this.sound.play('coinPickup');
        });

        // bosses
        this.physics.add.collider(this.guardian, this.bee, (guardian, bee) => {
            bee.destroy();
            this.sound.play('bossDeath');
        });
        this.physics.add.collider(this.guardian, this.bunny, (guardian, bunny) => {
            bunny.destroy();
            this.sound.play('bossDeath');
        });
        this.physics.add.collider(this.guardian, this.frog, (guardian, frog) => {
            frog.destroy();
            this.sound.play('bossDeath');
        });

        // adding key inputs
        this.keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    }

    update() {
        // update state machine
        this.guardianFSM.step();

        // adding win condition
        if(this.guardian.x > 3360) {
            this.scene.start('winScene');
        }

        // adding world bound kill
        if(this.guardian.y > 420) {
            this.sound.play('death');
            this.guardian.destroy();
            this.gameOver = true;
        }
        // switch to game over scene
        if(this.gameOver == true) {
            this.scene.start('loseScene');
        }
    }
}