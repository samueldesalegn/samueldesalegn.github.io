export const calculator = {
	a: 0,
	b: 0,
	setValues: function(a, b){
		this.a = a;
		this.b = b;
	},
	sum: function(){return this.a + this.b;},
  mul: function(){return this.a * this.b;}

};  // implement this

// console.log(calculator.sum(2,3));
