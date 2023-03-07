/* comment out the import assert line when running in the browser */
// import assert from "node:assert/strict"; 

import {findTitles, findAuthors , findIDs, createBook, individualScore, gradeQuiz, avgScore} from "./app.js";  //do this for all of the app.js functions used in the Mocha tests


/*
Write a JavaScript program that will accept title, author, and libraryID values from an HTML page and create new book objects for each entry.  
•	Before creating the webpage first write and test the following JavaScript functions:
o	createBook, which will take title, author, and libraryID as inputs.  It will create and return a new book object 
o	findTitles, which will find all the book titles in libraryBooks and return them in an alphabetically ordered array.
o	findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.
o	findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.

*/

describe("library", function () {

    //This should be used as the "library database" for testing--included in app.js
    // let library = [
    //     { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    //     { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    //     { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
    // ];

    const titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];
    const authors = ["Bill Gates", "Steve Jobs", "Suzanne Collins"];
    const ids = [1254, 3245, 4264];


    it("find titles", function () {
        assert.deepEqual(findTitles(), titles);
    });

    it("find authors", function () {
        assert.deepEqual(findAuthors(), authors);
    });

    it("find ids", function () {
        assert.deepEqual(findIDs(), ids);
    });

    it("create book", function () {
        const newBook = {title: "My New Book", author: "Me Too", libraryID: 1144};
        assert.deepEqual(createBook("My New Book",  "Me Too",  1144), newBook);
    });

});


// Write a function, gradeQuiz, that takes the quiz array and an array of correct answers, e.g., [3,1,2,4] and 
// returns an object that has properties with the names of each studentId and the value of the property 
// will be their score on the quiz (one point for each correct answer)

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
let correctA = [3, 1, 2, 4];
let report = { s101: 3, s102: 2, s103: 3 };
describe("gradeQuiz", function () {
    it("tests gradeQuiz takes two arrays and outputs: { s101: 3, s102: 2, s103: 3 }", function () {
        assert.deepStrictEqual(gradeQuiz(quiz, correctA), { s101: 3, s102: 2, s103: 3 });
    });
});

describe("avgScore", function () {
    it("tests the gradeQuiz report and outputs the average Expect: 2.67", function () {
        assert.strictEqual(avgScore(report), 2.67);
    });
});