// function area() { return this.side * this.side }
// const square1 = {
// 	//IMPLEMENTATION NEEDED
// 	side: 5,
// }
// square1.__proto__ = {area: area};


// function Square(side) {
// 	this.side = side
	
// }  

// Square.prototype = {area: area};

// //IMPLEMENTATION NEEDED 
// class Square2 { 
// 	constructor(side) {
// 		this.side = side;
// 	}

// 	area() {
// 		return this.side * this.side;
// 	}

// }

// console.log("expect 25: ", square1.area());
// console.log("expect 1: ", Object.getOwnPropertyNames(square1).length);
// const constSquare1 = new Square(7);
// console.log("expect 49: ", constSquare1.area());
// console.log("expect 1: ", Object.getOwnPropertyNames(constSquare1).length);
// const classSquare = new Square2(10);
// console.log("expect 100: ", classSquare.area());
// console.log("expect 1: ", Object.getOwnPropertyNames(classSquare).length);

// class User {
// 	constructor(name) { this.name = name; }
// 	sayHi() { console.log(this.name); }
// }
// // proof: User is a function
// console.log(typeof User); // function
// let user = new User("John");
// user.sayHi(); // John

// function area() { return this.side * this.side }
// const square1 = {
// 	side:5
// };
// square1.__proto__ = {area: area};

// function Square(side) {
// 	this.side = side

// }
// Square.prototype = {area: area};
// class Square2 { 
// 	constructor(side) {
// 		this.side = side;
// 	}
// 	area(){
// 		return this.side * this.side;
// 	}
// }
// console.log("expect 25: ", square1.area());
// console.log("expect 1: ", Object.getOwnPropertyNames(square1).length);
// const constSquare1 = new Square(7);
// console.log("expect 49: ", constSquare1.area());
// console.log("expect 1: ", Object.getOwnPropertyNames(constSquare1).length);
// const classSquare = new Square2(10);
// console.log("expect 100: ", classSquare.area());
// console.log("expect 1: ", Object.getOwnPropertyNames(classSquare).length);


// class User {
// 	constructor() {}
// 	}
// 	console.log(User); // class User { ... }

// class User {
// 	constructor(name) {
// 	this.name = name; // calls the setter
// 	}
// 	get name() {
// 	return this._name; //property must match the name used in the setter
// 	}
// 	set name(value) {
// 	if (value.length < 4) {
// 		console.log("Name is too short.");
// 	} else {
// 	this._name = value; //must set a property name different from the setter name (or infinite loop)
// 	}
// 	return undefined;
// 	}
// 	}
// 	let user = new User("John");
// 	console.log(user.name); // calling the getter
// 	user.name = "Fred"; //calling the setter
// 	console.log(user.name);
// 	let user2 = new User("Sam"); // Name too short.

// class User {
// 	constructor(name ) { this.name = name; }
// 	sayHi() { console.log(`Hello, ${this.name}!`)};
// }
// 	// class is a function
// 	console.log(typeof User); // function
// 	// the prototype will have a reference to the constructor function
// 	console.log(User === User.prototype.constructor); // true
// 	// The methods are in User.prototype, e.g:
// 	console.log(User.prototype.sayHi); // [Function: sayHi]
// 	// there are exactly two methods in the prototype in this example
// 	console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

// /** */
// class Animal {
// 	constructor(name) {
// 	this.speed = 0;
// 	this.name = name;
// 	}
// 	run(speed) {
// 	this.speed += speed;
// 	console.log(`${this.name} runs with speed ${this.speed}.`);
// 	}
// 	stop() {
// 	this.speed = 0;
// 	console.log(`${this.name} stands still.`);
// 	}
// }


// class Rabbit extends Animal {
// 		hide() { console.log(`${this.name} hides!`); }
// }

// let rabbit = new Rabbit("White Rabbit");
// rabbit.run(5); // White Rabbit runs with speed 5.
// rabbit.hide(); // White Rabbit hides

// /**
//  * 
//  * @param {*} name 
//  */
// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype.sayHi = function() {
//   console.log(this.name);
// };
// let fluf1= new Rabbit("Fluffy");

 

// // Do all of these calls do the same thing? 
// // (Draw the object diagram - on scratch paper)

// fluf1.sayHi();
// Rabbit.prototype.sayHi();
// fluf1.__proto__.sayHi();

// import assert from "node:assert/strict"; 
// import { executor, add, mul } from "./exam.js";

// describe("executor", function(){
//   it ("tests add", function(){
//   assert.strictEqual(executor(add, 5, 10), 15);
//   });
//   it("tests mul", function(){
//   assert.strictEqual(executor(mul, 5, 10), 50);
//   });
//   });



export const quiz = {};
quiz.students = [{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
{ sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
{ sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }];
quiz.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }];

quiz.ansComparator = function (ans1, ans2) {
  return ans1.qid - ans2.qid;
}

quiz.studentscore = function(sid) {
  // let studAns = [];
  const student = quiz.students.find(stu => stu.sid === sid);
  // console.log(student.answers);
  student.answers.sort(quiz.ansComparator);
     
  const score = helper(student.answers, quiz.key);
  return score;
    
  
  // return studAns;
}

// console.log(quiz.studentscore(10));

// function helper(answers, key) {
//   let score = 0;
//   for (let i = 0; i < answers.length; i++) {
//     if (answers[i].ans === key[i].ans) {
//       score++;
//     } 
//   }
//   return score;
// }


let sayHi = (phrase, who) => console.log(phrase + ', ' + who);


setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John


// setTimeout(() => console.log('Hello'), 1000);
