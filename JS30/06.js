// 2626. Array Reduce Transformation
// A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.
// If the length of the array is 0, it should return init.
// Please solve it without using the built-in Array.reduce method.

// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr; }
// init = 0
// Output: 10
// Explanation:
// initially, the value is init=0.
// (0) + nums[0] = 1
// (1) + nums[1] = 3
// (3) + nums[2] = 6
// (6) + nums[3] = 10
// The final answer is 10.

let reduce = function (nums, fn, init) {
    let val = init;
    // same code can be donw with for each methods.
    // nums.forEach(num=>{
    //     val = fn(val,num);
    // });

    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
}
const sumFunction = function (acc, curr) {
    return acc + curr;
}
// created test array
let testArr = [1, 2, 3, 4, 5];
// passing test array and sum funcitions with initla values to reduce fn
let result = reduce(testArr, sumFunction, 0)
console.log(result);