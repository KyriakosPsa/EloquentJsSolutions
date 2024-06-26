/*We’ve seen that we can use % (the remainder operator) to test whether
a number is even or odd by using % 2 to see whether it’s divisible by two.
Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole number)
and return a Boolean.

Test it on 50 and 75.
See how it behaves on -1. Why?
Can you think of a way to fix this?*/
function isEven(a) {
    if (a < 0) {
        a = -1 * a;
    }
    if (a == 0) {
        return true;
    }
    if (a == 1) {
        return false;
    }
    else {
        a = a - 2;
        return isEven(a);
    }
}
// Test it on 50 and 75
console.log(isEven(50));
console.log(isEven(75));
/* Try to see how to behaves on -1. Well each time we are subtracting -2, so 
we are never reach either 0 or 1 *, we can multiple the number with -1 to do so first*/
console.log(isEven(-1));
console.log(isEven(-50));
console.log(isEven(-75));
