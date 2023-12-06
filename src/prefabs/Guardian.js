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
        }, [scene, this])               // use this as arguments to keep scene and object context
    }
}

// guardian-specific state
class IdleState extends State {
    enter(scene, guardian) {
        guardian.setVelocity(0);
        guardian.anims.play(`walk-${guardian.direction}`);
        guardian.anims.stop();
    }

    execute(scene, guardian) {

        // transition to punch if pressing space
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.stateMachine.transition('punch')
        }
    }
}