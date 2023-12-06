// Guardian prefab
class Guardian extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame, direction) {
        super(scene, x, y, texture, frame); // call Sprite parent class
        scene.add.existing(this);           // add Guardian to existing scene
        scene.physics.add.existing(this);   // add physics body to scene

        this.body.setCollideWorldBounds(true);

        // set Guardian properties
        this.direction = direction;
        this.guardianVelocity = 100 // in pixels

        // initialize state machine managing guardian
        scene.guardianFSM = new StateMachine('idle', {
            idle: new IdleState(),
            move: new MoveState(),
            attack: new AttackState(),
            jump: new JumpState(),
        }, [scene, this])                   // use this as arguments to keep scene and object context
    }
}

// guardian-specific state
class IdleState extends State {
    enter(scene, guardian) {
        guardian.setVelocity(0);
        const walk = `walk-${guardian.direction}`;
        guardian.anims.play(walk);
    }

    execute(scene, guardian) {
        // local keyboard
        const space = scene.keySPACE;
        const left = scene.keyLEFT;
        const right = scene.keyRIGHT;
        const up = scene.keyUP;

        // transition to punch if pressing space
        if(Phaser.Input.Keyboard.JustDown(space)) {
            this.stateMachine.transition('attack');
            return;
        }

        // transition to jump if pressing up
        if(Phaser.Input.Keyboard.JustDown(up)) {
            this.stateMachine.transition('jump');
            return;
        }

        // transition to move when pressing the arrow keys
        if(right.isDown || left.isDown) {
            this.stateMachine.transition('move');
            return;
        }
    }
}

class MoveState extends State {
    execute(scene, guardian) {
        // local copy of keyboard
        const space = scene.keySPACE;
        const left = scene.keyLEFT;
        const right = scene.keyRIGHT;
        const up = scene.keyUP;

        // transition to punch if pressing space
        if(Phaser.Input.Keyboard.JustDown(space)) {
            this.stateMachine.transition('attack');
            return;
        }

        // transition to jump if pressing up
        if(Phaser.Input.Keyboard.JustDown(up)) {
            this.stateMachine.transition('jump');
            return;
        }
        
        // transition to move when pressing the arrow keys
        if(!(right.isDown || left.isDown)) {
            this.stateMachine.transition('idle');
            return;
        }

        // handle movement
        let moveDirection = new Phaser.Math.Vector2(0, 0);

        if(left.isDown) {
            moveDirection.x = -1;
            guardian.direction = 'left';
        } else if(right.isDown) {
            moveDirection.x = 1;
            guardian.direction = 'right';
        }

        // normalize movement vector, update hero position, and play proper animation
        moveDirection.normalize();
        guardian.setVelocity(guardian.guardianVelocity * moveDirection.x, guardian.guardianVelocity * moveDirection.y);
        guardian.anims.play(`walk-${guardian.direction}`, true);
    }
}

class AttackState extends State {
    enter(scene, guardian) {
        guardian.setVelocity(0);
        guardian.anims.play(`punch-${guardian.direction}`);
        guardian.once('animationcomplete', () => {
            this.stateMachine.transition('idle');
        });
    }
}

class JumpState extends State {
    enter(scene, guardian) {
        guardian.setVelocityY(-300);
        guardian.anims.play(`jump-${guardian.direction}`);
    }

    execute(scene, guardian) {
        let collides = guardian.body.touching;
        if(collides.down == true) {
            this.stateMachine.transition('idle');
        }
    }
}