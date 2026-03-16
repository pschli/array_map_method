import { showExample, showOutput } from "./shared/utils.js";

/////////////////////////////////////////////////////////////
// LOOPING OVER AN ARRAY
//
// Task
// create a new array
// from an existing array
// call a function on every element
//
// Example 1

showExample(1);

let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArray = [];

for (let i = 0; i < originalArray.length; i++) {
  newArray.push(originalArray[i] + 5);
}

showOutput(originalArray, newArray, 1);

/////////////////////////////////////////////////////////////
// USING .map()
// Refactor the example above
//
// Example 2
// Return an array, which contains every value from the original array incremented by 5.
// We are using one parameter (element) which is the current element of the original array in the loop.

showExample(2);

let newArray2 = originalArray.map((element) => element + 5);

showOutput(originalArray, newArray2, 2);

// Example 3
// Return an array, which contains every value from the original array incremented by the index.
// We are using two parameters (element, index) which is the current element of the original array
// in the loop and the index of the element.

showExample(3);

let newArray3 = originalArray.map((element, index) => element + index);

showOutput(originalArray, newArray3, 3);

// Example 4
// Return an array, which contains every value from the original array added to the previous element's value.
// We are using three parameters (element, index, callingArray) which is the current element of the original array
// in the loop, the index of the element and the calling array itself.

showExample(4);

let newArray4 = originalArray
  .filter((element) => element % 2 === 1) // this demonstrates, how the callingArray parameter is useful, as the
  .map((element, index, callingArray) => {
    if (index === 0) return element;
    return element + callingArray[index - 1];
  });

showOutput(originalArray, newArray4, 4);

/////////////////////////////////////////////////////////////
// CALLBACK FUNCTIONS

// Example 5
// Use callback functions to keep your code efficient

showExample(5);

let newArray5 = originalArray.map(add5);

function add5(element) {
  if (isNaN(element)) return 0;
  return element + 5;
}

showOutput(originalArray, newArray5, 5);

/////////////////////////////////////////////////////////////
// Pitfalls and Anti-Patterns
//
// Example 6
// Callback functions with more than one parameter

showExample(6);

let newArray6 = originalArray.map(addAmount); // incorrectly uses the second parameter in the callback
// Being explicit helps:
// newArray6 = originalArray.map((element) => addAmount(element));

function addAmount(element, amount = 5) {
  if (isNaN(element)) return 0;
  return element + amount;
}

showOutput(originalArray, newArray6, 6);

// Example 7
// Be careful with implicit returns, when using arrow functions

showExample(7);

let newArray7 = originalArray.map((element) => {
  if (isNaN(element)) return 0;
  return element + 5; // only returns something with a return statement
});

showOutput(originalArray, newArray7, 7);

//
// Example 8
// Don't use side effects

showExample(8);

let newArray8 = originalArray.map((element, index) => {
  originalArray[index] -= index * 2; // side effect
  return element + index;
});

// Dont'n use .map() without returning an array

originalArray.map((element, index) => {
  originalArray[index] -= index * 2;
});

newArray8 = null;

showOutput(originalArray, newArray8, 8);

/////////////////////////////////////////////////////////////
