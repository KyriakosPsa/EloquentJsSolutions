function arrayToList(array) {
  let linkedList = null
  for (let element of array) {
    linkedList = { value: element, rest: linkedList }
  }
  return linkedList;
}

console.log(arrayToList([10, 20, 30]))

function listToArray(linkedList) {
  let array = [];
  for (let node = linkedList; node; node = node.rest) {
    array.push(node.value)
  }
  return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]\

function prepend(element, listToArray) {
  return { value: element, rest: listToArray };
}

console.log(prepend(10, prepend(20, null)));

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

console.log(nth(arrayToList([10, 20, 30]), 2));