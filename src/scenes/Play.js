// Play scene
class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    create() {
        // add background
        this.background = this.add.image(0, 0, 'background').setOrigin(0);
        // add foreground
        this.foreground = this.physics.add.sprite(0, 360, 'foreground').setOrigin(0);
        
        // add Guardian to scene and give it gravity
        this.guardian = new Guardian(this, 50, centerY, 'guardian', 0, 'right');
        this.guardian.setGravityY(300);
        this.guardian.body.setSize(this.guardian.width / 2, this.guardian.height - 5)

        // set up camera
        this.cameras.main.setBounds(0, 0, this.background.width, this.background.height);
        this.cameras.main.startFollow(this.guardian, false, 0.5, 0.5);

        this.physics.world.setBounds(0, 0, this.background.width, this.background.height)

        // add walking on the floor
        this.foreground.setImmovable(true);
        this.physics.add.collider(this.guardian, this.foreground, (guardian) => {
            this.sound.play('landing');
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
    }
}