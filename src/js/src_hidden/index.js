import * as PIXI from 'pixi.js';
import '../scss/style.scss';
import Smoothie from './smoothie.js'

PIXI.utils.sayHello()

let pacman,
    blinky;

let gameContainer = document.getElementById('game');
let box = document.querySelector('.box');
let TextureCache = PIXI.utils.TextureCache;

const right = 37,
      up = 38,
      left = 39,
      down = 40,
      spacebar = 32;

let deg = 57.2957795;

const moveBlinky = () => {
    let y = getRandomValue(blinky.width, app.renderer.height - blinky.height);
    let x = getRandomValue(blinky.height, app.renderer.width - blinky.width);
    blinky.y = y;
    blinky.x = x;
}

let app = new PIXI.Application({
    antialias: true,
    transparent: false,
    resolution: 1
});

let smoothie = new Smoothie({
    engine: PIXI,
    renderer: app.renderer,
    root: app.stage,
    fps: 1,
    update: moveBlinky.bind(this)
});

game.appendChild(app.view);

app.renderer.autoResize = true;
app.renderer.resize(gameContainer.offsetWidth, window.innerHeight/2);


const getRandomValue = (min, max) => {
    return ((Math.round(Math.random() * max) + min));
}


const setup = () => {
    // Display the sprite
    let pacmanTexture = TextureCache['pacman.png']
    pacman = new PIXI.Sprite(pacmanTexture);
    pacman.width = 50;
    pacman.height = 50;
    pacman.anchor.x = 0.5;
    pacman.anchor.y = 0.5;
    pacman.x = 140;
    pacman.y = 140;

    console.log(pacman.pivot.x)

    let blinkyTexture = TextureCache['blinky.png']
    blinky = new PIXI.Sprite(blinkyTexture);
    blinky.width = 50;
    blinky.height = 50;

    app.stage.addChild(pacman);
    app.stage.addChild(blinky);
    smoothie.start();
};

const degToRad = (deg) => {
    return deg * (Math.PI/180)
}

const moveLeft = () => {
    console.log('left')
    if (pacman.x > 0 || pacman.x < gameContainer.offsetWidth) {
        pacman.x += 5;
    }
    pacman.rotation = 0;
}

const moveDown = () => {
    console.log('down')
    if (pacman.y > 0 || pacman.y < gameContainer.offsetHeight) {
        pacman.y += 5;
    }
    pacman.rotation = degToRad(90);
}
const moveRight = () => {
    console.log('right')
    if (pacman.x > 0 || pacman.x < gameContainer.offsetWidth) {
        pacman.x -= 5;
    }
    pacman.rotation = degToRad(180);
}
const moveUp = () => {
    console.log('up')
    if (pacman.y > 0 || pacman.y < gameContainer.offsetHeight) {
        pacman.y -= 5;
    }
    pacman.rotation = degToRad(270);
}

const checkForColission = (sprite1, sprite2) => {
    let hit = false;
    // if sprite1 position === sprite2 position hit=true
    let rangeXsprite1 = sprite1.pivot.x + sprite1.width
    let rangeYsprite1 = sprite1.pivot.y + sprite1.width

    let rangeXsprite2 = sprite2.pivot.x + sprite2.width
    let rangeYsprite2 = sprite2.pivot.y + sprite2.width



}


PIXI.loader.add('imgs/spritesheet.json').load(setup);
PIXI.loader.on("progress", (progress) => {
    console.log(progress.progress);
});

document.addEventListener('keydown', (e) => {
    switch(e.which) {
        case left:
            moveLeft();
            break;
        case right:
            moveRight();
            break;
        case down:
            moveDown();
            break;
        case up:
            moveUp()
            break;
        default:
            console.log("nothing's moving")
            break
    }
});
