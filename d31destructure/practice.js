// DESTRUCTURING ASSIGNMENTS
// AND JSON

// Destructuring assignment is a new (ES6) and now widely used convenience
// syntax that allows us to “unpack” arrays or objects into a set of variables.
// Science of Consciousness: This feature allows developers to more quickly
// accomplish common coding tasks. Do less and accomplish more.

// Destructuring assignment

// let arr = ["Ilya", "Kantor"];
// let [firstName, surname] = arr;

// ➢It works great when combined with split or other array-returning methods:
// let [firstName, surname] = "Ilya Kantor".split(' ');
// //Does not change the array.
// console.log(firstName, surname);



// Convenience syntax for multiple assignments

// ➢‘Syntactic sugar’ to replace the following:
// let firstName = arr[0];
// let surname = arr[1];
// ➢ Does not change the array.


// Destructuring assignment 2

// // Unwanted elements of the array can also be thrown away via an extra comma:
// // second element is not needed
// let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log( title ); // Consul
// // can use any “assignables” at the left side.
// let user = {};
// [user.name, user.surname] = "Ilya Kantor".split(' ');
// console.log(user.name); // Ilya

// Destructuring assignment -- …rest
// ➢The rest ‘…’
// ➢ can add one more parameter that gets “the rest” using three dots "...":
// ➢value of rest is array of remaining elements.
// ➢can use any other variable name in place of rest
// ➢ three dots before it
// ➢ last in the destructuring assignment.
// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log(name1); // Julius
// console.log(name2); // Caesar
// // Note that type of `rest` is Array.
// console.log(rest[0]); // Consul
// console.log(rest[1]); // of the Roman Republic
// console.log(rest.length); // 2

// // Destructuring assignment -- missing and default values
// ➢Default values
// ➢If different number of values in array than variables in assignment, there will be no error.
// ➢Absent values are considered undefined:
// ➢Extra values are ignored
// let [firstName, surname] = [];
// console.log(firstName); // undefined
// console.log(surname); // undefined

// Exercise
// const team = [ "Bob", "Fred", "Jim“]
// // destructure the team array onto variables with the same names as the elements, but all lower case
// console.log("expect Bob", bob );
// console.log("expect Jim", jim);
// solution

// const [bob, fred, jim] = team;

// console.log(bob);

// Object destructuring

// ➢destructuring assignment also works with objects
// let options = {
// title: "Menu",
// width: 100,
// height: 200
// };
// let {title, width, height} = options;
// ➢Properties are assigned to the corresponding variables.
// ➢order does not matter
// let {height, width, title} = { title: "Menu", height: 200, width: 100 };
// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200

// Destructure property to another name
// ➢to assign a property to a variable with another name, set it using a colon
// const options = {
// title: "Menu",
// width: 100,
// height: 200
// };
// // { sourceProperty: targetVariable }
// const {width: w, height: h, title} = options;
// // width -> w
// // height -> h
// // title -> title
// console.log(title); // Menu
// console.log(w); // 100
// console.log(h); // 200

// // wrap destructuring expression in parentheses (---)

// // ➢existing variables without let. there’s a catch.
// let title, width, height;
// // error in this line
// // let {title, width, height} = {title: "Menu", width: 200, height: 100};
// // ➢JavaScript assumes a code block instead of destructuring
// // ➢To show it’s not a code block, wrap the expression in parentheses (---):
// // okay now
// ({title, width, height} = {title: "Menu", width: 200, height: 100});

// Object destructuring – default values and parameters

// ➢For potentially missing properties can set default values using "="
// let options = {
// title: "Menu"
// };
// let {width = 100, height = 200, title} = options;
// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200
// // ➢ can pass parameters as an object, and the function destructures them into parameters:
// let options = {
// title: "My menu",
// items: ["Item1", "Item2"]
// };
// function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
// // title, items – taken from options,
// // width, height – defaults used
// console.log( `${title} ${width} ${height}` ); // My Menu 200 100
// console.log( items ); // Item1, Item2
// }
// showMenu(options);

