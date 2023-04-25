
// Q1 and Q2 
class Person {
	constructor(name) {
		this.name = name;
	}
	greeting() {
		return (`Hi, my name is ${this.name}`);
	}
}

class Professor extends Person {
	constructor(name, office) {
		super(name);
		this.office = office;
	}
	greeting() {
		return (`${super.greeting()}. My office in room ${this.office}`)
	}
}

// const ruby = new Professor("Clyde", "Mcl225");
// const greet = ruby.greeting();
// console.log(greet);

// Q3
function compress(arr) {
	return arr.map(({x, y}) => x + y);
}

let arrObj = [{x: 10, y: 20}, {x: 100, y: 40}, {x: 16, y: 3}];
// console.log(compress(arrObj));

let add = ({x, y}) => x + y;

console.log(myMap(arrObj, add));


// Q4

let ageArray = [25, 15, 44, 10, 7, 8];
const [foo, bat, ...bar] = [...ageArray];
// console.log(bar);//[44, 10, 7, 8]
// console.log(foo);//25
// console.log(bat);//15

//Q5
const myContacts = new AddressBook();
myContacts.add({name: "Bob", phone: "6411234567"});
// function AddressBook() {
// 	this.contacts = [];
// 	this.add = function(newContact) {this.contacts.push(newContact)};
// }

function AddressBook() {
		let contacts = [];
		this.add = (newContact) => contacts.push(newContact);
}

// console.log(myContacts);


// Q6 
function ask(yep, nope, password) {
	if (password === "superstar") yep();
	else nope();	
}

let user = {
	name: "Tina", 
	pass: function() {
		console.log(`Welcome ${this.name}`);
	},
	fail: function() {console.log(`Try again ${this.name}`);}

};

// 6a if we call as follows:
// ask(user.pass, user.fail, "superstar"); //Error => cannot read properties of undefined 

// 6b if we use bind
// ask(user.pass.bind(user), user.fail.bind(user), "superstar"); //Welcome Tina

// 6c if we use wrapper function 
// ask(function() {user.pass(); }, function() {user.fail(); }, "superstar"); // Welcome Tina

// 6d  if we use call
// ask(function() {user.pass.call(user); }, function() {user.fail.call(user); }, "superstar"); // Welcome Tina

// 6d  if we use apply
// ask(function() {user.pass.apply(user); }, function() {user.fail.apply(user); }, "superstar"); // Welcome Tina


// Q7

// Write your own version of the array method, filter.

function myFilter(arr, func) {
	let newArr = [];
	for (const element of arr) {
		if (func(element)) {
			newArr.push(element);
		}
	}
	return newArr;
}

let isEven = num => num%2 === 0;

let arr = [7, 11, 71, 8, 9, 10];

// console.log(myFilter(arr, isEven));

// Q8

function Square(side) {this.side = side;}
Square.prototype = {color: "red"};
const square1 = new Square(1);
Square.prototype = {color: "green"};
const square2 = new Square(10);

// console.log(square1.color);//red
// console.log(square2.color);//green


// Q9 

class Quiz {
	constructor() {
		this.students = [{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
{ sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
{ sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }];
this.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }];
	}
	histogram() {
		let newArr = [];
		for (const student of this.students) {
			newArr.push(student.answers.sort(compare));
		}
		let correctAns = [];
		for (let i = 0; i < this.key.length; i++) {
			correctAns.push({qid: this.key[i].qid, numCorrect:helper(newArr[i], this.key)});	
		}
		return correctAns;
	}
}

function helper(arr1, arr2) {
	let counter = 0;
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i].ans === arr2[i].ans) {
			counter++;
		}	
	}
	return counter;
}


const quiz = new Quiz();
// console.log(quiz.histogram());

function compare(ans1, ans2) {
	return ans1.qid - ans2.qid;
}


// previous exams
// mimic Array.find

function myFind(arr, func) {
	// let elem;
	for (const element of arr) {
		if(func(element)) {
			return element;
		} 
  }
	return -1
}

// // If index is needed?
// function myFind(arr, func) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (func(arr[i])) {
// 			return i;
// 		}
		
// 	}
// 	return -1;
// }

console.log(myFind(arr, isEven));


// Your own map function
// map takes an array and function as argumentfunction 
function myMap(arr, mapFunc) {    
	const mapArr = []; // empty array        
	// loop though array    
	for(let i=0;i<arr.length;i++) {        
		const result = mapFunc(arr[i], i, arr); 
		mapArr.push(result);        
  }    
		return mapArr;
}

let double = num => num*2;
console.log(myMap(arr, double));
// function Incrementer(start) {
// 	this._value = start;
// 	this.increment= function(amt) {
// 		return this._value += amt;
// 	};
// 	this.decrement = function(amt) {
// 		return this._value -= amt;
// 	};
// }

function Incrementer(start) {
	this._value = start;
	this.increment= (amt) => this._value += amt;
	this.decrement = (amt) => this._value -= amt;
	
}

