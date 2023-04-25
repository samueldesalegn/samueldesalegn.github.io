
// const quiz = {};
// quiz.students = [{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
// { sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
// { sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }];
// quiz.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }];

// /**
//  * 
//  * @param {Object} ans1 is an answer object
//  * @param {Object} ans2 is an answer object 
//  * @returns {number} difference of the identifiers
//  */
// quiz.ansComparator = function (ans1, ans2) {
//     return ans1.qid - ans2.qid;
// }

// const arrobj = [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }];
// arrobj.sort(quiz.ansComparator);


// /**
//  * 

//  * @returns {number} score for student
//  * find this student
//  * sort the student answers
//  * compare them against key and add up matches
//  */
// quiz.histogram = function () {
//   /* loop over the answers array for each student */
// 	let ansArr = [];
// 	for (const student of quiz.students) {
//     // sort the answers array
// 		student.answers.sort(quiz.ansComparator);
// 		// console.log(student.answers);
// 		ansArr.push(student.answers);
			
// 	}

// 	let correctAns = [];
// 	for (let i = 0; i < ansArr.length; i++) {
			
// 		correctAns.push({qid: quiz.key[i].qid, ans:correctAnswers(ansArr[i], quiz.key)});
			
// 	}
//     return correctAns;
// };

// console.log(quiz.histogram());

// /**
//  * 
//  * @param {Array} ansArr array of student answer objects
//  * @param {Array} keyObj array of answer objects
//  * @returns {number} count of matching answers
//  */
// function correctAnswers(ansArr, keyObj) {
// 	let counter = 0;
// 	for (let i = 0; i < keyObj.length; i++) {
//       if (keyObj[i].ans === ansArr[i].ans) {
//         counter++;
//       }
			
//     }

//     return counter;
// }


class Quiz {
	constructor() {
		this.students = [{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
{ sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
{ sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }];
this.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }];
	}
	correctSid() {
		let newArr = [];
		for (let i = 0; i < this.key.length; i++) {
					newArr.push({ qid: this.key[i].qid, correctIds:helper(this.students[i], this.key)});
	}
	
	return newArr;
}

}


function helper(studentObj, key) {
	let newArr = [];
	
	for (let i = 0; i < key.length; i++) {
		studentObj.answers.sort(compare);
		if (studentObj.answers[i].ans === key[i].ans) {
			newArr.push(studentObj.sid);		
		}	
	}
	
	return newArr;
}



function compare(ans1, ans2) {
	return ans1.qid - ans2.qid;
}


let quiz = new Quiz();
console.log(quiz.correctSid());

