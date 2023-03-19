// const abc = {
// 	salute: "",
// 	greet: function() {
// 	this.salute = "Hello";
// 	console.log(this.salute); //Hello
// 	const setFrench = (newSalute) => this.salute = newSalute;

// 	setFrench("Bonjour");
// 	console.log(this.salute); //Bonjour??
// 	}
// 	};
// 	abc.greet(); //Hello Hello ???

// let group = {
// 	title: "Our Group",
// 	students: ["John", "Pete", "Alice"],
// 	showList() {
// 	this.students.forEach((student) => console.log(this.title + ': ' + student)
// 	);
// 	}
// 	};
// 	group.showList();

// function a() {
// 	console.log(this);
// }

// const b = {
// 	dog: 'fido',
// 	log: function() {
// 	console.log(this); }
// }

// console.log(this); //undefined 
// 	a(); //undefined
// 	b.log(); //{dog: 'fido', log: [function: log]}
// 	let mylog = b.log;
// 	mylog();//undefined
	
// let animal = {
// 	eats: true
// };
// let rabbit = {
// 	jumps: true
// };
// rabbit.__proto__ = animal;
// console.log( rabbit.eats ); // true (**)
// console.log( rabbit.jumps ); // true

// let head = {
// 	glasses: 1
// };
// let table = {
// 	pen: 3,
// 	// __proto__:head
// };
// let bed = {
// 	sheet: 1,
// 	pillow: 2,
// 	__proto__:head
// };
// let pockets = {
// 	money: 2000,
// 	__proto__:table

// };
// console.log("expect 3: ", pockets.pen);
// console.log("expect 1: ", bed.glasses);

// let animal = { eats: true };
// // function Rabbit(name) { this.name = name;}
// // Rabbit.prototype = animal;
// // let rabbit = new Rabbit("White Rabbit");
// let rabbit = {
// 	name: "White Rabbit",
// 	__proto__:animal

// }
// console.log( rabbit.eats ); // true
//rewrite this to have the same inheritance hierarchy using __proto__ instead of the

let animal = {
	eats: true,
	walk: function() {
	console.log("Animal walk");
	}
	};
	let rabbit = {
	jumps: true,
	__proto__: animal
	};
	let longEar = {
	earLength: 10,
	__proto__: rabbit
	};
	

	