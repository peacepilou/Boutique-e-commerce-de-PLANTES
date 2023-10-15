class Mug {
    diameter;
    height;
    color;
    stickers = [];
    isFilled = false;

    constructor(d, h, c) {
        this.diameter = d;
        this.height = h;
        this.color = c;
    }

    fill() {
        this.isFilled = true;
        return "Hey ! Ta tasse est remplie hihi";
    }
}

const mug1 = new Mug(10, 15, "red");
mug1.fill();
console.log(mug1.fill());
console.log(mug1);
