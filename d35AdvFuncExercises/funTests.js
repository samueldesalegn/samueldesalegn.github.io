
/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
export function myMap(arr, func) {
	//IMPLEMENTATION NEEDED
	return arr.map(num => func(num));

	}
	
	/**
	 * 
	 * @param {*} arr 
	 * @param {*} func 
	 * @returns 
	 */
	export function myFilter(arr, func) {
	//IMPLEMENTATION NEEDED
	return arr.filter(num => func(num));
	}
	
	/**
	 * 
	 * @param {*} arr 
	 * @param {*} func 
	 * @param {*} initialValue 
	 * @returns 
	 */
export function myReduce(arr, func, initialValue) {
	//IMPLEMENTATION NEEDED
	return  arr.reduce((accum, sum) =>func(accum, sum), initialValue);
}