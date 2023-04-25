// function sumB(...b) {
// 	let sum = 0;
// 	for (const a of b) sum += a;
// 	return sum;
// }

// console.log(sumB(1, 2, 3, 4, 5));

// function showName() {
//   console.log( arguments.length );
//   console.log( arguments[0] );
//   console.log( arguments[1] );

//   // it's iterable
//   // for(let arg of arguments) alert(arg);
// }

// // shows: 2, Julius, Caesar
// showName("Julius", "Caesar");

// // shows: 1, Ilya, undefined (no second argument)
// showName("Ilya");

// function f() {
//   let showArg = () => console.log(arguments[0]);
//   showArg();
// }

// f(1); // 1
// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];

// console.log( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

// let arr = [3, 5, 1];
// let arr2 = [8, 9, 15];

// let merged = [0, ...arr, 2, ...arr2];

// console.log(merged);


// let arr = [1, 2, 3];

// let arrCopy = [...arr]; // spread the array into a list of parameters
//                         // then put the result into a new array

// // do the arrays have the same contents?
// console.log(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// // are the arrays equal?
// console.log(arr === arrCopy); // false (not same reference)

// // modifying our initial array does not modify the copy:
// arr.push(4);
// console.log(arr); // 1, 2, 3, 4
// console.log(arrCopy); // 1, 2, 3

// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }

// let counter = makeCounter();

// console.log( counter() ); // 0
// console.log( counter() ); // 1
// console.log( counter() ); // 2


// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi(); //Hi, Pete

// function makeWorker() {
//   let name = "Pete";

//   return function() {
//     console.log(name);
//   };
// }

// let name = "John";

// // create a function
// let work = makeWorker();

// // call it
// work(); // what will it show?

// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log( counter() ); // 0
// console.log( counter() ); // 1
// console.log( counter2() ); // 0
// console.log( counter2() ); // 1


// function Counter() {
//   let count = 0;

//   this.up = function() {
//     return ++count;
//   };

//   this.down = function() {
//     return --count;
//   };
// }

// let counter = new Counter();

// console.log( counter.up() ); // 1
// console.log( counter.up() ); // 2
// console.log( counter.down() ); // 1 // if count++ and count--; result is 0, 1, 2
// console.log(counter.down()); //

// function sum(a) {
// 	return function(b) {
// 		return a + b;
// 	};
// }

// console.log(sum(4)(6));

// let x = 1;

// function func() {
//   console.log(x); // ?

//   // let x = 2;
// }

// func(); //Error, cannot access x before initialization

// function ask(yep, nope, password) {
// 	if (password === "superstar") yep();
// 	else nope();
// }

// let user = { name: "Tina",
// pass: function() {console.log(`Welcome ${this.name}`);},
// fail: function() {console.log(`Try again ${this.name}`);}

// };

// ask(user.pass.bind(user), user.fail.bind(user), "superstar");
// ask(function() {user.pass(); }, function() { user.fail(); }, "superstar");

// ask(function() {user.pass.apply(user); }, function() { user.fail.apply(user); }, "superstar");
// ask(function() {user.pass.call(user); }, function() { user.fail.call(user); }, "superstar");


// function myFilter(arr, func) {
// 	let newArr = [];
// 	for (const elem of arr) {
// 		if(func(elem)) {
// 			newArr.push(elem);
// 		}
// 	}
// 	return newArr;
// }

// const arr = [5, 3, 6, 2, 7, -4, 8, 10];
// // let arr = [1, 3, 7];
// const isEven = num => num % 2 === 0;

// console.log(myFilter(arr, isEven));

// // console.log(arr.filter(num => num % 2 === 0));


function myFind(arr, func) {
	let newArr;
	for (const elem of arr) {
		if(func(elem)) {
			newArr = elem;
			break;
		}
	}
	return newArr;
}

const arr = [5, 3, 6, 2, 7, -4, 8, 10];
// let arr = [1, 3, 7];
const isEven = num => num % 2 === 0;

// console.log(myFind(arr, isEven));

// console.log(arr.find(num => num % 2 === 0));


// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],

//   showList() {
//     this.students.forEach(
//       student => console.log(this.title + ': ' + student)
//     );
//   }
// };

// group.showList();//

// // The same would result in error if it is a normal function 

// let group1 = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],

//   showList() {
//     this.students.forEach(
//       function(student) {  console.log(this.title + ': ' + student); }
//     );
//   }
// };

// group1.showList();// Error

// let video = {
// 	title: 'a',
// 	tags: ['a', 'b', 'c'],
// 	showTags() {
// 		// let self = this;
// 		this.tags.forEach(function(tag) {console.log(this.title, tag)}.bind(this));
// 	}
// };
// video.showTags()

// function PlayVideo(title) {
// 	this.title = title;
// 	console.log(this);
// }
// const v = new PlayVideo("no God forbid");

// function defer(f, ms) {
//   return function() {
//     setTimeout(() => f.apply(this, arguments), ms);
//   };
// }

