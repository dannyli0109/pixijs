export default class Key {

    constructor(keyCode) {
        this.keyCode = keyCode
        this.isUp = true
        this.isDown = false

        window.addEventListener(
            "keydown", this.downHandler.bind(this), false
        );
        window.addEventListener(
            "keyup", this.upHandler.bind(this), false
        );
    }

    downHandler(event) {
        if (event.keyCode == this.keyCode) {
            if (this.isUp && !this.isDown) {
                this.press()                
            }
            this.isUp = false
            this.isDown = true
        }
    }


    upHandler(event) {
        if (event.keyCode == this.keyCode) {
            if (!this.isUp && this.isDown) {
                this.release()
            }
            this.isUp = true;
            this.isDown = false;
        }
    }
}