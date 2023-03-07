let studentsAnswers = {
	student1: {
		studentId: "s101",
		quizAnswers: [1, 1, 2, 4]
	},
	student2: {
		studentId: "s102",
		quizAnswers: [2, 1, 2, 2]
	},
	student3: {
		studentId: "s103",
		quizAnswers: [3, 1, 3, 4]
	}
	
};

let quiz = ["student1", "student2", "student3"];

// // console.log(studentsAnswers[quiz[0]].quizAnswers);

// // eslint-disable-next-line require-jsdoc
// function gradeQuiz(quiz, correctAnswers) {
// 	let scores = [];
// 	// let newObj = {};
// 	// for (let i = 0; i < quiz.length; i++) {
// 	// 	let counter = individualScore(studentsAnswers[quiz[i]].quizAnswers, correctAnswers);
// 	// 	scores.push(counter);
		
// 	// }
// 	for (const member of quiz) {
// 		let counter = individualScore(studentsAnswers[member].quizAnswers, correctAnswers);
// 		scores.push(counter);
// 	}

	

// 	return scores;
// }


// function individualScore(arr1, arr2) {
// 	let counter = 0;
// 	for (let i = 0; i < arr1.length; i++) {
// 		if (arr1[i] === arr2[i]) {
// 				counter++;
// 		}
// }
// return counter;
// }

// let scores = gradeQuiz(quiz, [3,1,2,4]);
// console.log(scores);

// // write a function, collectAnswers(questionNum) that will go through the
// // array of student quiz answers, “quiz”, and will collect the answers for all of
// // the students for the nth question. For example, collectAnswers(3) will
// // return an array with the answers of all students to question 3: [2, 2, 3] in
// // the above example

// function  collectAnswers(questionNum) {
// 	let arr = [];
// 	// for (let i = 0; i < quiz.length; i++) {
// 	// 	let elem = studentsAnswers[quiz[i]].quizAnswers[questionNum-1]
// 	// 	arr.push(elem);
// 	// }
// 	for (const member of quiz) {
// 		let elem = studentsAnswers[member].quizAnswers[questionNum-1]
// 			arr.push(elem);
// 	}
// 	return arr;
// }

// console.log(collectAnswers(3));
// console.log(studentsAnswers[quiz[0]].quizAnswers[2]);

// // let a = {x:1, y:2};
// // let b = {x:1, y:2}

// // // console.log(a==b);

// const numbers = {
// 	one: 1,
// 	two: 22,
// 	three: 333,
// 	four: 444
// 	};

// 	const properties = ["one", "two", "three", "four"];

// 	for (const elem of properties) {
// 		console.log(numbers[elem]);
// 	}


// let user = {name: "John", age: 30};
// // console.log( user.noSuchProperty === undefined );
// console.log("age" in user);
// user.sayHi = function() {
// 	console.log(this.name);
// };
// user.sayHi(); // John
// console.log(user);



// let obj = {
// 	myProp: undefined
// 	};
// 	console.log( obj.myProp ); // it's undefined, so - no such property?
// 	console.log( "myProp" in obj ); // true, the property does exist!

// let user = {
// 	name: "John"
// 	};
// 	let admin = user;

// 	// user = null;

// 	console.log(user, admin);
// 	admin.name = "Samuel";
	
// 	console.log(user);
// 	console.log(admin);

// function marry(man, woman) {
// 	woman.husband = man;
// 	man.wife = woman;
// 	return {
// 	father: man,
// 	mother: woman
// 	}}
// 	let family = marry({ name: "John"},
// 	{ name: "Ann"});

// 	console.log(family);
	


// let studentsAnswers = {
// 	student1: {
// 		studentId: "s101",
// 		quizAnswers: [1, 1, 2, 4]
// 	},
// 	student2: {
// 		studentId: "s102",
// 		quizAnswers: [2, 1, 2, 2]
// 	},
// 	student3: {
// 		studentId: "s103",
// 		quizAnswers: [3, 1, 3, 4]
// 	}
	
// };

// let quiz = ["student1", "student2", "student3"];


// // function gradeQuiz(quiz, correctAnswers) {
// // 	let scores = {};
// // 	for (const member of quiz) {
// // 		let counter = individualScore(studentsAnswers[member].quizAnswers, correctAnswers);
// // 		scores[studentsAnswers[member].studentId] = counter;
// // 	}
// // 	return scores;
// // }


// // function individualScore(arr1, arr2) {
// // 	let counter = 0;
// // 	for (let i = 0; i < arr1.length; i++) {
// // 		if (arr1[i] === arr2[i]) {
// // 				counter++;
// // 		}
// // }
// // return counter;
// // }

// // let scores = gradeQuiz(quiz, [3,1,2,4]);
// // console.log(scores);


// // let user = {
// // 	name: "Sam"
// // }
// // user = {
// // 	name: "Pete"
// // }

// // console.log(user);

// function gradeQuiz(quiz, correctAnswers) {
// 	let scores = {};
//     let sum = 0;
// 	for (const member of quiz) {
// 		let counter = individualScore(studentsAnswers[member].quizAnswers, correctAnswers);
// 		scores[studentsAnswers[member].studentId] = counter;
// 	}
//     for (let key in scores ) {
//         sum += scores[key];
//     }
//     let avg = +((sum/quiz.length).toFixed(2));
// 		console.log(avg);
// 	return scores;
// }

// /**
//  * 
//  * @param { taking two arrays for a helper function} arr1 
//  * @param {*} arr2 
//  * @returns count of matching items in the two arrays
//  */
// function individualScore(arr1, arr2) {
// 	let counter = 0;
// 	for (let i = 0; i < arr1.length; i++) {
// 		if (arr1[i] === arr2[i]) {
// 				counter++;
// 		}
// }
// return counter;
// }

// let scores = gradeQuiz(quiz, [3,1,2,4]);
// console.log(scores);


function avgScore(obj) {
	let sum = 0;
	let size = 0;
	for (let key in obj ) {
			sum += obj[key];
			size++;
	}
	let avg = +(sum/size).toFixed(2);
	return avg;
}

let report = { s101: 3, s102: 2, s103: 3 };

console.log(avgScore(report));