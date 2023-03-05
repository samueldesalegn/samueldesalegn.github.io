// "use strict";


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
 * @params {num} the parameter takes a number as an input
* @returns {num} 100 times the input
*/
export const customMap = (num) => num*3;









