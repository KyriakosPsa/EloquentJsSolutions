/* Use the reduce method in combination with the
concat method to “flatten” an array of arrays 
into a single array that has all the elements of the original arrays. */
//example of array flattening using reduce and concat

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((a, b) => a.concat(b)));

/*Your own loop
Write a higher-order function loop that provides something like a for loop statement. 
When defining the function, you can use a regular loop to do the actual looping.*/
//iteriation ->
//1. Run the test function -> stop if false
//2. else call the body function with the current value
//3. Call the update function to create a new value and start over from the beggining

function loop(value, testFunction, updateFunction, bodyFunction) {
  for (
    let current = value;
    testFunction(current);
    current = updateFunction(current)
  ) {
    bodyFunction(current);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
