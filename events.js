import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Register an event listener for 'event'
myEmitter.on('event', (message) => {
    console.log('An event occurred:', message);
});

// Emit the 'event' with a message
myEmitter.emit('event', 'Hello, Sarvadhi!');

// Register another event listener for 'data'
myEmitter.on('data', (data) => {
    console.log('Data received:', data);
});

// Emit the 'data' event with some data
myEmitter.emit('data', { id: 1, content: 'This is some sample data.' });

// Demonstrate error handling with events
myEmitter.on('error', (err) => {
    console.error('An error occurred:', err.message);
});

// Emit an 'error' event
myEmitter.emit('error', new Error('Something went wrong!'));

// Multiple listeners
myEmitter.on('multi', () => console.log('Listener 1'));
myEmitter.on('multi', () => console.log('Listener 2'));
myEmitter.emit('multi'); // Both execute

// Once listener
myEmitter.once('onceEvent', () => console.log('This will only run once'));
myEmitter.emit('onceEvent'); // Executes
myEmitter.emit('onceEvent'); // Does not execute

// Remove listener example
const removableListener = () => console.log('This listener will be removed');
myEmitter.on('removeEvent', removableListener);
myEmitter.emit('removeEvent'); // Executes
myEmitter.removeListener('removeEvent', removableListener);
myEmitter.emit('removeEvent'); // Does not execute

// Get the count of listeners for 'multi' event
const listenerCount = myEmitter.listenerCount('multi');
console.log(`Number of listeners for 'multi' event: ${listenerCount}`);