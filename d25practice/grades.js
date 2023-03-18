

export const quiz = {};
quiz.students = [{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
{ sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
{ sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }];
quiz.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }];

/**
 * 
 * @param {Object} ans1 is an answer object
 * @param {Object} ans2 is an answer object 
 * @returns {number} difference of the identifiers
 */
function answerComparator(ans1, ans2) {
//IMPLEMENT THIS
	return ans1.qid - ans2.qid;
}

/**
 * 
 * @param {*} sid student id
 * @returns {number} score for student
 * find this student
 * sort the student answers
 * compare them against key and add up matches
 */
quiz.scoreStudent = function (sid) {

//IMPLEMENT THIS
const student = this.students.find(student => student.sid === sid);
if (!student) return 0;
const score = student.answers.reduce((acc, curr) => {
	const keyA = this.key.find(key => key.qid === curr.qid);
	return (keyA && keyA.ans === curr.ans)? acc + 1: acc;
  }, 0);
return score;
},


/**
 * @returns {number} average score of all students
 * go through list of students and get score of each, then the average
 */
quiz.getAverage = function(){
//IMPLEMENT THIS
const totalScore = this.students.reduce((acc, stud) => {
	return acc + this.scoreStudent(stud.sid);
}, 0);
const averageScore = totalScore / this.students.length;
return +averageScore.toFixed(3);
};



