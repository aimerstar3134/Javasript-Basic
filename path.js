import path from 'node:path';

// Join multiple path segments
const fullPath = path.join('/users', 'john', 'documents', 'file.txt');
console.log('Joined Path:', fullPath);

// Resolve a sequence of paths to an absolute path
const absolutePath = path.resolve('nodejs', 'hello.txt');
console.log('Resolved Absolute Path:', absolutePath);

// get dir name
const dir = path.dirname('/user/nodejs/hello.txt');
console.log('Directory Name:', dir);

// get file name
const filename = path.basename('/user/nodejs/hello.txt');
console.log('File Name:', filename);

// get file extention
const ext = path.extname('/user/nodejs/hello.txt');
console.log('File Extension:', ext);

// parse path into component
const parse = path.parse('/user/nodejs/hello.txt');
console.log('Parsed Path:', parse);

// formatted path
const formatted = path.format({ dir: '/user/nodejs', base: 'hello.txt' });
console.log('Formatted Path:', formatted);

