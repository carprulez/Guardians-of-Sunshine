// Carter Gruebel
// Guardians of Sunshine
// Major components: Particle effects, arcade physics, text objects, animation manager, cameras

let config = {
    type: Phaser.AUTO,
    width: 840,
    height: 420,
    scene: [ Loading, Menu, Credits, Play, Instructions, Win, Lose ],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    render: { 
        pixelArt: true 
    }
}
let game = new Phaser.Game(config);

// define globals
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let w = game.config.width;
let h = game.config.height;
let keyUP, keyDOWN, keyLEFT, keyRIGHT, keySPACE;