// // Exercise
// to assign a property to a variable with another name, set it using a colon
// const options = {
// title: "Menu",
// width: 100,
// height: 200
// };
// // { sourceProperty: targetVariable }
// const {width: w, height: h, title} = options;
// // width -> w
// // height -> h
// // title -> title
// console.log(title); // Menu
// console.log(w); // 100
// // console.log(h); // 200
// const team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" };
// // // 1. destructure the team object onto variables with the same names as the properties
// // // console.log("expect Big Sleep", center);
// // // console.log("expect Jim", power);

// // // solution
// // The second one is not done yet
// let {point, shooting, power, small, center } = team;
// let {point: one, shooting:two, power: three, small: four, center: five} = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" };;

// // 2. destructure the team onto variables: one (point guard), two (shooting guard), three (small
// // forward), four (power forward) and five (center)

// let {one, two, three, four, five} = {point:"guard", shooting:"guard", small: "forward", power: "foward", center};
// console.log(center);
// console.log(power);
// console.log(one);

// let user = {
//   name: "John",
//   age: 30
// };

// // loop over keys-and-values
// for (let [key, value] of Object.entries(user)) {
//   console.log(`${key}:${value}`); // name:John, then age:30
// }

// let user = new Map();
// user.set("name", "John");
// user.set("age", "30");

// // Map iterates as [key, value] pairs, very convenient for destructuring
// for (let [key, value] of user) {
//   console.log(`${key}:${value}`); // name:John, then age:30

// }

// console.log(user);

// // NESTED DESTRUCTURING

// // If an object or an array contain other nested objects and arrays, we can use more complex left-side patterns to extract deeper portions.

// // In the code below options has another object in the property size and an array in the property items. The pattern on the left side of the assignment has the same structure to extract values from them:

// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };

// // destructuring assignment split in multiple lines for clarity
// let {
//   size: { // put size here
//     width,
//     height
//   },
//   items: [item1, item2], // assign items here
//   title = "Menu" // not present in the object (default value is used)
// } = options;

// console.log(title);  // Menu
// console.log(width);  // 100
// console.log(height); // 200
// console.log(item1);  // Cake
// console.log(item2);  // Donut


// Finally, we have width, height, item1, item2 and title from the default value.

// Note that there are no variables for size and items, as we take their content instead.

// Smart function parameters
// There are times when a function has many parameters, most of which are optional. 
// That’s especially true for user interfaces. Imagine a function that creates a menu. 
// It may have a width, a height, a title, items list and so on.

// Here’s a bad way to write such function:

// function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
//   // ...
// }
// In real-life, the problem is how to remember the order of arguments. 
// Usually IDEs try to help us, especially if the code is well-documented, 
// but still… Another problem is how to call a function when most parameters are ok by default.

// Like this?

// // undefined where default values are fine
// showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])
// That’s ugly. And becomes unreadable when we deal with more parameters.

// Destructuring comes to the rescue!

// We can pass parameters as an object, and the function immediately destructurizes them into variables:

// // we pass object to function
// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };

// // ...and it immediately expands it to variables
// function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//   // title, items – taken from options,
//   // width, height – defaults used
//   console.log( `${title} ${width} ${height}` ); // My Menu 200 100
//   console.log( items ); // Item1, Item2
// }

// showMenu(options);
// We can also use more complex destructuring with nested objects and colon mappings:

// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };

// function showMenu({
//   title = "Untitled",
//   width: w = 100,  // width goes to w
//   height: h = 200, // height goes to h
//   items: [item1, item2] // items first element goes to item1, second to item2
// }) {
//   alert( `${title} ${w} ${h}` ); // My Menu 100 200
//   alert( item1 ); // Item1
//   alert( item2 ); // Item2
// }

// showMenu(options);
// The full syntax is the same as for a destructuring assignment:

// function({
//   incomingProperty: varName = defaultValue
//   ...
// })
// Then, for an object of parameters, there will be a variable varName for property incomingProperty, with defaultValue by default.

// Please note that such destructuring assumes that showMenu() does have an argument. If we want all values by default, then we should specify an empty object:

