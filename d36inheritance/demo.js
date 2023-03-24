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
	// };
	
	// longEar.walk();	

  // console.log(rabbit.__proto__.eats === animal.eats);

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
// /**
//  * 
//  * @param {*} firstname 
//  * @param {*} lastname 
//  * @param {*} birthDate 
//  */
// function User(firstname, lastname, birthDate) {
// 	this.firstname = firstname;
// 	this.lastname = lastname;
// 	this.birthDate = birthDate;
// }
// let user1 = new User('John', 'Smith', new Date('2000-10-01'));
// let user2 = new User('Edward', 'Hopkins', new Date('1991-11-14'));
// function getFullName() { return this.firstname + ' ' + this.lastname;}
// function getAge() {return new Date().getFullYear() - this.birthDate.getFullYear();}
// //complete the code so that the above functions reside in a single object and are inherited by all User
// //objects that are created using User as a constructor function.
// console.log(user1.getFullName()); //John Smith
// console.log(user1.getAge()); //21
	
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


// let animal = {
//   eats: true
// };

// function Rabbit(name) {
//   this.name = name;
// }

// Rabbit.prototype = animal;

// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

// console.log( rabbit.eats ); // true

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

// Write the code to sum all salaries and store in the variable sum. 
// Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

// /**
//  * 
//  * @param {*} salaries 
//  * @returns sum of the salaries
//  */
// function sumSalary(salaries) {
//   if (!salaries) return 0;

//   let sum = 0;
//   for (let key in salaries) {
//     sum += salaries[key];
//   }
//   return sum;
// }

// console.log(sumSalary(salaries));

// Create a function multiplyNumeric(obj) that 
// multiplies all numeric property values of obj by 2

// function multiplyNumeric(obj) {
//   // let newObj = {};
//   for (let key in obj) { 
//     if (typeof obj[key] === 'number') {
//       obj[key] *= 2;
      
//     }
//   }
//   return obj;
// }

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// console.log(multiplyNumeric(menu));


// let user = { name: "John" };

// let permissions1 = { name: "Jack", canView: true };
// let permissions2 = { canEdit: true };
// let user2 = {name: "Smith"};

// // copies all properties from permissions1 and permissions2 into user
// Object.assign(user, permissions1, permissions2, {name: "Sam"});

// // now user = { name: "John", canView: true, canEdit: true }
// console.log(user.name); // Sam
// console.log(user.canView); // true
// console.log(user.canEdit); // true

// let user = {
//   name: "John",
//   age: 30
// };

// let clone = Object.assign({}, user);

// console.log(user === clone);//false, hence clone

// Nested cloning
// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// console.log( user.sizes.height ); // 182

// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// let clone = Object.assign({}, user);

// console.log( user.sizes === clone.sizes ); // true, same object

// // user and clone share sizes
// user.sizes.width = 60; 
// user.name = "Sam";   // change a property from one place
// console.log(clone.sizes.width); // 60, get the result from the other one
// console.log(clone.name);

// structuredClone
// The call structuredClone(object) clones the object with all nested properties.

// Here’s how we can use it in our example:

// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// let clone = structuredClone(user);

// console.log( user.sizes === clone.sizes ); // false, different objects

// // user and clone are totally unrelated now
// user.sizes.width = 60;    // change a property from one place
// console.log(clone.sizes.width); // 50, not related
// console.log(user.sizes.width);

// let user = {};
// // let's create a circular reference:
// // user.me references the user itself
// user.me = user;

// let clone = structuredClone(user);
// console.log(clone.me === clone); // true
// console.log(user);


// // these objects do the same

// user = {
//   sayHi: function() {
//     alert("Hello");
//   }
// };

// // method shorthand looks better, right?
// let user = {
//   name: "John",
//   sayHi() { // same as "sayHi: function(){...}"
//     console.log(this.name);
//   }
// };
// user.sayHi();

// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   console.log( this.name );
// }

// // use the same function in two objects
// user.sayHi = sayHi;
// // admin.f = sayHi;
// user.sayHi()

// // // these calls have different this
// // // "this" inside the function is the object "before the dot"
// // user.f(); // John  (this == user)
// // admin.f(); // Admin  (this == admin)

// // admin['f']();

// console.log(user);


// Arrow functions have no “this”
// Arrow functions are special: they don’t have their “own” this. 
// If we reference this from such a function, it’s taken from the outer “normal” function.

// For instance, here arrow() uses this from the outer user.sayHi() method:

// let user = {
//   firstName: "Ilya",
//   sayHi() {
//     let arrow = function(){  console.log(this.firstName);};
//     arrow();
//   }
// };

// user.sayHi(); // Ilya

// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     }
//   };
// }

// let user = makeUser();

// console.log( user.ref().name ); // John


// function User() {
//   console.log(new.target);
// }

// // without "new":
// User(); // undefined

// // with "new":
// new User(); // function User { ... }

// That can be used inside the function to know whether it was called with new, 
// “in constructor mode”, or without it, “in regular mode”.

// We can also make both new and regular calls to do the same, like this:

