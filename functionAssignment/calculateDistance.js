/**
 * Write a function that takes x and y co-ordinates of two points as inputs and returns the distance
between these two points based on the formula, d = √( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2
console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5));
 */

function  calcDistance(x1, y1, x2, y2) {
	let d = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
	return d;
}

console.log(calcDistance(0, 0, 5, 5));