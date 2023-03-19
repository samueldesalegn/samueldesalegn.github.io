/* comment out the import assert line when running in the browser */
// import assert from "node:assert/strict"; 

import { MakeBank } from "./bank.js";

/* Modify your bank solution from yesterday to be a constructor function instead of an object factory.  */

describe("bank tests", function () {

  const bank = new MakeBank();
    it("bankBalance", function () {
        assert.strictEqual(bank.bankBalance(), 85);
    });

    it("transactionsDB is private", function () {
        assert.strictEqual(bank.transactionsDB in bank, false);
    });
});


