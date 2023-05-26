// Currying fn
// 2632. Curry
// Given a function fn, return a curried version of that function.

// A curried function is a function that accepts fewer or an equal number of parameters as the original function and returns either another curried function or the same value the original function would have returned.

// In practical terms, if you called the original function like
// sum(1,2,3), you would call the curried version like csum(1)(2)(3), csum(1)(2,3), csum(1,2)(3), or csum(1,2,3).
// All these methods of calling the curried function should return the same value as the original.



// Problem Summary:
// We need to create a curried version of a given function that accepts fewer or equal parameters than the original function and returns either another curried function or the same value as the original function.

// Approach:
// Create a function that accepts the original function as its argument.
// Define an inner function that will be returned by the outer function. This inner function will accept the arguments that will be used to call the original function.
// Inside the inner function, check if the number of arguments provided is less than the number of arguments required by the original function.
// If so, return a new curried function that will accept the remaining arguments.
// If the number of arguments provided is equal to or greater than the number required by the original function, call the original function with the provided arguments.
// Return the result of the original function call.

let curry = function (fn) {
    console.log('here comes passed fn', fn);
    return function curried(...args) {
        console.log('checking out args', ...args);
        if (args.length < fn.length) {
            console.log('argument length', args.length);
            console.log('function length', fn.length);
            return function (...args2) {
                console.log('arg2 ', ...args2)
                return curried(...args, ...args2);
            }
        }
        return fn(...args);
    };
};
// function to feed onto 
function sum(a, b) { return a + b; }
const csum = curry(sum);
let result = csum(1)(2)
console.log(result);
