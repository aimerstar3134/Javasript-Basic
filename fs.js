import fs from 'node:fs';
import fsPromises from 'node:fs/promises';

// synschronous read
//const dataSync = fs.readFileSync('hello.txt', 'utf8');
//console.log('Synchronous read:', dataSync);

// Asynchronous with callbacks
// fs.readFile('hello.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Asynchronous with promises (modern approach)
try {
  const data = await fsPromises.readFile('hello.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}

// Writing to a file synchronously
//fs.writeFileSync('hello.txt', 'This is some output text.', 'utf8');
//console.log('Synchronous write completed.');

// Check if file exists
try {
  await fsPromises.access('hello.txt');
  console.log('File exists');
} catch {
  console.log('File does not exist');
}

// Get file stats
const stats = await fsPromises.stat('hello.txt');
console.log({
  size: stats.size,
  isFile: stats.isFile(),
  isDirectory: stats.isDirectory(),
  created: stats.birthtime,
  modified: stats.mtime
});

// Watch for file changes
const watcher = fs.watch('hello.txt', (eventType, filename) => {
  console.log(`File ${filename} changed: ${eventType}`);
});