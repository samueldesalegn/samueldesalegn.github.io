
/**
 * 

 * @returns {Accumulator} constructor function
 */
export function Accumulator(initVal, increment){
	//implement this
	this.currentValue = initVal;
  this.increment = increment;
  this.accumulate = function(){this.currentValue += this.increment;};
  this.report = function(){ return this.currentValue;};
	
	}
	
/**
 * @returns {Calculator} this is a constructor function
*/
export function Calculator() {
	//implement this
	this.a = 0;
	this.b = 0;
	this.setValues = function(aVal, bVal){
		this.a = aVal;
		this.b = bVal;
	};
	this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function(){
    return this.a * this.b;
  };
}
