// function outer() {
// 	let b = 10;
// 	function inner() {
// 				let a = 20; 
// 				console.log(a+b);
// 	}
// 	return inner;
// }

// let x = outer();
// let y = outer();
// x();//30
// y();//30

// Write a function, smash, that uses map and destructuring in parameters of the callback function. 
// Remember that you need () around destructuring brackets for an object if you do not have let or const.  
// smash input is an array of objects with x and y properties. 
//  It returns an array that has the x and y values added together.

const bar = [{x:1, y:2}, {x:10, y:4}, {x:4, y:2}]
console.log("expect [3, 14, 6]:", smash(bar));

function smash(arr) {
	return arr.map(({x, y}) => x + y);
}

