// let john = {
//   name: "John",
//   sayHi: function() {
//     console.log(`Hi ${this.name}`);
//   }
// };

// john.sayHi(); 

// let zero = new Number(0);

// if (zero) { // zero is true, because it's an object
//   console.log( "zero is truthy!?!" );
// }

// let num = Number("123");
// console.log(num);

// function ucFirst(str) {
// 	if (!str) return "";
// 	return str.slice(0, 1).toUpperCase() + str.slice(1);
 
// }
// console.log(ucFirst(""));

// let mcs = 1e-6;
// console.log(0xFF);


// Binary and octal numeral systems are rarely used, 
// but also supported using the 0b and 0o prefixes:

// let a = 0b11111111; // binary form of 255
// let b = 0o377; // octal form of 255

// console.log( a == b ); // true, the same number 255 at both sides
// console.log(0xFF == 0o377);

// // toString(base)
// // The method num.toString(base) returns a string representation of num in the numeral system
// //  with the given base.
// let num = 255;

// console.log( num.toString(16) );  // ff
// console.log( num.toString(2) );   // 11111111

// The base can vary from 2 to 36. By default it’s 10.

// Common use cases for this are:

// base=16 is used for hex colors, character encodings etc, digits can be 0..9 or A..F.

// base=2 is mostly for debugging bitwise operations, digits can be 0 or 1.

// base=36 is the maximum, digits can be 0..9 or A..Z. 
// The whole latin alphabet is used to represent a number. 
// A funny, but useful case for 36 is when we need to turn a long numeric identifier 
// into something shorter, for example to make a short url. 
// Can simply represent it in the numeral system with base 36:


// These functions cover all of the possible ways to deal with the decimal part of a number. 
// But what if we’d like to round the number to n-th digit after the decimal?

// For instance, we have 1.2345 and want to round it to 2 digits, getting only 1.23.

// There are two ways to do so:

// Multiply-and-divide.

// For example, to round the number to the 2nd digit after the decimal, 
// we can multiply the number by 100, call the rounding function and then divide it back.

// let num = 1.23456;

// console.log( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23
// // The method toFixed(n) rounds the number to n digits after the point and returns
// //  a string representation of the result.

// let nums = 12.34;
// console.log( nums.toFixed(1) ); // "12.3"
// // This rounds up or down to the nearest value, similar to Math.round:

// // Imprecise calculations

// Internally, a number is represented in 64-bit format IEEE-754, so there are exactly 64 bits to store a number: 
// 52 of them are used to store the digits, 11 of them store the position of the decimal point, and 1 bit is for the sign.

// // If a number is really huge, it may overflow the 64-bit storage and become a special numeric value Infinity:

// console.log( 1e500 ); // Infinity
// // What may be a little less obvious, but happens quite often, is the loss of precision.

// // Consider this (falsy!) equality test:

// console.log( 0.1 + 0.2 == 0.3 ); // false
// // That’s right, if we check whether the sum of 0.1 and 0.2 is 0.3, we get false.

// // Strange! What is it then if not 0.3?

// console.log( 0.1 + 0.2 ); // 0.30000000000000004
// // Ouch! Imagine you’re making an e-shopping site and the visitor puts $0.10 and $0.20 
// // goods into their cart.
// //  The order total will be $0.30000000000000004. That would surprise anyone.

// // But why does this happen?

// A number is stored in memory in its binary form, a sequence of bits – ones and zeroes.
//  But fractions like 0.1, 0.2 that look simple in the decimal numeric system are actually unending fractions in their binary form.

// What is 0.1? It is one divided by ten 1/10, one-tenth. In decimal numeral system such numbers are easily representable. 
// Compare it to one-third: 1/3. It becomes an endless fraction 0.33333(3).

// So, division by powers 10 is guaranteed to work well in the decimal system, but division by 3 is not. 
// For the same reason, in the binary numeral system, the division by powers of 2 is guaranteed to work, but 1/10 becomes an endless binary fraction.

// There’s just no way to store exactly 0.1 or exactly 0.2 using the binary system, just like there is no way to store one-third as a decimal fraction.

// The numeric format IEEE-754 solves this by rounding to the nearest possible number. 
//  These rounding rules normally don’t allow us to see that “tiny precision loss”, but it exists.

// We can see this in action:

// console.log( 0.1.toFixed(20) ); // 0.10000000000000000555
// // And when we sum two numbers, their “precision losses” add up.

// // That’s why 0.1 + 0.2 is not exactly 0.3.

// console.log( 9999999999999999 ); // shows 10000000000000000

export function camelize(str) {
	if (!str) return "";
	let indx = str.indexOf('-');
	let newStr = str.slice(0, indx);
	let camelizePart = str.slice(indx);
	let strArr = camelizePart.split('-'); // let's look for it
	for (const elem of strArr) {
		newStr = newStr + elem.slice(0, + 1).toUpperCase() + elem.slice(1)
	}
	return newStr;
}

console.log(camelize("list-style-image"));