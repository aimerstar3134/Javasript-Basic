const str = "Hello, World!";

// Get the length of the string
const length = str.length;
console.log(`Length of the string: ${length}`);

// Convert to uppercase
const upperStr = str.toUpperCase();
console.log(`Uppercase: ${upperStr}`);

// Convert to lowercase
const lowerStr = str.toLowerCase();
console.log(`Lowercase: ${lowerStr}`);

// Check if the string includes 'World'
const includesWorld = str.includes('World');
console.log(`Includes 'World': ${includesWorld}`);

// Replace 'World' with 'Sarvadhi'
const replacedStr = str.replace('World', 'Sarvadhi');
console.log(`Replaced String: ${replacedStr}`);

// Split the string by comma
const splitStr = str.split(', ');
console.log(`Split String:`, splitStr);

// Trim whitespace (though there is none in this example)
const trimmedStr = str.trim();
console.log(`Trimmed String: '${trimmedStr}'`);

// Get a substring
const substring = str.substring(0, 5);
console.log(`Substring (0-5): ${substring}`);

// Check if the string starts with 'Hello'
const startsWithHello = str.startsWith('Hello');
console.log(`Starts with 'Hello': ${startsWithHello}`);

// Check if the string ends with '!'
const endsWithExclamation = str.endsWith('!');
console.log(`Ends with '!': ${endsWithExclamation}`);

// Repeat the string 3 times
const repeatedStr = str.repeat(3);
console.log(`Repeated String: ${repeatedStr}`);

// Find the index of 'World'
const indexOfWorld = str.indexOf('World');
console.log(`Index of 'World': ${indexOfWorld}`);

// Find the last index of 'o'
const lastIndexOfO = str.lastIndexOf('o');
console.log(`Last index of 'o': ${lastIndexOfO}`);

// Convert string to an array of characters
const charArray = Array.from(str);
console.log(`Array of characters:`, charArray);

// Pad the string to a total length of 20 with spaces at the start
const paddedStartStr = str.padStart(20);
console.log(`Padded Start String: '${paddedStartStr}'`);

// Pad the string to a total length of 20 with spaces at the end
const paddedEndStr = str.padEnd(20);
console.log(`Padded End String: '${paddedEndStr}'`);

// Get character at index 7
const charAt7 = str.charAt(7);
console.log(`Character at index 7: ${charAt7}`);

// Get Unicode value of character at index 1
const charCodeAt1 = str.charCodeAt(1);
console.log(`Unicode value at index 1: ${charCodeAt1}`);

// Check if the string is empty
const isEmpty = str === '';
console.log(`Is the string empty: ${isEmpty}`);

// Concatenate with another string
const concatenatedStr = str.concat(' How are you?');
console.log(`Concatenated String: ${concatenatedStr}`);

// Locale compare with another string
const localeCompareResult = str.localeCompare('Hello, Sarvadhi!');
console.log(`Locale compare result with 'Hello, Sarvadhi!': ${localeCompareResult}`);
