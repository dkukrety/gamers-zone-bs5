// Interface definition (documentation and naming convention)
/**
 * Interface for a Shape.
 * @interface
 */
class ShapeInterface {
    /**
     * Calculate the area of the shape.
     * @abstract
     * @returns {number} The calculated area.
     */
    calculateArea() { }

    /**
     * Draw the shape on the canvas.
     * @abstract
     */
    draw() { }
}

// Class implementing the ShapeInterface
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    draw() {
        console.log('Drawing a rectangle on the canvas.');
        // Code to draw a rectangle
    }

    // Additional methods and properties specific to rectangles...
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

    draw() {
        console.log('Drawing a circle on the canvas.');
        // Code to draw a circle
    }

    // Additional methods and properties specific to circles...
}

// Using the interface and classes
function printShapeArea(shape) {
    console.log(`Area of the shape: ${shape.calculateArea()}`);
}

const rectangle = new Rectangle(5, 7);
const circle = new Circle(3);

printShapeArea(rectangle); // Output: Area of the shape: 35
printShapeArea(circle); // Output: Area of the shape: 28.274333882308138
