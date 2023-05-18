// Function Compositon.
// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65
// useful to apply serie of transformations to some input data

// Complexity
// Time complexity:
// O(n), where n is the number of functions in the input array.

// Space complexity:
// O(n), because it creates a new function for each function in the input array.

// let compose = function (functions) {
//     return x => functions.reduceRight((acc, f) => f(acc), x)
// }

// const fn = compose([x => x + 1, x => 2 * x])
// let result = fn(4);
// console.log(result);

// time compelixty O(n)
//space complexity 0(n)

// how reduce right works

// const arr = [1, 2, 3, 4, 5];
// const sum = arr.reduceRight((prev, curr) => {
//     console.log('prev is initialized', prev);
//     console.log('Current is initiaized', curr);
//     return prev + curr;
// }
// );

// console.log('the sum is', sum)
// Precise Method

let compose = function (functions) {
    // if function is empty then return the same value that is passsed on 
    if (functions.length === 0) {
        return function (x) { return x; };
    }
    return functions.reduceRight(function (prevFn, nextFn) {
        console.log('Previous fn', prevFn);
        console.log('Nextfn', nextFn);
        return function (x) {
            console.log('value of x', x);
            return nextFn(prevFn(x));
        };
    })
}

const fn = compose([x => x + 1, x => 2 * x])
let result = fn(4);
console.log(result);