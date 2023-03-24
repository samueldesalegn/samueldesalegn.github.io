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

/**
 * 
 * @param {*} name 
 */
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  console.log(this.name);
};
let fluf1= new Rabbit("Fluffy");

 

// Do all of these calls do the same thing? 
// (Draw the object diagram - on scratch paper)

fluf1.sayHi();
Rabbit.prototype.sayHi();
fluf1.__proto__.sayHi();

