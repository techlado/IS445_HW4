const r = Number(prompt("Enter the circle radius:"));


// TODO: create the circle object here
const circle = {
    radius: r,
    circumference() {
        return 2 * Math.PI * this.radius;
    },
    area() {
        return Math.PI * this.radius ** 2;
    }
};

console.log(`Its circumference is ${circle.circumference().toFixed(2)}`);
console.log(`Its area is ${circle.area().toFixed(2)}`);
