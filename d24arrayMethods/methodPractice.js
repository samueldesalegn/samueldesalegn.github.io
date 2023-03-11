// let users = [
// 	{id: 1, name: "John"},
// 	{id: 2, name: "Pete"},
// 	{id: 3, name: "Mary"}
// 	];
// 	// filter returns array of the first two users
// 	let someUsers = users.filter(item => item.id < 3);
// 	console.log(someUsers.length); // 2

// // find holds/prints the first element (user) that satisfies 
// // the specific conditon (the info of that user) if true and undefined if falsy
// let user = users.find(user => user.name === "Mary");
// console.log(user);

// // findIndex is same with find but this time, it returns the index of that element/user in this case
// let index = users.findIndex(item => item.id ===1);
// console.log(index); //0

// const numbers = [1, 5, 18, 2, 77, 108];
// // ➢ use filter, find, and findIndex to find
// // ➢ all the even numbers
// // ➢ the first even number
// // ➢ the index of the first even number

// let evens = numbers.filter(num => num%2===0);
// console.log(evens); // [18, 2, 108]
// let firstEvenNum = numbers.find(item => item%2===0);
// console.log(firstEvenNum); //18
// let firstEvenIndx = numbers.findIndex(item => item%2===0);
// console.log(firstEvenIndx); //2

// // map
// // ➢ one of the most useful and often used.
// // ➢ calls function for each element and returns new array of results
// // ➢ “map onto” 
// // ➢ mathematical functions "map" a domain to a range 
// // ➢ the passed function maps each array element to a transformed element
// // let result = arr.map(function(item, index, array) {
// // // passed function returns the new value in place of each item
// // });

// let arr = ["Bilbo", "Gandalf", "Nazgul"];
// let lengths = arr.map(item => item + ": " + item.length);
// console.log(lengths); // [ 'Bilbo: 5', 'Gandalf: 7', 'Nazgul: 6' ]

// let lenIndx = ["Bilbo", "Gandalf", "Nazgul"].map((item, index) => index + ": " + item.length);
// console.log(lenIndx);

// sort(fn)
// ➢ default sort order is ascending and converts all arguments to strings
// ➢ sorts the array in place, changing its element order.
// ➢ returns sorted array, but the returned value is usually ignored, as arr itself is modified.
// let arr = [ 2, 1, 15 ];
// // the method reorders the content of arr
// arr.sort();
// console.log( arr ); // [1, 15, 2]



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
// The function is applied to all array elements one after another 
// and “carries on” its result to the next call.
// previousValue – is the result of the previous function call, 
// equals initial the first time (if initial is provided).
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

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // 3,1 (matching values)

// console.log( arr ); // 5,3,8,1 (not modified)

// // let evens = numbers.filter(num => num%2===0);

// function filterRange(arr, a, b) {
// 	return arr.filter(e =>(e>=a && e<=b));
// }



const player1 = {name: "Bob", points: [1, 2, 1]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];


function maxPoints(players) {
	// let total = players.reduce((accum, playerSum(players[curr.points])) => accum + );
	let max = 0;
	for (const player of players) {
		if(max < playerSum(player.points))
		max = playerSum(player.points);
	}

	return max;
}

function playerSum(arr) {
	let sum = arr.reduce((accum, curr) => accum + curr, 0);
	return sum;
}



// console.log("expect 4: ", maxPoints(players));


// let myObj = {
// 	user1: {
//  fname : 'john',
//  lname : 'doe'
// 	},
// 	user2: {
//  fname : 'john',
//  lname : 'doe'
// 	},
// 	equals: function() {
// 	return this.user1 === this.user2;
// 	}
//  }
//  console.log(myObj.equals()); 

// function logEvens(arr) {
// 	let count = 0;
// 	for (const num of arr) {
// 		if (num%2 === 0) {
// 			console.log(num);
// 			count++;
// 		}
// 	}
// 	return count;
// }

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [11, 22, 33, 14, 17, 100];
// let count = logEvens(arr2);
// console.log(count);

