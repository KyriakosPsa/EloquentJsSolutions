/*Write a range function that takes two arguments, 
start and end, and returns an array containing all the numbers 
from start up to and including end.*/

function range(start, end) {
  let array = [];
  for (let number = start; number <= end; number += 1) {
    array.push(number);
  }
  return array;
}

console.log(range(1, 10));



/* Next, write a sum function that takes an array of numbers and
returns the sum of these numbers. 
Run the example program and see whether it does indeed return 55. */

function sum(array) {
  let sum = 0;
  for (const number of array) {
    sum += number
  }
  return sum;
}

console.log(sum(range(1, 10)));

/*As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. 
If no step is given, the elements should go up by increments of one */

function rangeStep(start, end, step = 1) {
  let array = [];
  if (step > 0) {
    for (let number = start; number <= end; number += step) {
      array.push(number);
    }
  }
  else {
    for (let number = start; number >= end; number += step) {
      array.push(number);
    }
  }
  return array;
}

console.log(rangeStep(5, 2, -1))
