class GeometricShape {

    area() {
        return 0;
    }
    perimeter() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class EqTriangle extends GeometricShape {
    constructor(b, h) {
        super();
        this.branch = b;
        this.hauteur = h;
    }

    area() {
        return this.hauteur * this.branch;
    }

    perimeter() {
        return 3 * this.branch;
    }
}

class Rectangle extends GeometricShape {
    constructor(w, h) {
        super();
        this.width = w;
        this.height = h;
      }
    
      area() {
        return this.width * this.height;
      }
      perimeter() {
        return 2 * (this.width + this.height);
      }
}

function cumulateShapes(gShapes){
    return gShapes.reduce((sum, shape) => {
        if (shape instanceof GeometricShape){
            console.log(`Shape: ${shape.toString()} - area: ${shape.area()}`);
            console.log(
              `Shape: ${shape.toString()} - perimeter: ${shape.perimeter()}`
            );
            return sum + shape.area();
          }
          throw Error("Bad argument shape.");
    },0);
}

const shapes = [new EqTriangle(3,5), new Rectangle(2,3)];

console.log(cumulateShapes(shapes));