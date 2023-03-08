//"use strict";
/* eslint-disable */

const manager = {
	name: "John",
	age: 27,
	job: "Software Engineer",
	sayHi: sayHowdy
};
const intern= {
	name: "Ben",
	age: 21,
	job: "Software Engineer Intern",
	sayHi: sayHowdy
};

// // /**
// //  * @returns {undefined} 
// //  */
function sayHowdy() {
	//IMPLEMENT THIS
	console.log(`Hello, my name is ${this.name}. I am ${this.age}. My job is ${this.job}`)
}


manager.sayHi(); // Hello, my name is John. I am 27.  My job is Software Engineer.'
intern.sayHi(); // Hello, my name is Ben.  I am 21.  My job is Software Engineer Intern.'

// // let x = 5;
// // let y = {x};

// // console.log(y)


let library = [
	{ title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
	{ title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
	{ title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];
// console.log(library[2].author);

for (let i = 0; i < library.length; i++) {
	console.log(library[i].title);
}


// for (let i = 0; i < library.length; i++) {
// 	console.log(library[i].title.sort());
// }

function createBook(title, author, id){
	const newBook = {};
	newBook.title = title;
	newBook.author = author;
	newBook.id = id;
	return newBook;
}

console.log(createBook("My New Book",  "Me Too",  1144));