// let inc = new Incrementer(100);
// console.log(inc.increment(10));
// console.log(inc.increment(10));
// console.log(inc.decrement(10));
// console.log(inc.value);


function Sensor(id, name, type, manufacturer, events) {
	this.id = id;
	this.name = name;
	this.type = type;
	this.manufacturer = manufacturer;
	this.events = events;
}

let frontDoor = new Sensor(1, "Front Door Sensor", 34, "climax", [{time: 100, name: "Motion Detected"}, {time: 101, name: "Door opened"}]);
let motionSensor = new Sensor(2, "Motion Sensor", 43, "NYCE", [{time: 100, name: "Motion Detected"}]);
let porticoLight = new Sensor(3, "Portico Light", 54, "Osram", [{time: 100, name: "Door Closed"}]);
let mainEntrance = new Sensor(4, "Main Entrance", 34, "climax", [{time: 100, name: "Door Closed"}]);

let list = [frontDoor, motionSensor, porticoLight, mainEntrance];

// Q1a Write a function to return the list of sensors of given Type
function findSensorsByType(list, kind) {
	return list.filter(element => element.type === kind);
}

// console.log(findSensorsByType(list, 34));

// Q1b Write a function to return an array holding the names of all the manufacturers (do not repeat entries)
function collectManufacturer(list) {
	let newArr = [];
	for (const element of list) {
		if (!newArr.includes(element.manufacturer)) {
			newArr.push(element.manufacturer);
		}
	}
	return newArr;
}

// console.log(collectManufacturer(list));

// Q1c Write a function to return the most recent event of a Sensor specified by its id. 
// The largest timestamp is the most recent

function getLatestEventofSensor(list, id) {
	let newArr;
	let max = 0;
	for (const element of list) {
		if (element.id === id) {
			newArr = element.events;	
		}
	}

	let ansArr;
	for (const element of newArr) {
		if(max < element.time);
		ansArr = element;
	}

	
	return ansArr;
}

console.log(getLatestEventofSensor(list, 1));
// In the code below, we schedule the function and then cancel it (changed our mind). As a result, nothing happens:

// let timerId = setTimeout(() => console.log("never happens"), 1000);
// console.log(timerId); // timer identifier

// clearTimeout(timerId);
// console.log(timerId); // same identifier (doesn't become null after canceling)

// The following example will show the message every 2 seconds. After 5 seconds, the output is stopped:

// // repeat with the interval of 2 seconds
// let timerId = setInterval(() => console.log('tick'), 2000);

// // after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 6100);



// /** instead of:
// let timerId = setInterval(() => alert('tick'), 2000);
// */

// let timerId = setTimeout(function tick() {
//   console.log('tick');
//   timerId = setTimeout(tick, 2000); // (*)
// }, 2000);

// let i = 0;

// setTimeout(() => console.log(i), 100); // ?

// // assume that the time to execute this function is >100ms
// for(let j = 0; j < 100000000; j++) {
//   i++;
// }


// function printNumbers(from, to) {
//   let current = from;

//   setTimeout(function go() {
//     console.log(current);
//     if (current < to) {
//       setTimeout(go, 1000);
//     }
//     current++;
//   }, 1000);
// }

// // usage:
// printNumbers(5, 10);


// 1. write a function, averagePoints, to get an array containing the average points 
// across for each player .
// Try with a regular for..of loop and then using map.
// const player1 = {name: "Bob", points: [1, 2, 1]};
// const player2 = {name: "Andre", points: [2, 0, 1]};
// const player3 = {name: "Max", points: [1, 1, 1]};
// const players = [player1, player2, player3];
// console.log("expect [1.33, 1, 1 ]: ", averagePoints (players));
// console.log("expect [{Bob:1.33, Andre:1, Max:1} ]: ", averagePoints(players));

function averagePoints(players) {
	let newArr = [];
	for (const player of players) {
		newArr.push({[player.name]: average(player.points)});
	}

	return newArr;
	
}

// console.log(averagePoints(players));

function average(arr) {
	let sum = arr.reduce((acc, cur) => acc + cur, 0);
	return +(sum/arr.length).toFixed(2);
}

/* write a function, sumPoints, to get the total points across all players */

// const player1 = {name: "Bob", points: [1, 2, 1]};
// const player2 = {name: "Andre", points: [2, 0, 1]};
// const player3 = {name: "Max", points: [1, 1, 1]};
// const players = [player1, player2, player3];

// console.log("expect 10: ", sumPoints(players));

 

function sumPoints(players) {
	let sum = 0;
	for (const player of players) {
		sum += playerSum(player.points)
	}
	return sum;
}

function playerSum(arr) {
	let sum = arr.reduce((one, two) => one + two, 0);
	return sum;
}


/* write a function findProps to return an array of all the properties in any given object */
// console.log("expect [a, b, c]: ", findProps({a: 1, b: 2, c: 3}));
function findProps(obj) {
	let newArr = [];
	for (const key in obj) {
		newArr.push(key)
			
	}
	return newArr;
}


