/*Write a function countBs that takes a string as its only argument and returns 
a number that indicates how many uppercase B characters there are in the 
string. */

function countBs(text) {
  let BCount = 0;
  for (let i = 0; i <= text.length; i += 1) {
    if (text[i] == "B") {
      BCount += 1;
    }
  }
  return BCount
}

console.log(countBs("BOB"))

/* Next, write a function called countChar that behaves like countBs,
except it takes a second argument that indicates the character that is to be counted 
(rather than counting only uppercase B characters).*/
function countChar(text, char) {
  let charCount = 0;
  for (let i = 0; i <= text.length; i += 1) {
    if (text[i] == char) {
      charCount += 1;
    }
  }
  return charCount
}

console.log(countChar("kakkerlak", "k"));

//Rewrite countBs to make use of this new function.
function countBsv2(text) {
  return countChar(text, "B")
}

console.log(countBsv2("BOB"));