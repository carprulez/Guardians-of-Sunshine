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