/* write a function, maxPoints, to find and return the maximum points of any single player.   */

// const player1 = {name: "Bob", points: [1, 2, 1]};
// const player2 = {name: "Andre", points: [2, 0, 1]};
// const player3 = {name: "Max", points: [1, 1, 1]};
// const players = [player1, player2, player3];

// console.log("expect 4:",  maxPoints(players));

 

function maxPoints(players) {
	let max = 0;
	for (const player of players) {
		if (max < playerSum(player.points)) {
			max = playerSum(player.points);
		}
	}
	return max;
}


/*
Assume you have the following data structure for daily donations.
 Write a function, funderTotals, as shown in the examples below.
 Your function should work for an expanded database of donations.
First write JSDoc that constitutes a defining table--i.e., params, returns, steps.
You may write this in VSCode and then paste your answer into Sakai.
This must be your own work, do not share or collaborate with anyone else.
*/
const donation1 = { funderId: 1, amount: 100 };
const donation2 = { funderId: 2, amount: 10 };
const donation3 = { funderId: 3, amount: 1 };
const donation4 = { funderId: 2, amount: 5 };
const donation5 = { funderId: 1, amount: 15 };
const day1 = { donations: [donation1, donation2], date: "01/10/2022",};
const day2 = { donations: [donation3, donation4, donation5], date: "01/11/2022",};

const dailyRecord = [day1, day2];


function funderTotals(dailyRecord, funderId){
	let newArr = [];
	for (const day of dailyRecord) {
		for (const donation of day.donations) {
			if (donation.funderId === funderId) {
				newArr.push({date: day.date, amount: donation.amount});	
			}
		}
	}
	return newArr;


}

// console.log(`expect [{date: "01/10/2022", amount: 100}, {date: "01/11/2022", amount: 15}] : `, funderTotals(dailyRecord, 1) );
// console.log(`expect [{date: "01/10/2022", amount: 1}] : `, funderTotals(dailyRecord, 3) );
// console.log(`expect [{date: "01/10/2022", amount: 10}, {date: "01/11/2022", amount: 5}] : `, funderTotals(dailyRecord, 2) );




// function makeCounter() {
// 	let count = 0;
	
	
	
// 	return function(num) {
	
// 	if(num > 1){ 
// 		console.log("Warning: increment was by value greater than 1: " + num);
// 		return count + num;
// 	} else {
// 		return count++;
// 	}
	
// 	}

// }	
	// const myCounter = makeCounter();	
	// console.log(myCounter(10));




//The following objects record the season statistics for players on a basketball team.
const player1 = {jersey: 8, stats: [ {game : 1, points: 6}, {game : 2, points : 7} ] };
const player2 = {jersey: 12, stats: [ {game : 1, points: 16}, {game : 2, points : 14} ] };
const player3 = {jersey: 6, stats: [ {game : 1, points: 10}, {game : 2, points : 6} ] };
const teamStats = [player1, player2, player3];

//Write a function, findHighScores, that finds the high score in the season for each player as follows:
// console.log("expect [{jersey: 8, high: 7}, {jersey: 12, high: 16}, {jersey: 6, high: 10}]: " , findHighScores(teamStats));


/**
 Be sure to use meaningful variable names and write JSdoc comments for
  findHighScores and any helper functions. You can write this in VS Code
	 and then paste your solution into Sakai.

*

* @param {*} teamStats

*/

function findHighScores(teamStats) {
	let newArr = [];
	for (const player of teamStats) {
		newArr.push({jersey: player.jersey, high: helpers(player.stats)})
	}
	return newArr;
}

function helpers(stats) {
	let max = 0;
	for (const games of stats) {
		if (max < games.points) {
			max = games.points;
		}
	}
	return max;
}


let john = { name: "John", surname: "Smith", age: 10 };
let pete = { name: "Pete", surname: "Hunt", age: 20 };
let people = [ john, pete];

// Use the map function to map the people array to the following:
[{ fullName: "John Smith", age: 10 },
{ fullName: "Pete Hunt", age: 20 },];

// const mapped = people.map(function(person) {
// 	const newPersonObj = {
// 	fullName: person.name + " " + person.surname,
// 	age: person.age
// 	};
// 	return newPersonObj ;
// 	});


// 	console.log(mapped);

let usersMapped = people.map(person=> ({
	fullName: `${person.name} ${person.surname}`,
	age: person.age
	}));

	// console.log(usersMapped);





	class Plant {
		constructor(type) { this.type = type; }
		identification() { return `The type of this plant is ${this.type}.`;}
 }
 
 class Rose extends Plant {
		constructor(type, color) {
				 super(type);
				 this.color = color;
		 }
		 
		 identification() {
				 return ` ${super.identification()} The color of its ${this.type} is ${this.color}. `
		}
 }


 
const redRose = new Rose("flower", "red");
const identity = redRose.identification();
console.log(identity); 