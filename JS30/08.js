// Allow one functoin call
let once = function (fn) {
    let hasBeenCalled = false;
    let result;

    return function (...args) {
        console.log(args);
        if (!hasBeenCalled) {
            result = fn(...args);
            hasBeenCalled = true;
            return result;
        } else {
            return undefined;
        }
    }
};

let fn = (a, b, c) => (a + b + c);
let onceFn = once(fn);

(onceFn(1, 2, 3));
(onceFn(2, 4, 8));