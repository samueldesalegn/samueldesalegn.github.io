/*
FUNCTIONS
Functions are the main “building blocks” of the program. 
They allow the code to be called many times without repetition.

FUNCTION DECLARATION
function name(parameter1, parameter2, ... parameterN) {
 // body
}

The function keyword goes first, then goes the name of the function, 
then a list of parameters between the parentheses 
(comma-separated, empty in the example above, we’ll see examples later) 
and finally the code of the function, also named “the function body”, between curly braces.


*/

// function showMessage() {
//   console.log( 'Hello everyone!' );
// }

// showMessage();

/*
Local variables
A variable declared inside a function is only visible inside that function

*/

// function showMessage() {
//   let message = "Hello, I'm JavaScript!"; // local variable

//   console.log( message );
// }

// showMessage(); // Hello, I'm JavaScript!

// console.log( message ); // ReferenceError: message is not defined

/*
OUTER VARIABLES
The outer variable is only used if there’s no local one.

If a same-named variable is declared inside the function then it shadows the outer one. 
The outer one is ignored:

A function can access an outer variable as well, for example:
*/

// let userName = 'John';

// function showMessage() {
//   let message = 'Hello, ' + userName;
//   console.log(message);
// }

// showMessage(); // Hello, John


/* The function has full access to the outer variable. It can modify it as well.

For instance:

*/
// let userName = 'John';

// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable

//   let message = 'Hello, ' + userName;
//   console.log(message);
// }

// console.log( userName ); // John before the function call

// showMessage();

// console.log( userName );

/*

Global variables
Variables declared outside of any function, such as the outer userName in the code above, are called global.

Global variables are visible from any function (unless shadowed by locals).

It’s a good practice to minimize the use of global variables. 
Modern code has few or no globals. Most variables reside in their functions. 
Sometimes though, they can be useful to store project-level data.
*/

