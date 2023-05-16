// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

function map(arr, fn) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = (fn(arr[i], i));
    }
    return newArray;
}
// Created an array to have it's increment with custom mapping function;
const arr = [2, 3, 4];
const increment = function increment(n) {
    return n + 1;
}
const newArray = map(arr, increment);
console.log(newArray);