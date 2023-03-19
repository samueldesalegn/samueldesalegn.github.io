
/**
 * This is a solution for yesterday's assignment.  You need to convert it from a factory function to a constructor function.
 * @returns {Object} bank object with private db
 */
export function MakeBank() {
	
	const transactionsDB = [
			{ customerId: 1, customerTransactions: [10, 50, -40] },
			{ customerId: 2, customerTransactions: [10, 10, -10] },
			{ customerId: 3, customerTransactions: [5, -5, 55] }];

	this.getBalance = function (id) {
			const customer = transactionsDB.find(customer => customer.customerId === id);
			let balance = 0;
			for (const trans of customer.customerTransactions) { balance += trans; }
			return balance;
	};

	/** @returns {number}  returns sum of all balances */
	this.bankBalance = function () { //IMPLEMENT THIS
			let balSum = 0;
			for (const customer of transactionsDB) {
					balSum += this.getBalance(customer.customerId);
			}
			return balSum;
	};
	
}

