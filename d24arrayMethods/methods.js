/**
 * 
 * @param {*array of numbers} arr 
 * @param {*greater or equal to a } a 
 * @param {* less than or equal to b} b 
 * @returns {array filter satisfying the param conditions} 
 */
export function filterRange(arr, a, b) {
	return arr.filter(elem =>(elem>=a && elem<=b));
}

/**
 * 
 * @param {*} arr 
 * @param {*} a 
 * @param {*} b 
 */
export function filterRangeInPlace(arr, a, b) {
	for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

/**
 * 
 */
export function Calculator() {
	this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

/**
 * 
 * @param {*} arr 
 * @returns 
 */
export function unique(arr) {
	let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

/**
 * 
 * @param {*} array 
 * @returns 
 */
export function groupById(array) {
	return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}