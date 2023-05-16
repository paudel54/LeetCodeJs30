// LeetCode day  5
// Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.
// The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.
// Please solve it without the built-in Array.filter method.

let filter = function (arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result;
};

const test = [0, 10, 20, 30];
let answer = function filter(test, n) {

}
filter(test, answer);