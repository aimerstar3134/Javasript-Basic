import http from 'node:http';
import https from 'node:https';

// Create a simple HTTP server
const server = http.createServer((req, res) => {
    console.log(`Received request for: ${req.url} ${req.method}`);

    // Set response headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Node.js HTTP server!\n');
});

// Start the server
server.listen(3000, () => {
    console.log('HTTP Server running at http://localhost:3000/');
});

// Example of making an HTTP GET request
http.get('http://jsonplaceholder.typicode.com/posts/5', (res) => {
    let data = '';

    // A chunk of data has been received.
    res.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received.
    res.on('end', () => {
        console.log('Response from HTTP GET request:', data);
    });
}).on('error', (err) => {
    console.error('Error during HTTP GET request:', err.message);
});