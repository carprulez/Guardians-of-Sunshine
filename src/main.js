// Carter Gruebel
// Guardians of Sunshine
// Major components: Tilemap, arcade physics, text objects, animation manager, cameras

let config = {
    type: Phaser.AUTO,
    autoCenter: true,
    width: 840,
    height: 420,
    scene: [ Loading, Menu, Credits, Play, Instructions, Win, Lose ],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
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