// showMenu({}); // ok, all values are default

// showMenu(); // this would give an error
// We can fix this by making {} the default value for the whole object of parameters:

// function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
//   alert( `${title} ${width} ${height}` );
// }

// showMenu(); // Menu 100 200
// In the code above, the whole arguments object is {} by default, so there’s always something to destructurize.

// Summary
// Destructuring assignment allows for instantly mapping an object or array onto many variables.

// The full object syntax:

// let {prop : varName = default, ...rest} = object
// This means that property prop should go into the variable varName and, if no such property exists, then the default value should be used.

// Object properties that have no mapping are copied to the rest object.

// The full array syntax:

// let [item1 = default, item2, ...rest] = array
// The first item goes to item1; the second goes into item2, all the rest makes the array rest.

// It’s possible to extract data from nested arrays/objects, for that the left side must have the same structure as the right one.

// Tasks
// Destructuring assignment
// importance: 5
// We have an object:

// let user = {
//   name: "John",
//   years: 30
// };
// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false, if no such property)

// importance: 5
// We have an object:

// let user = {
//   name: "John",
//   years: 30
// };
// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false, if no such property)
// Here’s an example of the values after your assignment:

// let user = { name: "John", years: 30 };

// // your code to the left side:
// let {name, years: age, isAdmin = "false"} = user;

// console.log( name ); // John
// console.log( age ); // 30
// console.log( isAdmin ); // false

// The maxmal Salary
//importance: 5
// There is a salaries object:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// let {John, Pete, Mary} = salaries;

// function topSalary(salaries) {
// 	let topSalary = 0;
// 	let maxName = "";
// 	for (let [key, value] of Object.entries(salaries)) {
// 		if (topSalary <= value) {
// 			topSalary = value;
// 			maxName = key;
// 		}
// 	}
// 	return maxName;
	
// }

// console.log(topSalary(salaries));


// Create the function topSalary(salaries) that returns the name of the top-paid person.

// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.



// Main Point Preview: JSON
// JSON is a widely used data exchange format used in every modern
// programming language. It is based on JavaScript object representations. The
// main uses are to convert JavaScript objects to strings for transmission over a
// network and to parse JSON strings sent from servers into JavaScript objects.
// Science of Consciousness: JSON is a mechanism for improving communication
// between remote entities—clients and servers. Coherent and orderly
// consciousness is a mechanism for improving communication between people.

// Convert object to string
// ➢Often must convert objects into strings
// ➢ send it over a network,
// ➢ output it for logging purposes.
// let user = {
// name: "John",
// age: 30,
// toString: function() {
// return `{name: "${this.name}", age: ${this.age}}`;
// }
// };
// console.log(user.toString()); // {name: "John", age: 30}

// JSON.stringify
// ➢ JSON (JavaScript Object Notation) is a general format to represent values and objects.
// ➢ RFC 4627 standard.
// ➢ Initially for JavaScript, but many other languages have libraries to handle it as well.
// ➢ data exchange when client uses JavaScript and the server uses Ruby/PHP/Java/Whatever.
// JSON.stringify to convert objects into JSON.
// JSON.parse to convert JSON back into an object
// let student = {
// name: 'John',
// age: 30,
// isAdmin: false,
// courses: ['html', 'css', 'js'],
// wife: null};
// let json = JSON.stringify(student);
// console.log(json);
// console.log(student);

// ➢ important differences from the object literal:
// 			 ➢ Strings use double quotes.
//			 ➢ No single quotes or backticks in JSON.
// 			 ➢ Object property names double-quoted
// ➢ JSON is data-only
// ➢ some object properties are skipped
//			➢ Function properties (methods).
// 			➢ Symbolic properties.
// 			➢ Properties that store undefined.

// // JSON.parse
// // ➢convert JSON back into an object
// // stringified array
// let numbers = "[0, 1, 2, 3]";
// numbers = JSON.parse(numbers);
// console.log( numbers[1] ); // 1
// let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
// // console.log(user.friends[1]);
// user = JSON.parse(user);
// console.log( user.friends[1]); // 1


