
 
/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
export function maxOfThree(a, b, c){ 
    let max = 0;
    if (a>=b && a>=c) {
       max = a;
    }else if (b>=a && b >= c) {
        max = b;
    }else if (c >= a && c >= a) {
        max = c;
    }
    return max;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function sum(arr){
    let tot = 0;
    for (const number of arr){
        tot += number;
    }
    return tot;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function multiply(arr){
    let tot = 1;
    for (const number of arr){
        tot *= number;
    }


    return tot;

}


// Write a function findLongestWord() that takes an array of words and returns the length of
// the longest one.

/**
 * 
 * @param {*} arrStrings 
 * @returns 
 */
export function findLongestWord(arrStrings) {
    let len = 0; 
    for (let i= 0; i < arrStrings.length; i++) {
       if (arrStrings[i].length> len) {
        len = +arrStrings[i].length;
       }
    }
    return len;
}


// Arrays have a reverse method that changes the array by inverting the order in which its elements
// appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first,
// reverseArray, takes an array as argument and produces a new array that has the same elements in
// the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it
// modifies the array given as argument by reversing its elements. Neither may use the standard reverse 
/**
 * 
 * @param {*} arr 
 * @returns 
 */
export function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length-1; i >=0; i--) {
        reversedArr.push(arr[i]);  
    }
    return reversedArr;
}

/**
 * 
 * @param {*} arr 
 * @returns 
 */
export function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length/2);  i++) {
        [arr[i], arr[arr.length -1 - i]] = [arr[arr.length -1 - i], arr[i]];
        
    }
    return arr;
}

// Write a function, scoreExams, that takes an array of arrays of student answers and an array of
// the correct answers. It should compare each student’s answers against the correct answers and
// return an array holding the scores of each student. The score for each student is a count of the
// number of correct answers (i.e., matches with the key of correct answers). For example
// const studentAnswers = [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]];
// const correctAnswers = [3, 1, 2,4];
// scoreExams(studentAnswers, correctAnswers)); --> [3,2,3]
/**
 * 
 * @param {*} studentAnswers 
 * @param {*} correctAnswers 
 */
export function scoreExams(studentAnswers, correctAnswers) {
    let scores = [];
    for (const answer of studentAnswers) {
        let counter = 0;
        for (let i = 0; i < answer.length; i++) {
            if (answer[i] === correctAnswers[i]) {
                counter++;
            }
            
        }
        scores.push(counter);   
    }
    return scores;
}

// Write a function that takes two integers as inputs and returns a 2-dimensional array containing
// sequential numbers across each row as follows:
// console.log("expect [ [1, 2, 3], [4, 5, 6], [7, 8, 9]] : ", generateArray(3,3));
// console.log("expect [ [1, 2, 3], [4, 5, 6]]: ", generateArray(2,3));
// console.log("expect [ [1], [2]]: ", generateArray(2, 1));
/**
 * 
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
export function generateArray(num1, num2) {
	let arr = new Array(num1);
	for (let i = 0; i < arr.length; i++) {
		arr[i] = new Array(num2);	
	}

	let counter = 1;
	for (let i = 0; i < num1; i++) {
		for (let j = 0; j < num2; j++) {
			arr[i][j] = counter++; 
		}    
	}
	return arr;
}