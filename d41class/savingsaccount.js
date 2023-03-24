

import { Account } from "./account.js";



/**
 * params {number }
 */
export class SavingsAccount extends Account{
	/**
	 * 
	 * @param {*} number 
	 * @param {*} interest 
	 */
	constructor(number, interest){
		super(number);
		this._interest = interest;
		// super._balance = 0;
	}

	/**
	 * 
	 * @returns {number}
	 */
	getNumber() {
		return this._number;
	}
  /**
	 * 
	 * @param {*} interest 
	 */ 
	setInterest(interest){
		this._interest = interest;
	}
	getInterest() {
		return this._interest;
	}

	addInterest(){
		this._balance += (this._balance * (this._interest/100));
	}

	/**
	 * @returns {string} representation of this account
	 */
	toString() {
		return `SavingsAccount ${this._number}: balance: ${this.getBalance()} interest: ${this._interest}`;
  }

/**
	 * Performs needed actions at the end of the month
	 * 
	 * @returns {undefined}
	 */
endOfMonth() {

	return `Interest added SavingsAccount ${this._number}: balance: 105 interest: ${this._interest}`; // does nothing
}

}


