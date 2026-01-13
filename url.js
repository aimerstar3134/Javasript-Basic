import url from 'node:url';

// Create a new URL object
const myURL = new url.URL('https://www.sarvadhi.com/');

// Log various components of the URL
console.log('Href:', myURL.href);
console.log('Origin:', myURL.origin);
console.log('Protocol:', myURL.protocol);
console.log('Host:', myURL.host);
console.log('Hostname:', myURL.hostname);
console.log('Port:', myURL.port);
console.log('Pathname:', myURL.pathname);
console.log('Search:', myURL.search);
console.log('Hash:', myURL.hash);