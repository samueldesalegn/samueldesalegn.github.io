// let users = [
// 	{id: 1, name: "John"},
// 	{id: 2, name: "Pete"},
// 	{id: 3, name: "Mary"}
// 	];
// 	// returns array of the first two users
// 	let someUsers = users.filter(item => item.id < 3);
// 	console.log(someUsers.length); // 2

// 	let index = users.findIndex(item => item.id ===1);
// 	console.log(index);

const numbers = [1, 5, 18, 2, 77, 108];
// ➢ use filter, find, and findIndex to find
// ➢ all the even numbers
// ➢ the first even number
// ➢ the index of the first even number

let evens = numbers.filter(num => num%2===0);
// console.log(evens);
// let firstEvenNum = numbers.find(item => item%2===0);
// console.log(firstEvenNum);
// let firstEvenIndx = numbers.findIndex(item => item%2===0);
// console.log(firstEvenIndx);

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item + ": " + item.length);
// console.log(lengths); // [5,7,6]

// let lenIndx = ["Bilbo", "Gandalf", "Nazgul"].map((item, index) => index + ": " + item.length);
// console.log(lenIndx);

// To use our own sorting order, we need to supply a (comparator) function as the argument of arr.sort().

// Ascending order
// function compareNumeric(a, b) {
// if (a > b) return 1; //a comes after b if 1
// if (a == b) return 0;
// if (a < b) return -1; //a comes before b if -1
// }
// let arr = [ 2, 1, 15 ];
// arr.sort(compareNumeric);
// console.log(arr); // [1, 2, 15]


// // Descending order
// function compareNumeric(a, b) {
// 	if (a < b) return 1; //a comes after b if 1
// 	if (a == b) return 0;
// 	if (a > b) return -1; //a comes before b if -1
// 	}
// 	let arr = [ 2, 1, 15 ];
// 	arr.sort(compareNumeric);
// 	console.log(arr); // [1, 2, 15]

// 	arr.sort((a,b) => a-b);
// 	console.log(arr);


// reduce

// calculate a single value based on the array.
// let value = arr.reduce(function(previousValue, item, index, array) {
// // ...
// }, [initial]);
// The function is applied to all array elements one after another and “carries on” its result to the next call.
// previousValue – is the result of the previous function call, equals initial the first time (if initial is provided).
// item – is the current array item.
// index – is its position.
// array – is the array.
// ➢ first argument is the “accumulator” that stores the combined result of all previous execution.
// ➢ at the end it becomes the result of reduce.
// ➢ CS305 convention: always include an initial value for clarity

// // Example: sum of array values
// let arr = [1, 2, 3, 4, 5];
// let res = arr.reduce((sum, current) => sum + current, 0);
// console.log(res);

// // Product of array values
// let prod = arr.reduce((prod, current) => prod * current, 1);
// console.log(prod);

// // max of an array
// let max = arr.reduce((max, current) => max>current? max: current, 0);
// console.log(max);


// ‘for of’ vs ‘for in’ –ES6
// ➢ Both for..of and for..in statements iterate over arrays;
// ➢ for..in returns keys and works on objects as well as arrays
// ➢ especially useful with “associative array” objects
// ➢ easy to mistakenly use – check if get weird results
// ➢ for..of returns values of arrays but does not work with object properties
// let letters = ['x', 'y', 'z'];
// for (let i in letters) {
// console.log(letters[i]); } // "0", "1", "2", 


// const things = {
// 	'a': 97,
// 	'b': 98,
// 	'c': 99
// 	};
// 	for (const key in things) {
// 	console.log(key + ', ' + things[key]);
// 	}

// function camelize(str) {
//   return str
//     .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
//     .map(
//       // capitalizes first letters of all array items except the first one
//       // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
//       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
// }

// console.log(camelize("-webkit-transition")); //== 'WebkitTransition';
// console.log(camelize("background-color"));// == 'backgroundColor';
// console.log(camelize("list-style-image"));// == 'listStyleImage';

// let splt = "-webkit-transition".split('-');
// console.log(splt);


// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher 
// or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (matching values)

console.log( arr ); // 5,3,8,1 (not modified)

// let evens = numbers.filter(num => num%2===0);

function filterRange(arr, a, b) {
	return arr.filter(e =>(e>=a && e<=b));
}