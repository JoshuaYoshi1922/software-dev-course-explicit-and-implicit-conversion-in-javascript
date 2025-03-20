/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge);


Part 1

let result = Number("5") - 2; // converted "5" from string to a number, this will properly subtract 5 - 2
console.log("The result is: " + result); // output 3

let isValid = Boolean(false); // the initial code was a truthy statement, and also correct, but the quotation marks caused me some confusion, to convert it into a falsy, I removed the quotation marks so the code did not run.
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let num = Number(age); // I converted "25" from being a string into a number to properly add 25 + 5
let totalAge = num + 5; // change from age to num to using Number()
console.log("Total Age: " + totalAge); // properly added 25 + 5 = 30

Part 2

implicit type conversion

let miz = 72;
let drake = 70;
let result = 72 - 70;
console.log("MIZZOU wins by: " + result);

explicit type conversion

let part = NaN;
console.log(Boolean(part)); // false

let object = "House";
console.log(Boolean(object)); // true