// function sayHi(who) {
//   console.log('Hello, ' + who);
// }

// let sayHiDeferred = defer(sayHi, 2000);
// sayHiDeferred("John"); // Hello, John after 2 seconds

// function defer(f, ms) {
//   return function(...args) {
//     let ctx = this;
//     setTimeout(function() {
//       return f.apply(ctx, args);
//     }, ms);
//   };
// }


// let animal = {
//   name: "Animal",
//   eat() {
//     console.log(`${this.name} eats.`);
//   }
// };

// let rabbit = {
//   __proto__: animal,
//   name: "Rabbit",
//   // eat() {
//   //   // that's how super.eat() could presumably work
//   //   // this.__proto__.eat.call(this); // (*)
//   // }
// };

// rabbit.eat(); // Rabbit eats.


// let animal = {
//   name: "Animal",
//   eat() {         // animal.eat.[[HomeObject]] == animal
//     console.log(`${this.name} eats.`);
//   }
// };

// let rabbit = {
//   __proto__: animal,
//   name: "Rabbit",
//   eat() {         // rabbit.eat.[[HomeObject]] == rabbit
//     super.eat();
//   }
// };

// let longEar = {
//   __proto__: rabbit,
//   name: "Long Ear",
//   eat() {         // longEar.eat.[[HomeObject]] == longEar
//     super.eat();
//   }
// };

// // works correctly
// longEar.eat();  // Long Ear eats.

// class Animal {

//   constructor(name) {
//     this.name = name;
//   }

// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
// console.log(rabbit.name);


// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }


// class ExtendedClock extends Clock {
//   constructor(options) {
//     super(options);
//     let { precision = 1000 } = options;
//     this.precision = precision;
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }
// }

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return 'I have a ' + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ', it is a ' + this.model;
//   }
// }

// let myCar = new Model("Ford", "Mustang");
// console.log(myCar.show());

// export function executor(func, a, b) {
// 	return func(a, b);
// }

// export function add(a, b) {
// 	return a + b;
// }

// export function mul(a, b) {
// 	return a * b;
// }



/* Write a program to compute student grades and the average score for the class.  
Your program should have a quiz object that will contain properties of “students” and “key”.  
The “students” property will be an array of student objects of the following form:

student10 = {sid: 10, answers: [{qid: 2, ans: “b”}, {qid: 3, ans: “a”}, {qid: 1, ans: “b”}] }
It has a property “sid” (student id) and another property “answers”.  The answer property holds an array that 
records the students answers for the quiz.  The array holds objects that have a question id (“qid”) property that 
uniquely identifies the question, and an “ans” property that holds the student’s answer.

The ”key” property of the quiz will hold an array with objects that give the correct answers.  

Create an object named quiz with the following methods
•	getAverage(), computes the average score over all students, 
•	scoreStudent(sid), computes the quiz score for this student

The answer arrays might not have the questions in the same order.  Write a function, answerComparator, that you can use to sort 
the answer arrays by the quiz id, “qid”.   You may assume that there will be answer objects for every question so that once they are 
sorted they arrays will have the student answers and the corresponding key answer in the same position of each array.  Score 1 point 
for each answer that matches the key.
*/

export const quiz = {};
quiz.students = [{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
{ sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
{ sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }];
quiz.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }];

/**
 * 
 * @param {Object} ans1 is an answer object
 * @param {Object} ans2 is an answer object 
 * @returns {number} difference of the identifiers
 */
quiz.answerComparator = function (ans1, ans2) {
    return ans1.qid - ans2.qid;
}

const unsortedArr = [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }];
unsortedArr.sort(quiz.answerComparator);
console.log(unsortedArr);

/**
 * 
 * @param {*} sid student id
 * @returns {number} score for student
 * find this student
 * sort the student answers
 * compare them against key and add up matches
 */
quiz.scoreStudent = function (sid) {
    /* find this student */
    const student = quiz.students.find(stu => stu.sid === sid);

    /*sort the student answers*/
    student.answers.sort(quiz.answerComparator);
		console.log(student.answers);
		

    /* compare them against key and add up matches*/
    const score = scoreAnswers(student.answers, quiz.key);
    return score;
};

console.log(quiz.scoreStudent(10));

/**
 * @returns {number} average score of all students
 * go through list of students and get score of each, then the average
 */
quiz.getAverage = function () {
    let totalScore = 0;
    for (const stu of quiz.students) {
        totalScore += quiz.scoreStudent(stu.sid);
    }
    return totalScore/quiz.students.length;

};

/**
 * 
 * @param {Array} stuAnswers array of student answer objects
 * @param {Array} key array of answer objects
 * @returns {number} count of matching answers
 */
function scoreAnswers(stuAnswers, key) {
    let score = 0;
    for (let i = 0; i < key.length; i++) {
        if (stuAnswers[i].ans === key[i].ans) {
            score += 1;
        }
    }

    return score;
}






