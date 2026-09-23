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

result = one + two;
console.log(result);
//exception to the rule, it concatinates the two values instead of adding them together. The computer will convert the number 1 to a string so that the concatenation can be completed. The result of this operation will be '12'.
//it is going to assume a string with a plus sign will be concatenated, so it will convert the number to a string and concatenate them together. The result will be '12'.

//scope: the area in which a variable is defined and can be accessed. There are two types of scope: global and local. A variable that is defined outside of a function or block is said to have global scope, and can be accessed from anywhere in the code. A variable that is defined inside a function or block is said to have local scope, and can only be accessed from within that function or block.
let course = "CSE131"; //global scope
if (true) {
    let student = "Mary";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
                    
