/*
o	createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library, 
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
o	findTitles, which will find all the book titles in libraryBooks and return them in an alphabetically ordered array.
o	findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.
o	findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];


/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
export function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
export function findTitles() {
    let titles = [];
    // implement this and other functions
    for (let i = 0; i < library.length; i++) {
        titles.push(library[i].title);
    }
    return titles.sort();
}

/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
export function addBook() {
    const titleElement = document.getElementById("title"); //retrieves the book title textbox element
    const title = titleElement.value;
    console.log("title is: ", title);
    //alert("title:  " + title);

    const newID = library.length + 5000;  // hack to get a unique id for now
    //finish the implementation -- get the author, create a book object, and add to the library array
    const bookAuthor = document.getElementById("author");
    const author = bookAuthor.value;
    let bookObj = {title:title, author:author, libraryID:newID};
    library.push(bookObj);
    return bookObj;
}

/**
 * 
 * @returns {Array} find all  authors in libraryBooks and return them in alphabetically ordered array.
 */
export function findAuthors() {
    //implement this
    let authors = [];
    for (let i = 0; i < library.length; i++) {
        authors.push(library[i].author);
    }

    // implement this and other functions
    return authors;


}

/**
 * 
 * @returns {Array} find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/
export function findIDs() {
//implement this
let ids = [];
for (let i = 0; i < library.length; i++) {
    ids.push(library[i].libraryID);
}

// implement this and other functions
return ids.sort();
}


/**
 * @returns {Object} new book object
 * createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library, 
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
 */
export function createBook(title, author, id){
    const newBook = {};
    newBook.title = title;
    newBook.author = author;
    newBook.libraryID = id;
    return newBook;
}

/**
 * 
 * @returns {undefined} 
 */
export function scramble(){
    console.log("implement scramble if you have time ...");

}

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

/**
 * 
 * @param {*} quiz { the function takes two arrays. quiz holding number of students}
 * @param {*} correctAnswers { correct answers array to check with students answers}
 * @returns 
 */
export function gradeQuiz(quiz, correctAnswers) {
	let scores = {};
	for (const member of quiz) {
		let counter = individualScore(studentsAnswers[member].quizAnswers, correctAnswers);
		scores[studentsAnswers[member].studentId] = counter;
	}
    
	return scores;
}

/**
 * 
 * @param { taking two arrays for a helper function} arr1 
 * @param {*} arr2 
 * @returns count of matching items in the two arrays
 */
export function individualScore(arr1, arr2) {
	let counter = 0;
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] === arr2[i]) {
				counter++;
		}
}
return counter;
}


export function avgScore(obj) {
    let sum = 0;
    let size = 0;
    for (let key in obj ) {
        sum += obj[key];
        size++;
    }
    let avg = +(sum/size).toFixed(2);
    return avg;
}
  