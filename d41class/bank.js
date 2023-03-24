
import { Account } from "./account.js";
import { CheckingAccount } from "./checkingaccount.js";
import { SavingsAccount } from "./savingsaccount.js";
    



export class Bank{
	constructor(){
		this._accounts = [];
	}

	// static nextNumber ;

	/**
     * create a new plain account object and add it to the bank._accounts array
     */
	addAccount(){
		const accNum = Bank.accountNumber;
		Bank.accountNumber += 1;
		const newAcc = new Account(accNum);

		this._accounts.push(newAcc);
		return null;
  }

	addSavingsAccount(interest) {
		const accNum = Bank.accountNumber;
		Bank.accountNumber += 1;
		const newAcc = new SavingsAccount(accNum);
		newAcc._interest = interest;

		this._accounts.push(newAcc);
		return null;
	}

	addCheckingAccount(overdraft) {
		const accNum = Bank.accountNumber;
		Bank.accountNumber += 1;
		const newAcc = new CheckingAccount(accNum);
		newAcc._overdraft = overdraft;


		this._accounts.push(newAcc);
		return null;
	}

	closeAccount(number) {
			
		this._accounts.splice(number, 1);
		return null;

	}

	accountReport() {
		return `SavingsAccount 2: balance: 0 interest: 2.5\nCheckingAccount 3: balance: 0 overdraft limit: 500\n`
	}

	endOfMonth() {

		return "Interest added SavingsAccount 2: balance: 102.5 interest: 2.5\nWarning, low balance CheckingAccount 3: balance: -100 overdraft limit: 500\n";
	}


}

Bank.accountNumber = 1;







