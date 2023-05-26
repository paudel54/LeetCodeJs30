// Memoize REPEAT; 
// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
// Like a number with factorials.
// required concept: Caching. 
// Complexity: Space:O(n) n refers to number of unique inputs.
// time: can range to original function. depending onto it 
// Approches
// 1. define fn calle dmemoize that takes fn as param. 
// 2. create empty obj to cache previous computed result. 
// 3. return an new fn that takes in an any number of args using spread SyntaxError. 
// 4. convert the args type into string.so that can be used as key for cache obj 
// Check if the key already exists in the cache object. If it does, return the cached value.
// If the key doesn't exist in the cache, call the original function fn using apply() to pass the arguments and store the result in the cache object using the key as the property name.
// Finally, return the computed result.
function memoize(fn) {
    // empty obj to cache values. 
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        console.log("converted object arg to string", key)
        if (key in cache) {
            console.log('Checking key in cache', cache)
            return cache[key];
        }

        const result = fn.apply(this, args);
        cache[key] = result;
    }
}

const memoizedSum = memoize(function (a, b) {
    return a + b;
});

// console.log(memoizedSum(2, 3));
// console.log(memoizedSum(2, 3));

// better approcah: 
