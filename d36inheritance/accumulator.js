

/**
 * 
 * @param {number} initialValue is starting value
 * @param {number} increment is amount added each call to accumulate
 * @returns {Accumulator} constructor function
 */
export function Accumulator(initialValue, increment){
	//IMPLEMENT THIS
	this.currentValue = initialValue;
  this.increment = increment;
  this.accumulate = function(){this.currentValue += this.increment;};
  this.report = function(){ return this.currentValue;};




}