// //create and log to the console a JSON string from john. Then create a new instance of john, johnClone, using 
// JSON.parse on the JSON string you created. Is john === johnClone?
const john = {
name: "John", 
surname: "Smith",
isAdmin: false,
birthday: {"year": 2000, "month": "February", "day": 3},
friends: [0,1,2,3]
};

// CLOSURES
// let name = "John";
// function sayHi() {
// console.log("Hi, " + name);
// }
// name = "Pete";
// sayHi(); // what will it show: "John" or "Pete"? //Pete

// function makeWorker() {
// 	let name = "John";
// 	return function() {
// 	console.log(name);
// 	};
// 	}
// 	let name = "Pete";
// 	// create a function
// 	let work = makeWorker();
// 	// call it
// 	work(); // what will it show? “John" (name where created) or “Pete" (name where called)? // this time => John


// JavaScript is a very function-oriented language. It gives us a lot of freedom. 
// A function can be created at any moment, passed as an argument to another function, 
// and then called from a totally different place of code later.

// We already know that a function can access variables outside of it (“outer” variables).

// But what happens if outer variables change since a function is created? 
// Will the function get newer values or the old ones?

// And what if a function is passed along as an argument and called from another place of code, 
// will it get access to outer variables at the new place?

// Let’s expand our knowledge to understand these scenarios and more complex ones.

// We’ll talk about let/const variables here
// In JavaScript, there are 3 ways to declare a variable: let, const (the modern ones), 
// and var (the remnant of the past).

// In this article we’ll use let variables in examples.
// Variables, declared with const, behave the same, so this article is about const too.
// The old var has some notable differences, they will be covered in the article The old "var".

// CODE BLOCK

// If a variable is declared inside a code block {...}, it’s only visible inside that block.

// For example:

// {
//   // do some job with local variables that should not be seen outside

//   let message = "Hello"; // only visible in this block

//   console.log(message); // Hello
// }

// console.log(message); // Error: message is not defined
// // We can use this to isolate a piece of code that does its own task, 
// // with variables that only belong to it:

// {
//   // show message
//   let message = "Hello";
//   console.log(message);
// }

// {
//   // show another message
//   let message = "Goodbye";
//   console.log(message);
// }
// // There’d be an error without blocks
// // Please note, without separate blocks there would be an error, 
// // if we use let with the existing variable name:

// // show message
// let message = "Hello";
// console.log(message);

// show another message
// let message = "Goodbye"; // Error: variable already declared
// console.log(message);
// For if, for, while and so on, variables declared in {...} are also only visible inside:

// if (true) {
//   let phrase = "Hello!";

//   console.log(phrase); // Hello!
// }

// console.log(phrase); // Error, no such variable!
// // Here, after if finishes, the alert below won’t see the phrase, hence the error.

// // That’s great, as it allows us to create block-local variables, specific to an if branch.

// // The similar thing holds true for for and while loops:

// for (let i = 0; i < 3; i++) {
//   // the variable i is only visible inside this for
//   console.log(i); // 0, then 1, then 2
// }

// console.log(i); // Error, no such variable
// Visually, let i is outside of {...}. But the for construct is special here:
//  the variable, declared inside it, is considered a part of the block.

// Nested functions
// A function is called “nested” when it is created inside another function.

// It is easily possible to do this with JavaScript.

// We can use it to organize our code, like this:

// function sayHiBye(firstName, lastName) {

//   // helper nested function to use below
//   function getFullName() {
//     return firstName + " " + lastName;
//   }

//   console.log( "Hello, " + getFullName() );
//   console.log( "Bye, " + getFullName() );

// }

// sayHiBye("Samuel", "Tumdedo");
// Here the nested function getFullName() is made for convenience. 
// It can access the outer variables and so can return the full name. 
// Nested functions are quite common in JavaScript.

// What’s much more interesting, a nested function can be returned: 
// either as a property of a new object or as a result by itself. 
// It can then be used somewhere else. No matter where, 
// it still has access to the same outer variables.

// Below, makeCounter creates the “counter” function that 
// returns the next number on each invocation:

// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }

// let counter = makeCounter();

// console.log( counter() ); // 0
// console.log( counter() ); // 1
// console.log( counter() ); // 2
// // Despite being simple, slightly modified variants of that code have practical uses, 
// // for instance, as a random number generator to generate random values for automated tests.

// // How does this work? If we create multiple counters, will they be independent? 
// // What’s going on with the variables here?

// // Understanding such things is great for the overall knowledge of JavaScript 
// // and beneficial for more complex scenarios. So let’s go a bit in-depth.

// // Lexical Environment


// Here be dragons!

// Step 1. Variables
// In JavaScript, every running function, code block {...}, and the script as
//  a whole have an internal (hidden) associated object known as the Lexical Environment.

// The Lexical Environment object consists of two parts:

// Environment Record – an object that stores all local variables as its properties 
// (and some other information like the value of this).
// A reference to the outer lexical environment, the one associated with the outer code.
// A “variable” is just a property of the special internal object, Environment Record. 
// “To get or change a variable” means “to get or change a property of that object”.

// In this simple code without functions, there is only one Lexical Environment:


// This is the so-called global Lexical Environment, associated with the whole script.

// On the picture above, the rectangle means Environment Record (variable store) 
// and the arrow means the outer reference. The global Lexical Environment has no outer reference, 
// that’s why the arrow points to null.

// As the code starts executing and goes on, the Lexical Environment changes.

// Here’s a little bit longer code:


// Rectangles on the right-hand side demonstrate how the global Lexical Environment changes during the execution:

// When the script starts, the Lexical Environment is pre-populated with all declared variables.
// Initially, they are in the “Uninitialized” state. That’s a special internal state,
//  it means that the engine knows about the variable, but it cannot be referenced until 
//  it has been declared with let. It’s almost the same as if the variable didn’t exist.
// Then let phrase definition appears. There’s no assignment yet, so its value is undefined. 
// We can use the variable from this point forward.
// phrase is assigned a value.
// phrase changes the value.
// Everything looks simple for now, right?

// A variable is a property of a special internal object, associated with the 
// currently executing block/function/script.
// Working with variables is actually working with the properties of that object.
// Lexical Environment is a specification object
// “Lexical Environment” is a specification object: 
// it only exists “theoretically” in the language specification to describe how things work. 
// We can’t get this object in our code and manipulate it directly.

// JavaScript engines also may optimize it, discard variables that are unused to save memory 
// and perform other internal tricks, as long as the visible behavior remains as described.

// Step 2. Function Declarations
// A function is also a value, like a variable.

// The difference is that a Function Declaration is instantly fully initialized.

// When a Lexical Environment is created, a Function Declaration immediately becomes a ready-to-use
//  function (unlike let, that is unusable till the declaration).

// That’s why we can use a function, declared as Function Declaration, even before the declaration 
// itself.

// For example, here’s the initial state of the global Lexical Environment when we add a function:


// Naturally, this behavior only applies to Function Declarations, 
// not Function Expressions where we assign a function to a variable, 
// such as let say = function(name)....

// Step 3. Inner and outer Lexical Environment
// When a function runs, at the beginning of the call, a new Lexical Environment is created 
// automatically to store local variables and parameters of the call.

// For instance, for say("John"), it looks like this (the execution is at the line, 
// 	labelled with an arrow):


// During the function call we have two Lexical Environments: the inner one (for the function call) 
// and the outer one (global):

// The inner Lexical Environment corresponds to the current execution of say. It has a single property: 
// name, the function argument. We called say("John"), so the value of the name is "John".
// The outer Lexical Environment is the global Lexical Environment. 
// It has the phrase variable and the function itself.
// The inner Lexical Environment has a reference to the outer one.

// When the code wants to access a variable – the inner Lexical Environment is searched first, 
// then the outer one, then the more outer one and so on until the global one.

// If a variable is not found anywhere, that’s an error in strict mode 
// (without use strict, an assignment to a non-existing variable creates a new 
// 	global variable, for compatibility with old code).

// In this example the search proceeds as follows:

