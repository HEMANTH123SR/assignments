/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

const wait = require("./1-promisify-setTimeout");



function calculateTime(t1, t2, t3) {
  const startTime = Date.now();
  return Promise.all([wait(t1), wait(t2), wait(t3)]).then(() => {
    const endTime = Date.now();
    return endTime - startTime; 
  });
}

module.exports = calculateTime;
