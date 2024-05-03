/* he first, reverseArray, should take an array as argument 
and produce a new array that has the same elements in the inverse order.
 The second, reverseArrayInPlace, should do what the reverse method does:
modify the array given as argument by reversing its elements. 
Neither may use the standard reverse methods*/

function reverseArray(array) {
  let reversed = [];
  for (let element of array) reversed.unshift(element);
  return reversed
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));


function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);