/***
 * Write a function named myFilter that can take two arguments (an array and a callback function)
 * 
 */

// function myFilter(arr, cb) {
// 	let newArr = [];
// 	for (const num of arr) {
// 		if (cb(num)) {
// 			newArr.push(num);
// 		}
		
// 	}
// 	return newArr;
// }

// function filtered(num){
// 	return num>10;
// }

// let numA = [5, 11, 33, 1];

// console.log(myFilter(numA, filtered));


// let quiz = {
// 	students: [
// 		{sid: "10", answers: [{qid: 2, ans: "b"}, {qid: 3, ans: "a"}, {qid: 1, ans: "b"}]},
// 		{sid: "11", answers: [{qid: 1, ans: "e"}, {qid: 2, ans: "a"}, {qid: 3, ans: "b"}]},
// 		{sid: "12", answers: [{qid: 3, ans: "b"}, {qid: 2, ans: "a"}, {qid: 1, ans: "d"}]}
// 	],
// 	key: [{qid: 1, ans: "b"}, {qid: 2, ans: "a"}, {qid: 3, ans: "b"}],

// 	answerComparator: function(ans1, ans2) {
// 		return ans1.qid - ans2.qid;
// 	},
// 	scoreStudent: (sid) => {
// 		let student = this.students.find(student => student.sid === sid);
// 		// console.log(student);
// 		if (!student) return 0;
// 		const score = student.answers.reduce((accum, item) => {
// 			const keyA = this.key.find(k => k.qid === item.qid);
			
// 			if(keyA && (keyA.ans === item.ans)) {
// 				return accum+1;
// 			}else {
// 				return accum;
// 			} 
// 		}, 0);
// 		console.log(score);
// 		return score;
// 	}, 
// 	getAverageScore: function() {
//     const totalScore = this.students.reduce((acc, student) => {
//       return acc + this.scoreStudent(student.sid);
//     }, 0);
//     const avgScore = totalScore / this.students.length;
//     return +avgScore.toFixed(3);
//   }
	
// };



// console.log("expect 1: ", quiz.scoreStudent(10));
// console.log("expect 2: ", quiz.scoreStudent(11));
// console.log("expect 2: ", quiz.scoreStudent(12));
// console.log("expect 1.667: ", quiz.getAverageScore());


const quiz = {
  students: [
    { sid: 10, answers: [ { qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" } ] },
    { sid: 11, answers: [ { qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" } ] },
    { sid: 12, answers: [ { qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" } ] }
  ],
  key: [
    { qid: 1, ans: "b" },
    { qid: 2, ans: "a" },
    { qid: 3, ans: "b" }
  ],
  answerComparator: function(ans1, ans2) {
    return ans1.qid - ans2.qid;
  },
  scoreStudent: function(sid) {
    const student = this.students.find(student => student.sid === sid);
    if (!student) return 0;
    const score = student.answers.reduce((acc, curr) => {
      const keyA = this.key.find(key => key.qid === curr.qid);
      if (keyA && keyA.ans === curr.ans) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
    return score;
  },
  getAverageScore: function() {
    const totalScore = this.students.reduce((acc, stud) => {
      return acc + this.scoreStudent(stud.sid);
    }, 0);
    const averageScore = totalScore / this.students.length;
    return +averageScore.toFixed(3);
  }
};

console.log("expect 1: ", quiz.scoreStudent(10));
console.log("expect 2: ", quiz.scoreStudent(11));
console.log("expect 2: ", quiz.scoreStudent(12));
console.log("expect 1.667: ", quiz.getAverageScore());


function vowelCount(str) {
  str = str.toLowerCase();
  let count = {a:0, e:0, i: 0, o: 0, u: 0};
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (const char of str) {
    if (vowels.includes(char)) {
      count[char]++;
    }
  }
  return count;
}

console.log(vowelCount("what a night for us"));