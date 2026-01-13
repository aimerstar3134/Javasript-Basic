// console example
console.log('Hello, World!');

const name = 'Node.js';
console.log(`Welcome to ${name} programming.`);

const count = 5;
console.log('Counting to %d:', count);
for (let i = 1; i <= count; i++) {
    console.log(i);
}

const user = { id: 1, username: 'node_user' };
console.log('User Info: %j', user);

console.error('This is an error message.');
console.warn('This is a warning message.'); 
console.info('This is an informational message.');

console.time('Loop Time');
for (let i = 0; i < 1000000; i++) {}
console.timeEnd('Loop Time');

console.assert(1 + 1 === 2, 'Math is broken!'); 
console.assert(1 + 1 === 3, 'Math is still broken!');

console.trace('Trace log for debugging purposes.');
console.log('End of console demonstration.');
