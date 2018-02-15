# Pixi.js 

###Browsers support

Browsers supported by the CanvasRenderer: [link here](https://github.com/pixijs/pixi.js/wiki/FAQs#what-browsers-are-supported)

* IE 9+,
* FF 10+,
* Chrome 11+,
* Safari 2.0+,
* Opera 12+

Note that IE 8 can work with the CanvasRenderer when using a canvas polyfill and modern Object method polyfills, but it is not officially supported by the Pixi.js team.

Browsers supported by the WebGLRenderer:

* IE 11+,
* FF 15+,
* Chrome 11+,
* Safari 5.1+,
* Opera 19+

We also try very hard to include support for:

* Ejecta,
* CocoonJS

Pixi Graphics is for shapes

let rec = new Graphics()
rec.beginfill(color)
rec.lyneStyle(border-width, colorHex, alpha)
rec.drawRect(x,y,width,height)
rec.endfill()

app.stage.addChild(rec)

run automatically to 60fps. You can boost the performances using [Smoothie.js](https://github.com/kittykatattack/smoothie) (you can run your application logic at a crazy-low fps, like 30 or 12, but your game sprites will still animate at the highest rate at which your system is capable of)

[Run Pixi.js games offline](https://github.com/dawee/pixon) ? to try
[Pixi Audio](https://www.npmjs.com/package/pixi-audio)

[Performance Tips](https://github.com/pixijs/pixi.js/wiki/v4-Performance-Tips)

[Other Performance Tips from Html5gamedevs](http://www.html5gamedevs.com/topic/23787-performance-tips/)


### How images are rendered on screen ?

*   THE SLOW WAY:
    * For every piece of image you draw an image on the screen;
    ![The slow way](./doc/slowWay.png)

* THE FAST WAY:
    * A container banch is created and render it all together
    ![The fast way](./doc/fast-way.png)

* THE PIXI WAY:
    * pixi would do a check if something is of the same texture as something else, if there is it will banch them together and render it as one draw call
    ![The pixi way](./doc/pixi-way.png)

    * From Pixi v4, it is able to batch together even different textures (for texture we mean images) and render them in one draw call. Depending on how good your computer and GPU is, most devices can batch up to 15 textures
    ![The pixi v4 way](./doc/pixi-v4.png)


[doubt on garbage collector](http://www.html5gamedevs.com/topic/11324-garbage-collector-vs-pixijs/)


### Offline games
[Pixon](https://github.com/dawee/pixon)
 - to try