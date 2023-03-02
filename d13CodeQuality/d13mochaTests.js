import assert from "node:assert/strict";
import { isVowel } from "./codesToTest.js";
import { computeSalesCommission } from "../functionAssignment/computeSalesCommission.js";
import { compoundInterest } from "../functionAssignment/compoundInterest.js";
import { calcDownpayment } from "../functionAssignment/costOfHouseDownPayment.js";
import { sumDigits, multDigits } from "../functionAssignment/sumOrProductOfDigits.js";
import { convertFahrenheit } from "../functionAssignment/convertFahrenheit.js";
import { calcDistance } from "../functionAssignment/calculateDistance.js";

// Assignment 1b by importing from another file 

describe("isVowel", function () {
	it("a is vowel", function () {
	assert.equal(isVowel("a"), true);
	});
	it("e is vowel", function () {
	assert.equal(isVowel("e"), true);
	});
	it("i is vowel", function () {
	assert.equal(isVowel("i"), true);
	});
	it("o is vowel", function () {
	assert.equal(isVowel("o"), true);
	});
	it("u is vowel", function () {
	assert.equal(isVowel("u"), true);
	});
	it("z is not vowel", function () {
	assert.equal(isVowel("z"), false);
	});
	it("5 is not vowel", function () {
	assert.equal(isVowel("5"), false);
	});
});

// Testing from another folder and file

describe("test of ComputSalesCommission", function(){
	it("tests salaried and 200 sales", function(){
	assert.strictEqual(computeSalesCommission(true, 200), 0);
	});
	it("tests not salaried and 200 sales", function(){
	assert.strictEqual(computeSalesCommission(false, 200), 0);
	});
	it("tests salaried and 300 sales", function(){
	assert.strictEqual(computeSalesCommission(true, 300), 3);
	});
	it("tests not salaried and 300 sales", function(){
	assert.strictEqual(computeSalesCommission(false, 300), 6);
	});
	it("tests salaried and 3500 sales", function(){
	assert.strictEqual(computeSalesCommission(true, 3500), 65);
	});
	it("tests not salaried and 3500 sales", function(){
	assert.strictEqual(computeSalesCommission(false, 3500), 100);
	});
});

// Testing from another folder and file

describe("test of CompoundInterest", function(){
	it("tests balance in a year with 100 initial amount and 10% interest", function(){
	assert.strictEqual(compoundInterest(100, 10, 1), 110.47);
	});
	it("tests balance in 10 years with $10000 initial amount and 5% interest", function(){
	assert.strictEqual(compoundInterest(10000, 5, 10), 16470.09);
	});
});

// Testing from another folder and file

describe("test of costOfHouseDownPayment", function(){
	it("tests downpayment for 40000 house cost", function(){
	assert.strictEqual(calcDownpayment(40000), 2000);
	});
	it("tests downpayment for 50000 house cost", function(){
	assert.strictEqual(calcDownpayment(50000), 2500);
	});
	it("tests downpayment for 50000 house cost", function(){
	assert.strictEqual(calcDownpayment(100000), 7500);
	});
	it("tests not salaried and 300 sales", function(){
	assert.strictEqual(calcDownpayment(250000), 25000);
	});
});

// Testing from another folder and file

describe("test of sumOfDigits", function(){
	it("tests sum of digits of  1234 is 10", function(){
	assert.strictEqual(sumDigits(1234), 10);
	});
	it("tests sum of digits of  102 is 3", function(){
	assert.strictEqual(sumDigits(102), 3);
	});
	it("tests sum of digit  8 is 8", function(){
	assert.strictEqual(sumDigits(8), 8);
	});
});

// Testing from another folder and file

describe("test of productOfDigits", function(){
	it("tests product of digits of  1234 is 24", function(){
	assert.strictEqual(multDigits(1234), 24);
	});
	it("tests product of digits of 102 is 0", function(){
	assert.strictEqual(multDigits(102), 0);
	});
	it("tests product of digit  8 is 8", function(){
	assert.strictEqual(multDigits(8), 8);
	});
});

// Testing from another folder and file

describe("test of convertFahrenheit", function(){
	it("tests 0 degree Fahrenheit is -17.7778", function(){
	assert.strictEqual(convertFahrenheit (0), -17.7778);
	});
	it("tests 212 degree Fahrenheit is 100", function(){
	assert.strictEqual(convertFahrenheit (212), 100);
	});
	it("tests 100 degree Fahrenheit is 37.7778", function(){
	assert.strictEqual(convertFahrenheit (100), 37.7778);
	});
});

// Testing from another folder and file

describe("test of calcDistance", function(){
	it("tests the distance b/n coordinates (0, 0) and (5, 5)  is 7.07", function(){
	assert.strictEqual(calcDistance(0, 0, 5, 5), 7.07);
	});
});

