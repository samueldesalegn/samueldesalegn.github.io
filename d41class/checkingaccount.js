


import { Account } from "./account.js";




export class CheckingAccount extends Account{
	constructor(number, overdraft) {
		super(number);
		this._overdraft = overdraft
	}

	getNumber() {
		return this._number;
	}

	setOverdraft(amount) {
		this._overdraft = amount;
	}

	getOverdraft() {
		return this._overdraft;
	}

		/**
	 * Method to take money out of the account
	 * 
	 * @param {number} amount money to be taken out of the account
	 * @returns {undefined}
	 * @throws {RangeError} when amount is less than or equal to zero
	 * @throws {Error} when the account has insufficient funds (balance)
	 */
		withdraw(amount) {
			if (amount <= 0) {
					throw new RangeError("Withdraw amount has to be greater than zero");
			}
			if (amount > (this._balance + this._overdraft)) {
					throw Error("Insufficient funds, cannot withdraw beyond overdraft limit");
			}
			this._balance -= amount;
	}

	/**
	 * @returns {string} representation of this account
	 */
	toString() {
		return `CheckingAccount ${this._number}: balance: ${this._balance} overdraft limit: ${this._overdraft}`;
  }

	endOfMonth() {
		return (this._balance < 0)? `Warning, low balance CheckingAccount ${this._number}: balance: ${this._balance} overdraft limit: ${this._overdraft}` : ""; // does nothing
	}


}












