// let animal = {
// 	eats: true,
// 	walk: function() {
// 	console.log("Animal walk");
// 	}
// 	};
// 	let rabbit = {
// 	jumps: true,
// 	__proto__: animal
// 	};
// 	let longEar = {
// 	earLength: 10,
// 	__proto__: rabbit
// 	};
	
// 	longEar.walk();	

// let animal = {
// 	walk: function() {
// 	if (!this.isSleeping) {
// 	console.log(`I walk`);
// 	}
// 	},
// 	sleep: function() {
// 	this.isSleeping = true;
// 	}
// };
// 	let rabbit = {
// 	name: "White Rabbit",
// 	__proto__: animal
// 	};
// 	// modifies rabbit.isSleeping
// 	rabbit.sleep();
// 	// console.log(rabbit.isSleeping); // true
// 	// console.log(animal.isSleeping);

// Use __proto__ so any property lookup
// will follow the
// path: pockets → bed → table → head. 

// let head = {
// 	glasses: 1
// };
// let table = {
// 	pen: 3,
// 	__proto__: head
// };
// let bed = {
// 	sheet: 1,
// 	pillow: 2,
// 	__proto__: table
// };
// let pockets = {
// 	money: 2000,
// 	__proto__: bed
// };
// console.log("expect 3: ", pockets.pen);
// console.log("expect 1: ", bed.glasses);

// let animal = {
// 	eats: true
// };
// let rabbit = {
// 	jumps: true,
// 	__proto__: animal
// };
// // Object.keys only return own keys
// console.log(Object.keys(rabbit)); // jumps
// // for..in loops over both own and inherited keys
// for(let prop in rabbit) console.log(prop); // jumps, then eats

// let animal = {
// eats: true
// };
// function Rabbit(name) {
// this.name = name;
// }
// Rabbit.prototype = animal;
// let rabbit = new Rabbit("White Rabbit"); //rabbit.__proto__ == animal
// console.log( rabbit.eats ); // true

// let animal = { eats: true };
// function Rabbit(name) { this.name = name;}
// Rabbit.prototype = animal;
// let rabbit = new Rabbit("White Rabbit");
// console.log( rabbit.eats ); // true

// // Alternatively

// let animal = {
// 	eats: true
// };
// let rabbit = {
// 	name: "White Rabbit",
// 	__proto__: animal
// };
// console.log( rabbit.eats ); // true
/**
 * 
 * @param {*} firstname 
 * @param {*} lastname 
 * @param {*} birthDate 
 */
function User(firstname, lastname, birthDate) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.birthDate = birthDate;
}
let user1 = new User('John', 'Smith', new Date('2000-10-01'));
let user2 = new User('Edward', 'Hopkins', new Date('1991-11-14'));
function getFullName() { return this.firstname + ' ' + this.lastname;}
function getAge() {return new Date().getFullYear() - this.birthDate.getFullYear();}
//complete the code so that the above functions reside in a single object and are inherited by all User
//objects that are created using User as a constructor function.
console.log(user1.getFullName()); //John Smith
console.log(user1.getAge()); //21
	
// let user = {
// 	firstname: "John",
// 	lastname: "SMith",
// 	birthDate: new Date('2000-10-01'),
// 	getFullName: function() {
// 		return `${this.firstname} ${this.lastname}`;
// 	},
// 	getAge: function() {
// 		return new Date().getFullYear() - +this.birthDate.getFullYear();
// 	}
// };

// let user1 = {
// __proto__: user
// }
// console.log(user1.getAge());

// let obj = {};
// console.log(obj.__proto__.toString === Object.prototype.toString); // true

// String.prototype.show = function() {console.log(this);};
// "BOOM!".show(); // BOOM!

// let animal = {
//   eats: true
// };
// let rabbit = {
//   jumps: true
// };

// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
// // rabbit.prototype= animal;

// console.log(rabbit.eats);


