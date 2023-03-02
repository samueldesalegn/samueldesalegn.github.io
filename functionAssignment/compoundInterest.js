/**
 Make a defining table and function that will return the balance of a savings account that
compounds interest monthly. Parameters for the function will be:
• initial amount
• annual interest rate
• number of years to compound
Do not look up mathematical formulas for how to compute compound interest. Use a for loop that will
add the appropriate interest each month.
console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));

Input: initialAmount, interestRate, numberOfYears
Output: balanceOfSavingAccount
Steps:

Declare parameterized function 
loop for the number of months
Compute compoundInterest
return balanceOfSavingAccount

 */

export function compoundInterest(initialAmount, interestRate, numberOfYears) {
	let balance = 0;
	let computedInterest = 0;

	for (let month = 1; month <= 12*numberOfYears; month++) {
		computedInterest += (initialAmount + computedInterest)*interestRate/1200;
		
		
	}
	balance = initialAmount + computedInterest;
	return +balance.toFixed(2)
	
	
}



