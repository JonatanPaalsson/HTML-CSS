// Declaration
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}
  
// Expression; the class is anonymous but assigned to a variable
const Triangle = class {
    constructor(height, base) {
        this.height = height;
        this.width = base;
    }
};

const rect = new Rectangle(100,200);

console.log(rect)

const triangle = new Triangle(200,50);

console.log(triangle)

