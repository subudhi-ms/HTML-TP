// Array initialization
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr);
console.log("--------------")

// push: Adds one or more elements to the end of an array and returns the new length
arr.push(10)
console.log(arr)

console.log("--------------")
// filter: Creates a new array with all elements that pass the test implemented by the provided function
console.log(arr.filter(ele => ele % 2 === 0))

console.log("--------------")
// map: Creates a new array populated with the results of calling a provided function on every element
console.log(arr.map(ele => ele * 2))

console.log("--------------")
// reduce: Executes a user-supplied callback function on each element, resulting in a single output value
console.log(arr.reduce((a, b) => a + b))

console.log("--------------")
// find: Returns the first element in the provided array that satisfies the provided testing function
console.log(arr.find(ele => ele > 5))

console.log("--------------")
// findIndex: Returns the index of the first element in the array that satisfies the provided testing function
console.log(arr.findIndex(ele => ele == 5))

console.log("--------------")
console.log("=== ADDITIONAL ARRAY METHODS ===")

// pop: Removes the last element from an array and returns it
const poppedElement = arr.pop();
console.log("pop:", poppedElement, arr);

// shift: Removes the first element from an array and returns it
const shiftedElement = arr.shift();
console.log("shift:", shiftedElement, arr);

// unshift: Adds one or more elements to the beginning of an array and returns the new length
const newLength = arr.unshift(0);
console.log("unshift:", newLength, arr);

// concat: Merges two or more arrays and returns a new array
const mergedArr = arr.concat([11, 12, 13]);
console.log("concat:", mergedArr);

// join: Joins all elements of an array into a string separated by a specified separator
const joinedStr = arr.join("-");
console.log("join:", joinedStr);

// slice: Returns a shallow copy of a portion of an array into a new array object from start to end (end not included)
const slicedArr = arr.slice(2, 5);
console.log("slice(2, 5):", slicedArr);

// splice: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
const splicedArr = [...arr];
splicedArr.splice(2, 2, "inserted");
console.log("splice(2, 2, 'inserted'):", splicedArr);

// indexOf: Returns the first index at which a given element can be found in the array, or -1 if it is not present
const index = arr.indexOf(5);
console.log("indexOf(5):", index);

// lastIndexOf: Returns the last index at which a given element can be found in the array, or -1 if it is not present
const lastIndex = arr.lastIndexOf(4);
console.log("lastIndexOf(4):", lastIndex);

// includes: Determines whether an array includes a certain value among its entries, returning true or false
const hasElement = arr.includes(3);
console.log("includes(3):", hasElement);

// every: Tests whether all elements in the array pass the test implemented by the provided function
const allPositive = arr.every(ele => ele >= 0);
console.log("every(>=0):", allPositive);

// some: Tests whether at least one element in the array passes the test implemented by the provided function
const someEven = arr.some(ele => ele % 2 === 0);
console.log("some(even):", someEven);

// sort: Sorts the elements of an array in place and returns the reference to the same array
const sortedArr = [...arr].sort((a, b) => b - a);
console.log("sort (descending):", sortedArr);

// reverse: Reverses an array in place and returns the reference to the same array
const reversedArr = [...arr].reverse();
console.log("reverse:", reversedArr);

// flat: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
const nestedArr = [1, [2, [3, 4]]];
console.log("flat(2):", nestedArr.flat(2));

// flatMap: Maps each element using a mapping function, then flattens the result into a new array
const flatMapped = arr.flatMap(x => [x, x * 10]);
console.log("flatMap:", flatMapped);

// fill: Fills all the elements of an array from a start index to an end index with a static value
const filledArr = new Array(3).fill("x");
console.log("fill('x'):", filledArr);


console.log("--------------")
console.log("=== STRING METHODS ===")


const str = "Hello fullstack web development"
console.log("Original String:", str);

// charAt: Returns the character at the specified index
console.log("charAt(1):", str.charAt(1));

// charCodeAt: Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index
console.log("charCodeAt(1):", str.charCodeAt(1));

// concat: Combines the text of two or more strings and returns a new string
console.log("concat:", str.concat(" - Day 2"));

// includes: Performs a case-sensitive search to determine whether one string may be found within another string
console.log("includes('web'):", str.includes("web"));

// startsWith: Determines whether a string begins with the characters of a specified string
console.log("startsWith('Hello'):", str.startsWith("Hello"));

// endsWith: Determines whether a string ends with the characters of a specified string
console.log("endsWith('development'):", str.endsWith("development"));

// indexOf: Returns the index within the calling String of the first occurrence of the specified value, starting the search at fromIndex
console.log("indexOf('l'):", str.indexOf("l"));

// lastIndexOf: Returns the index within the calling String of the last occurrence of the specified value, searching backwards from fromIndex
console.log("lastIndexOf('l'):", str.lastIndexOf("l"));

// padStart: Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length
console.log("padStart(40, '*'):", str.padStart(40, "*"));

// padEnd: Pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length
console.log("padEnd(40, '*'):", str.padEnd(40, "*"));

// repeat: Returns a new string which contains the specified number of copies of the string on which it was called
console.log("repeat(2) of 'Hi ':", "Hi ".repeat(2));

// replace: Returns a new string with one, some, or all matches of a pattern replaced by a replacement
console.log("replace('web', 'app'):", str.replace("web", "app"));

// replaceAll: Returns a new string with all matches of a pattern replaced by a replacement
console.log("replaceAll('l', 'L'):", str.replaceAll("l", "L"));

// slice: Extracts a section of a string and returns it as a new string, without modifying the original string
console.log("slice(6, 15):", str.slice(6, 15));

// split: Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array
console.log("split(' '):", str.split(" "));

// substring: Returns the part of the string between the start and end indexes, or to the end of the string
console.log("substring(6, 15):", str.substring(6, 15));

// toLowerCase: Returns the calling string value converted to lower case
console.log("toLowerCase():", str.toLowerCase());

// toUpperCase: Returns the calling string value converted to upper case
console.log("toUpperCase():", str.toUpperCase());

// trim: Removes whitespace from both ends of a string and returns a new string, without modifying the original string
console.log("trim():", "   trimmed string   ".trim());

// trimStart: Removes whitespace from the beginning of a string
console.log("trimStart():", "   trimmed string   ".trimStart());

// trimEnd: Removes whitespace from the end of a string
console.log("trimEnd():", "   trimmed string   ".trimEnd());
