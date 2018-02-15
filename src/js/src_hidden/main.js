import * as PIXI from 'pixi.js';
import '../scss/style.scss';


const degToRad = (deg) => {
    return deg * (Math.PI/180);
}
// it will use WebGl and fallback in Canvas
let renderer = PIXI.autoDetectRenderer(600, 600, {
    transparent: true,
    // smoothen the edges of the graphics (especially circle)
    antialias: true
});

document.body.appendChild(renderer.view);

let stage = new PIXI.Container();

let line = new PIXI.Graphics();
    //          width, color, alpha
line.lineStyle(10, 0xD5402B, 1);
// positioning element in the middle of its container
line.position.set(renderer.width/2, renderer.height/2);

// transformOrigin to centre of line
line.pivot.set(0.140);

line.rotation = degToRad(45);

line.moveTo(5,0);
line.lineTo(5,280);


let circle = new PIXI.Graphics();

circle.lineStyle(20, 0x91CF46, 1);

circle.drawCircle(renderer.width/2, renderer.height/2, 100);


let triangle = new PIXI.Graphics();

triangle.lineStyle(5, 0x000000, 0.7);
// define the specific point where to start drawing the triangle
triangle.moveTo(20, 300);
// define the line from start to final position
triangle.lineTo(100, 380);
triangle.lineTo(20, 380);
triangle.lineTo(20, 300);

stage.addChild(line);
stage.addChild(circle);
stage.addChild(triangle);
console.log(circle);

renderer.render(stage);

const resize = () => {
    console.log('resize')
    let widthCanvas;
    let heightCanvas;
    if (window.innerWidth / window.innerHeight >= 0.5) {
        widthCanvas = window.innerHeight * 0.5;
        heightCanvas = window.innerHeight;
    }
    else {
        widthCanvas = window.innerWidth;
        heightCanvas = window.innerWidth / 0.5;
    }
    renderer.view.style.width = widthCanvas + 'px';
    renderer.view.style.height = heightCanvas + 'px';
};

window.onresize = () => {
    resize();
};