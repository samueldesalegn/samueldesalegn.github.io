

/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
export function inArray(arr) {
  return function filtered(num) {
      return arr.includes(num);
    
  }


}

/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
export function inBetween(low, high) {
  return function filtered(y) {
    return (y >= low && y <= high);
  }

}

/**
 * 
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
export function byField(fieldName){
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}


/**
 * @returns {Function} closure that returns it's number
 */
export function makeArmy() {
  let shooters = [];
  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() { // shooter function
      return j; // should show its number
    };
  shooters.push(shooter);
  i++;
}

  return shooters;
  }

  let army = makeArmy();
  
  //army[0](); // the shooter number 0 shows 10
  //army[5](); // and number 5 also outputs 10...
