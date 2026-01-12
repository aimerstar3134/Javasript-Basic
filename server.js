const http = require('http');

const server = http.createServer((req, res)=> {
    res.witeHead(200,{ 'Content-Type': 'test/plain' });
    res.end('Hello World\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});