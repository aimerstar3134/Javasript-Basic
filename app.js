// commonjs module system example
 const math = require('./math');
console.log('This may run while modules are loading');

const result = math.add(5, 3);
console.log(`The sum of 5 and 3 is: ${result}`);

const difference = math.subtract(10, 4);
console.log(`The difference between 10 and 4 is: ${difference}`);

// ES6 module system example
// import { add, subtract } from './math.js';
// console.log('This may run while modules are loading');

// const result = add(5, 3);
// console.log(`The sum of 5 and 3 is: ${result}`);

// const difference = subtract(10, 4);
// console.log(`The difference between 10 and 4 is: ${difference}`);