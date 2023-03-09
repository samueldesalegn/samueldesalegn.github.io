
/**
 * 
 * @param {*} str 
 */
export function ucFirst(str) {
	if (!str) return "";
	return str.slice(0, 1).toUpperCase() + str.slice(1);
 
}

/**
 * 
 * @param {*} str 
 */
export  function checkSpam(str) {
	let newStr = str.toLowerCase();
	return (newStr.includes("viagra") || newStr.includes("xxx"));

}

/**
* 
* @param {*} str 
* @param {*} maxlength 
*/
export   function truncate(str, maxlength) {
	return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
}




/**
* 
* @param {Array} arr of numbers
* @returns {number} the total of the maximal subarray

*/
export function getMaxSubSum(arr) {
	let maxSum = 0;
  let subSum = 0;

  for (let num of arr) { 
    subSum += num; 
    maxSum = Math.max(maxSum, subSum); 
    if (subSum < 0) subSum = 0; 
  }

  return maxSum;

}

/**
 * 
 * @param {takes string looks of "-" } str 
 * Looks for '-' and compute for the first occurrence, slices the part up to the index, 
 * then splits the second part into an array
 * loops for array and slices and capitalize the first letters
 * concatenates to the newStr
 * @returns {newStr}
 */
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


export function extractCurrencyValue(str){
	return +str.slice(1);
} 