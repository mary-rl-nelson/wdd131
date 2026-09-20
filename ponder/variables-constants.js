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


// type coersion: two different data types are combined in an operation, the computer will try to convert one of the values to the other data type so that the operation can be completed. In this case, the number 1 is being multiplied by the string '2'. The computer will convert the string '2' to a number so that the multiplication can be completed. The result of this operation will be 2.
const one = 1;
const two = '2';
// since the result multiplied the two constants, the computer assumed they were both integers and multiplied them.

let result = one * two;

console.log(result);

result one + two;
console.log(result);
//exception to the rule, it concatinates the two values instead of adding them together. The computer will convert the number 1 to a string so that the concatenation can be completed. The result of this operation will be '12'.