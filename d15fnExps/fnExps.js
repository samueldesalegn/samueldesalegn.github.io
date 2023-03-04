"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
// module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests

/**
 *@returns {num} double the input
 */
export function double(num){
	return 2*num;
}


/**
 * @returns {num} 100 times the input
 */
 export function times100(num){
	return 100*num;
 }

 
 
 
/**
 * @returns {Array} creates a new array with function mapped to each element
*/
export function myMap(arr, callback){
	let newArr = [];
	arr.forEach((elem) => {
		let res = callback(elem);
		newArr.push(res);
		
	});
	return newArr;
}

/**
* @returns {num} 100 times the input
*/
export const customMap = (number) => number*3;


// console.log(myMap([1, 2, 3, 4], double));






