// array initialization 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// push  & pop
arr.push(11);
console.log('After push:', arr);
const poppedElement = arr.pop();
console.log('Popped element:', poppedElement);
console.log('After pop:', arr);

// unshift & shift
arr.unshift(0);
console.log('After unshift:', arr);
const shiftedElement = arr.shift();
console.log('Shifted element:', shiftedElement);
console.log('After shift:', arr);

// slice
const slicedArr = arr.slice(2, 5);
console.log('Sliced array (2-5):', slicedArr);

// splice
arr.splice(3, 2, 99, 100);
console.log('After splice (remove 2 at index 3, add 99 & 100):', arr);

// indexOf & lastIndexOf
const index = arr.indexOf(99);
console.log('Index of 99:', index);
const lastIndex = arr.lastIndexOf(100);
console.log('Last index of 100:', lastIndex);

// includes
const includesFive = arr.includes(5);
console.log('Includes 5:', includesFive);

// find & findIndex
const foundElement = arr.find(num => num > 5);
console.log('First element greater than 5:', foundElement);
const foundIndex = arr.findIndex(num => num > 5);
console.log('Index of first element greater than 5:', foundIndex);

// findLast & findLastIndex
const foundLastElement = arr.slice().reverse().find(num => num < 5);
console.log('Last element less than 5:', foundLastElement);
const foundLastIndex = arr.length - 1 - arr.slice().reverse().findIndex(num => num < 5);
console.log('Index of last element less than 5:', foundLastIndex);

// forEach
console.log('Array elements using forEach:');
arr.forEach(num => console.log(num));

// map
const mappedArr = arr.map(num => num * 2);
console.log('Mapped array (elements * 2):', mappedArr);

// filter
const filteredArr = arr.filter(num => num % 2 === 0);
console.log('Filtered array (even numbers):', filteredArr);

// reduce
const sum = arr.reduce((acc, num) => acc + num, 0);
console.log('Sum of array elements using reduce:', sum);

// every & some
const allPositive = arr.every(num => num > 0);
console.log('All elements are positive:', allPositive);
const someGreaterThanFive = arr.some(num => num > 5);
console.log('Some elements greater than 5:', someGreaterThanFive);

// concat
const newArr = arr.concat([11, 12, 13]);
console.log('Concatenated array:', newArr);

// flat & flatMap
const nestedArr = [1, [2, [3, 4]], 5];
const flatArr = nestedArr.flat(2);
console.log('Flattened array:', flatArr);
const flatMappedArr = arr.flatMap(num => [num, num * 2]);
console.log('FlatMapped array (each element and its double):', flatMappedArr);

// sort
const unsortedArr = [5, 3, 8, 1, 2];
unsortedArr.sort((a, b) => a - b);
console.log('Sorted array (ascending):', unsortedArr);

// reverse
unsortedArr.reverse();
console.log('Reversed array:', unsortedArr);

// join
const joinedStr = arr.join('-');
console.log('Joined array elements with "-":', joinedStr);