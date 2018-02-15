import * as PIXI from 'pixi.js';
import '../scss/style.scss';
import Key from './key.js'
import Game from './game.js'


let left = new Key(37),
    up = new Key(38),
    right = new Key(39),
    down = new Key(40)
let anim

let app = new PIXI.Application(896, 992, {backgroundColor : 0xffffff});
app.backgroundColor = 0xffffff;

document.body.appendChild(app.view)

PIXI.loader
    .add('imgs/board.json')
    .add('imgs/spritesheet2.json')    
    .load(setup);
// PIXI.loader.add('imgs/spritesheet2.json').load(setupPlayer);

PIXI.loader.on("progress", (progress) => {
    console.log(progress.progress);
});

let TextureCache = PIXI.utils.TextureCache;


function setup() {

    let rows = 31;
    let cols = 28;
    let width = 8;
    let height = 8;
    let scale = 2;

    for(let i = 0; i < rows; i++) {
        for(let j = 1; j <= cols; j++) {
            let texture = TextureCache[`sprite${j + i * cols}`]
            let cell = new PIXI.Sprite(texture);
            cell.width = width * scale;
            cell.height = height * scale;
            cell.x = (j-1) * width * scale;
            cell.y = (i) * height * scale;
            app.stage.addChild(cell)
        }
    }

    var frames = [];
    
    for (var i = 0; i < 4; i++) {
        frames.push(PIXI.Texture.fromFrame(`pacman_r0${i}.png`));
    }

    // create an AnimatedSprite (brings back memories from the days of Flash, right ?)
    var anim = new PIXI.extras.AnimatedSprite(frames);
    anim.x = 8
    anim.y = 8

    anim.animationSpeed = 0.3;
    anim.play();

    app.stage.addChild(anim)



}


left.press = () => {
    
}

left.release = () => {

}

up.press = () => {

}

up.release = () => {

}

right.press = () => {

}

right.release = () => {

}

down.press = () => {

}

down.release = () => {

}



