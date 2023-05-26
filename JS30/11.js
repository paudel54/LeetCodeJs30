// 5-26-2023
// Easy: Sleep Promise:
// Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.

// Create async function that sleeps for given  number of milis and resolves any values

// Approach: 
// using setTimeout fn waits for milis and execute calllback
// can wrap logic in Promise and use async/await to wait for promise to resolve


async function sleep(millis) {
    return new Promise(delayresolve => setTimeout(delayresolve, millis));
}

let t = Date.now();
sleep(2000).then(() => console.log(Date.now()));