// For the name variable, the alert inside say finds it immediately in the inner Lexical Environment.
// When it wants to access phrase, then there is no phrase locally, so it follows the reference 
// to the outer Lexical Environment and finds it there.

// Step 4. Returning a function
// Let’s return to the makeCounter example.

// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }

// let counter = makeCounter();
// At the beginning of each makeCounter() call, a new Lexical Environment object is created, 
// to store variables for this makeCounter run.

// So we have two nested Lexical Environments, just like in the example above:


// What’s different is that, during the execution of makeCounter(), a 
// tiny nested function is created of only one line: return count++. We don’t run it yet, only create.

// All functions remember the Lexical Environment in which they were made. Technically, 
// there’s no magic here: all functions have the hidden property named [[Environment]], 
// that keeps the reference to the Lexical Environment where the function was created:


// So, counter.[[Environment]] has the reference to {count: 0} Lexical Environment. 
// That’s how the function remembers where it was created, no matter where it’s called. 
// The [[Environment]] reference is set once and forever at function creation time.

// Later, when counter() is called, a new Lexical Environment is created for the call, 
// and its outer Lexical Environment reference is taken from counter.[[Environment]]:


// Now when the code inside counter() looks for count variable, it first searches its own 
// Lexical Environment (empty, as there are no local variables there), then the Lexical 
// Environment of the outer makeCounter() call, where it finds and changes it.

// A variable is updated in the Lexical Environment where it lives.

// Here’s the state after the execution:


// If we call counter() multiple times, the count variable will be increased to 2, 
// 3 and so on, at the same place.

// Closure
// There is a general programming term “closure”, that developers generally should know.

// A closure is a function that remembers its outer variables and can access them. 
// In some languages, that’s not possible, or a function should be written in a 
// special way to make it happen. But as explained above, in JavaScript, all 
// functions are naturally closures (there is only one exception, to be covered in 
// The "new Function" syntax).

// That is: they automatically remember where they were created using a hidden 
// [[Environment]] property, and then their code can access outer variables.

// When on an interview, a frontend developer gets a question about “what’s a closure?”, 
// a valid answer would be a definition of the closure and an explanation that all functions 
// in JavaScript are closures, and maybe a few more words about technical details: 
// the [[Environment]] property and how Lexical Environments work.

// Garbage collection
// Usually, a Lexical Environment is removed from memory with all the variables 
// after the function call finishes. That’s because there are no references to it. 
// As any JavaScript object, it’s only kept in memory while it’s reachable.

// However, if there’s a nested function that is still reachable after the end of a function, 
// then it has [[Environment]] property that references the lexical environment.

// In that case the Lexical Environment is still reachable even after the completion of the 
// function, so it stays alive.

// For example:

// function f() {
//   let value = 123;

//   return function() {
//     alert(value);
//   }
// }

// let g = f(); // g.[[Environment]] stores a reference to the Lexical Environment
// // of the corresponding f() call
// Please note that if f() is called many times, and resulting functions are saved, 
// then all corresponding Lexical Environment objects will also be retained in memory. 
// In the code below, all 3 of them:

// function f() {
//   let value = Math.random();

//   return function() { alert(value); };
// }

// 3 functions in array, every one of them links to Lexical Environment
// from the corresponding f() run
// let arr = [f(), f(), f()];
// A Lexical Environment object dies when it becomes unreachable (just like any other object). 
// In other words, it exists only while there’s at least one nested function referencing it.

// In the code below, after the nested function is removed, its enclosing Lexical Environment 
// (and hence the value) is cleaned from memory:

// function f() {
//   let value = 123;

//   return function() {
//     alert(value);
//   }
// }

// let g = f(); // while g function exists, the value stays in memory

// g = null; // ...and now the memory is cleaned up
// Real-life optimizations
// As we’ve seen, in theory while a function is alive, all outer variables are also retained.

// But in practice, JavaScript engines try to optimize that. 
// They analyze variable usage and if it’s obvious from the code that an outer variable is 
// not used – it is removed.

// An important side effect in V8 (Chrome, Edge, Opera) is that such variable will become 
// unavailable in debugging.

