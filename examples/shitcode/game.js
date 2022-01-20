const config = {
    parent: 'game', //connects to html
    width: 450,
    height: 800,
    scale: {
        mode: Phaser.Scale.ScaleModes.FIT
    },
    fps: {
        target: 30, //good framerate for mobile is 30
        min: 5
    },
    scene: [ //scene list
        titlescene,
        MainScene //first one in list starts by default
    ],
    pixelArt: true, //shuts off antialiasing and makes pixel art look better

}
new Phaser.Game(config);