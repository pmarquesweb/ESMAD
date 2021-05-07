//a
class Rectangle {
    #height = 0;
    #width = 0;
    #color = '#FFFFFF';

//b    
    constructor(height = 2, width = 1) {
        this.height = height;
        this.width = width;
    }

//c
    get height() {
        return this.#height;
    }

    set height(value) {
        if (value > 0) {
            this.#height = value;
        }
    }


    get width() {
        return this.#width;
    }

    set width(value) {
        if (value > 0) {
            this.#width = value;
        }
        else {
            this.#width = 0;
        }
    }

//d
    get color() {
        return this.#color;
    }

//e
    getArea() {
        return this.#width * this.#height;
    }

    getPerimeter() {
        return this.#width * 2 + this.#height * 2;
    }

//f
    myFirstRectangle = Rectangle();
    mySecondRectangle = Recangle(10, 5);

//g

}

