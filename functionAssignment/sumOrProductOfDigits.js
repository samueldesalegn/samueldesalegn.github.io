

function sumDigits(num) {
	let sum=0;
	while(num!=0) {
			sum = sum + num%10;
			num = Math.floor(num/10);
	}
  return sum;
}
console.log(sumDigits(1234));
console.log(sumDigits(102));
console.log(sumDigits(8));

console.log("======================")

function multDigits(num) {
	let product=1, n = num, digit; 

	while(n) {
			digit= n%10;
			product *= digit;
			n = Math.floor(n/10);
	}
  return product;
}
console.log(multDigits(1234));
console.log(multDigits(102));
console.log(multDigits(8));

