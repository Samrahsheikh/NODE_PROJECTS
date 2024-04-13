"use strict";
// Tests 1 for equality and inequality with strings
console.log("Equality test with strings: ", "Apple" === "Apple");
// Tests 2 for equality and inequality with strings
console.log("Equality test with strings: ", "Apple" != "Banana");
// Tests 3 using the lower case function
console.log("Lower Case function test: ", "HELLO".toLowerCase() === "hello");
// Numerical tests involving equality 
console.log("Equality test with numbers: ", 7 === 7);
// Numerical tests involving inequality
console.log("Inequality test with numbers: ", 7 != 22);
// greater than test
console.log("Greater than test: ", 7 > 3);
// less than test
console.log("Less than test: ", 2 < 11);
//  greater than and equal to.
console.log("Greater than test: ", 10 >= 10);
// less than or qual to
console.log("less than test: ", 10 <= 10);
// Tests using "and" "or" operator
console.log("And operator test: ", 10 === 10 && 11 > 5);
// Tests using "or" operator
console.log("or operator test: ", 5 === 5 || false);
// Test whether an item is in a array
const fruits = ['Apple', 'Banana', 'Mango'];
console.log('Test "Apple" in the array: ', fruits.includes("Apple"));
// Test whether an item is not in a array
console.log('Testing "Strawberry" is not in the array: ', !fruits.includes('Strawberry'));
console.log("Question Complete");
