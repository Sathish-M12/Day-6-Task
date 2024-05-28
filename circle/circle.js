

class Circle {
    constructor(radius, color) {
        this._radius = radius; 
        this._color = color;
    }

    // Getter for radius
    get radius() {
        return this._radius;
    }

    // Setter for radius
    set radius(newRadius) {
        if (newRadius > 0) {
            this._radius = newRadius;
        } else {
            console.error("Radius must be a positive value.");
        }
    }

    calculateArea() {
        return Math.PI * this._radius ** 2;
    }

    calculateCircumference() {
        return 2 * Math.PI * this._radius;
    }

    // Getter for color
    get color() {
        return this._color;
    }

    // Setter for color
    set color(newColor) {
        this._color = newColor;
    }
}

// Example :
const myCircle = new Circle(1.0, "RED");
console.log(`Circle with radius ${myCircle.radius} units and color ${myCircle.color}:`);
console.log(`Area: ${myCircle.calculateArea().toFixed(2)} square units`);
console.log(`Circumference: ${myCircle.calculateCircumference().toFixed(2)} units`);

// Modify properties using setters
myCircle.radius = 7;
myCircle.color = "BLUE";
console.log(`Updated circle: radius ${myCircle.radius}, color ${myCircle.color}`);



