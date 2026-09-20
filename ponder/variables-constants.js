const PI = 3.14;
let radius = 3;

let area = PI * radius * radius;

console.log(area);
// console.log is used to print the value of area to the console. The area of a circle is calculated using the formula area = π * r^2, where r is the radius of the circle. In this case, the radius is 3, so the area is calculated as 3.14 * 3 * 3, which equals 28.26.

radius = 20;
area = PI * radius * radius;

console.log(area);

// variables and constants are case sensitive 
// cannot reassign a value to a constant after it has been declared
// after the first assignment of constant or variable you do not need to declare it again, you can just reassign a new value to it.

const one = 1;
const two = '2';

let result = one * two;

console.log(result);