// Try running the example below in Chrome with the Developer Tools open.

// // When it pauses, in the console type alert(value).

// function f() {
//   let value = Math.random();

//   function g() {
//     debugger; // in console: type alert(value); No such variable!
//   }

//   return g;
// }

// let g = f();
// g();
// As you could see – there is no such variable! In theory, it should be accessible, 
// but the engine optimized it out.

// That may lead to funny (if not such time-consuming) debugging issues. 
// One of them – we can see a same-named outer variable instead of the expected one:

// let value = "Surprise!";

// function f() {
//   let value = "the closest value";

//   function g() {
//     debugger; // in console: type alert(value); Surprise!
//   }

//   return g;
// }

// let g = f();
// g();
// This feature of V8 is good to know. If you are debugging with Chrome/Edge/Opera, 
// sooner or later you will meet it.

// That is not a bug in the debugger, but rather a special feature of V8. 
// Perhaps it will be changed sometime. You can always check for it by running the examples 
// // on this page.

// // function a() {
// // 	console.log(x); // consult
// // 	// Global for x and print 20 from Global
// // 	}
// // 	function b() {
// // 	const x = 10;
// // 	a(); // consult Global for a
// // }
// // const x = 20;
// // b();

// // {
// // 	let message = "Hello";
// // 	console.log(message);
// // }

// function makeWorker() {
//   let name = "John";
//   return function() {
//   console.log(name);
//   };
// }

// let name = "Pete";
// // create a function
// let work = makeWorker();
// // call it
// work(); // what will it show? “John" (name where created) or “Pete" (name where called)? //Joh, right?


// function log() {
//   console.log("No Arguments");
//   }
//   function log(x) {
//   console.log("1 Argument: " + x);
//   }
//   function log(x, y) {
//   console.log("2 Arguments: " + x + ", " + y);
//   }
// // log();  

// // Write a function, flatten, that returns an array that has objects of the form {date: "...", id: 1, amt: 15} for all donations.
// // flatten(dailyRecord) returns: [
// // { date: '01/10/2022', id: 1, amount: 100 },
// // { date: '01/10/2022', id: 2, amount: 10 },
// // { date: '01/11/2022', id: 3, amount: 1 },
// // { date: '01/11/2022', id: 2, amount: 5 },
// // { date: '01/11/2022', id: 1, amount: 15 }
// // ]

// const donation1 = { funderId: 1, amount: 100 };
// const donation2 = { funderId: 2, amount: 10 };
// const donation3 = { funderId: 3, amount: 1 };
// const donation4 = { funderId: 2, amount: 5 };
// const donation5 = { funderId: 1, amount: 15 };
// const day1 = { donations: [donation1, donation2], date: "01/10/2022", };
// const day2 = { donations: [donation3, donation4, donation5], date: "01/11/2022", };

// const dailyRecord = [day1, day2];
// /**
//  * 
//  * @param {*} dailyRecord 
//  * @returns 
//  */
// function flatten(dailyRecord){
//   let flattened = [];
//   for (const day of dailyRecord) {
//     for (const funder of day.donations) {
//         flattened.push({date: day.date, id: funder.funderId, amount: funder.amount}); 
        
      
//     }
    
//   }
//   return flattened;
// }

// console.log(flatten(dailyRecord));

// Write your own version of Array.map. Write a function, myMap(arr, fun) that takes an array and a function as arguments and returns a new array that is
//  formed by applying the function to each element of the array and saving the result in the new array?

// function myMap(arr, fun) {
//   let newArr = [];
//   for (const elem of arr) {
//     newArr.push(fun(elem))
//   }
//   return newArr;
// }

// Write a function, smash, that uses map and destructuring in parameters of the callback function. 
// Remember that you need () around destructuring brackets for an object if you do not have let or const.  
// smash input is an array of objects with x and y properties. 
//  It returns an array that has the x and y values added together.

// const bar = [{x:1, y:2}, {x:10, y:4}, {x:4, y:2}]
// console.log("expect [3, 14, 6]:", smash(bar));