// function User(name) {
//   if (!new.target) { // if you run me without new
//     return new User(name); // ...I will add new for you
//   }
//   this.name = name;

// }

// let john = User("John"); // redirects call to new User
// console.log(john.name); // John

// function User(name) {
//   this.name = name;
//   if (!new.target) { // if you run me without new
//     return new User(name); // ...I will add new for you
//   }

// }

// let john = new User("John"); // redirects call to new User
// console.log(john.name); // John


// function BigUser() {

//   this.name = "John";

//   // return "Godzilla" ;  // <-- returns this object
// }

// let user = new BigUser;
// console.log( user.name );  // Godzilla, got that object


// let obj = {};

// function A() { return obj; }
// function B() { return obj; }

// console.log( new A() === new B() ); // true


// // animal has methods
// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       alert(`I walk`);
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   }
// };

// let rabbit = {
//   name: "White Rabbit",
//   __proto__: animal
// };

// // modifies rabbit.isSleeping
// rabbit.sleep();
// animal.sleep();

// console.log(rabbit.isSleeping); // true
// console.log(animal.isSleeping); 


// function Person(name) {
//   // console.log("Person1 this: ", this); //Person1 this: Person {}
//   this.name = name;
//   // console.log("Person2 this: ", this); //Person this: Person {name: 'Jack'}
// }

// const person = new Person("Jack");

// function Doctor(name, department) {
//   // console.log(this);
//   Person.call(this, name, department);
//   // console.log(this);
//   this.dept = department;
// }
// Doctor.prototype.report = function() {
//   return "medical report";
// };

// function Surgeon(name, department){
//   // console.log(this);
//   Doctor.call(this, name, department);
//   // console.log(this)
// }
// Surgeon.prototype.operate = function() {
//   return "operation performed.";

// };
// Surgeon.prototype.__proto__ = Doctor.prototype;
// let surg1 = new Surgeon("Fred", "Cardiology");
// console.log(surg1.dept);
// console.log(surg1.name);
// console.log(surg1.report());
// console.log(surg1);
// console.log(surg1.__proto__);
// console.log(surg1.prototype);
// console.log(Surgeon.__proto__);
// console.log(Surgeon.prototype.__proto__);
// console.log(Surgeon.prototype);


function Player(name, age) {
  this.age = age;
  this.name = name;
}

Player.prototype.play = function() {
  return this.name + " is playing";

};

let fred = new Player("Fred", 12);
console.log(fred.age === 12);//true
console.log(fred.__proto__.age === 12);//false
console.log(fred.__proto__.name === "Fred");//false
console.log(Player.__proto__.age === 12); //false
console.log(Player.__proto__.name === "Fred");//false
console.log(fred.play() === "Fred is playing"); //true
console.log(Player.prototype.play() === "Fred is playing");//false

let pete = new Player("Pete", 15);
console.log(Player.prototype.name === "Pete");//false
console.log(pete.__proto__ === fred.__proto__);  
console.log(pete.__proto__);
console.log(Player.prototype);
console.log(Player.__proto__);
console.log(Player);
console.log(pete);

// const Person = function() {};

// Person.prototype.initialize = function(name, age){
//     this.name = name;
//     this.age = age;
// };

// Person.prototype.describe = function(){
//     return this.name + ", " + this.age + " years old.";
// };


// console.log(Person.prototype);

// myObj.[[Prototype]] = {name: "grandfather"};

// let animal = { eats: true } ; //using [ ] for curly brackets due to Sakai issue
// function Dog(name) { this.name = name; } //using [ ] for curly brackets due to Sakai issue
// Dog.prototype =  animal;//Blank 1. Fill in the blank, read surrounding text.
 
// let snoopy = new Dog("Snoopy");
// console.log( snoopy.eats ); // true  

// let animal = {
// 	eats: true
// 	};
// 	function Dog(name) {
// 	this.name = name;
// 	}
// 	Dog.prototype = animal;
// 	let snoopy = new Dog("Snoopy");
// 	console.log( snoopy.eats ); // true


// Create square objects using:
// ➢ object literal (with width 5)
// ➢ constructor function
// ➢ class
// ➢ use the skeleton code on the next slide to test

function area() { return this.side * this.side }
const square1 = {
	//IMPLEMENTATION NEEDED
	side: 5,
	// area: area
}
square1.__proto__ = {area: area};
function Square(side) {
	this.side = side
	// this.area = function() {
	// 	return this.side* this.side;
	// }
}  //IMPLEMENTATION NEEDED

Square.prototype = {area: area};

//IMPLEMENTATION NEEDED 
class Square2 { 
	constructor(side) {
		this.side = side;
	}

	area() {
		return this.side * this.side;
	}

}

console.log("expect 25: ", square1.area());
console.log("expect 1: ", Object.getOwnPropertyNames(square1).length);
const constSquare1 = new Square(7);
console.log("expect 49: ", constSquare1.area());
console.log("expect 1: ", Object.getOwnPropertyNames(constSquare1).length);
const classSquare = new Square2(10);
console.log("expect 100: ", classSquare.area());
console.log("expect 1: ", Object.getOwnPropertyNames(classSquare).length);





