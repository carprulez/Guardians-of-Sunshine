// Carter Gruebel
// Guardians of Sunshine

let config = {
    type: Phaser.AUTO,
    width: 1080,
    height: 640,
    scene: [ Menu, Play, Instructions ],
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