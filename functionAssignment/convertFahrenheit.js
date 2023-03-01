/**
 * 
 * @param {*} tempInFahrenheit 
 * @returns 
 * 
 * Write a function, convertFahrenheit, that takes an input parameter with a temperature in Fahrenheit
and returns the temperature in Celsius.
console.log("expect 0: ", convertFahrenheit (32));
console.log("expect -17.7778: ", convertFahrenheit (0));
console.log("expect 100: ", convertFahrenheit (212));
console.log("expect 37.7778: ", convertFahrenheit (100));

Input: tempInFahrenheit
Output: tempInCelsius

steps:
compute temp in celsius
 */

function convertFahrenheit(tempInFahrenheit) {
	const tempInCelsius = 5/9*(tempInFahrenheit - 32);
	return tempInCelsius;

}

console.log(convertFahrenheit(100))