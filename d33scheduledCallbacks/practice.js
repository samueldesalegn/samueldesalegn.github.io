// console.log(Math.max(20, 10, 40, 6,12, 30));

// let dest;
// let a = [1, 2, 3];
// let b = 4;
// let c = [6, 7, 8];
// Object.assign(dest, a, b, c);


// function sum(a, b) {
//   return a + b;
// }

// console.log( sum(1, 2, 3, 4, 5) ); //3, the rest will be ignored!


// function sumAll(...args) { // args is the name for the array
//   let sum = 0;

//   for (let arg of args) sum += arg;

//   return sum;
// }

// console.log( sumAll(1) ); // 1
// console.log( sumAll(1, 2) ); // 3
// console.log( sumAll(1, 2, 3) ); // 6

// function showName(firstName, lastName, ...titles) {
//   console.log( firstName + ' ' + lastName ); // Julius Caesar

//   // the rest go into titles array
//   // i.e. titles = ["Consul", "Imperator"]
//   console.log( titles[0] ); // Consul
//   console.log( titles[1] ); // Imperator
//   console.log( titles.length ); // 2
// }

// showName("Julius", "Caesar", "Consul", "Imperator");

// The “arguments” variable
// There is also a special array-like object named arguments that contains all arguments by their index.

// For instance:

// function showName() {
//   console.log( arguments.length );
//   console.log( arguments[0] );
//   console.log( arguments[1] );

//   // it's iterable
//   // for(let arg of arguments) alert(arg);
// }

// // shows: 2, Julius, Caesar
// showName("Julius", "Caesar");

// // shows: 1, Ilya, undefined (no second argument)
// showName("Ilya");


// Arrow functions do not have "arguments"
// If we access the arguments object from an arrow function, 
// // it takes them from the outer “normal” function.

// // Here’s an example:

// function f() {
//   let showArg = () => console.log(arguments[0]);
//   showArg();
// }

// f(1); // 1
// // As we remember, arrow functions don’t have their own this. 
// // Now we know they don’t have the special arguments object either.

// // Spread syntax

// We’ve just seen how to get an array from the list of parameters.

// But sometimes we need to do exactly the reverse.

// For instance, there’s a built-in function Math.max that returns the greatest number from a list:

// console.log( Math.max(3, 5, 1) ); // 5
// // Now let’s say we have an array [3, 5, 1]. How do we call Math.max with it?

// // Passing it “as is” won’t work, because Math.max expects a list of numeric arguments, 
// // not a single array:

// let arr = [3, 5, 1];

// console.log( Math.max(arr) ); // NaN
// // And surely we can’t manually list items in the code Math.max(arr[0], arr[1], arr[2]), 
// // because we may be unsure how many there are. 
// // As our script executes, there could be a lot, or there could be none. And that would get ugly.

// // Spread syntax to the rescue! It looks similar to rest parameters, also using ..., 
// // but does quite the opposite.

// // When ...arr is used in the function call, 
// // it “expands” an iterable object arr into the list of arguments.

// // For Math.max:

// let arr1 = [3, 5, 1];

// console.log( Math.max(...arr1) ); // 5 (spread turns array into a list of arguments)

// We also can pass multiple iterables this way:

// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];

// console.log( Math.max(...arr1, ...arr2) ); // 8

// For instance, here we use the spread syntax to turn the string into array of characters:

// let str = "Hello";

// console.log( [...str] ); // H,e,l,l,o

// let str = "Hello";

// // Array.from converts an iterable into an array
// console.log( Array.from(str) ); // H,e,l,l,o

// let arr = [1, 2, 3];

// let arrCopy = [...arr]; // spread the array into a list of parameters
//                         // then put the result into a new array

// // do the arrays have the same contents?
// console.log(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// // are the arrays equal?
// console.log(arr === arrCopy); // false (not same reference)

// // modifying our initial array does not modify the copy:
// arr.push(4);
// console.log(arr); // 1, 2, 3, 4
// console.log(arrCopy); // 1, 2, 3


// // Note that it is possible to do the same thing to make a copy of an object:

// let obj = { a: 1, b: 2, c: 3 };

// let objCopy = { ...obj }; // spread the object into a list of parameters
//                           // then return the result in a new object

// // do the objects have the same contents?
// console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// // are the objects equal?
// console.log(obj === objCopy); // false (not same reference)

// // modifying our initial object does not modify the copy:
// obj.d = 4;
// console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
// console.log(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}

// This way of copying an object is much shorter than
// let objCopy = Object.assign({}, obj) or for an array let arrCopy = Object.assign([], arr) 
// so we prefer to use it whenever we can.

// Summary
// When we see "..." in the code, it is either rest parameters or the spread syntax.

// There’s an easy way to distinguish between them:

// When ... is at the end of function parameters, it’s “rest parameters” 
// and gathers the rest of the list of arguments into an array.
// When ... occurs in a function call or alike, it’s called 
// a “spread syntax” and expands an array into a list.
// Use patterns:

// Rest parameters are used to create functions that accept any number of arguments.
// The spread syntax is used to pass an array to functions that normally require a 
// list of many arguments.
// Together they help to travel between a list and an array of parameters with ease.

// All arguments of a function call are also available in “old-style” arguments: 
// array-like iterable object.





// setTimeout
// The syntax:

// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
// Parameters:

// func|code
// Function or a string of code to execute. Usually, that’s a function. 
// For historical reasons, a string of code can be passed, but that’s not recommended.
// delay
// The delay before run, in milliseconds (1000 ms = 1 second), by default 0.
// arg1, arg2…
// Arguments for the function
// For instance, this code calls sayHi() after one second:

// function sayHi() {
//   console.log('Hello');
// }

// setTimeout(sayHi, 1000);
// // With arguments:

// function sayHi(phrase, who) {
//   console.log( phrase + ', ' + who );
// }

// setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John
// If the first argument is a string, then JavaScript creates a function from it.

// So, this will also work:

// setTimeout("console.log('Hello')", 1000);
// But using strings is not recommended, use arrow functions instead of them, like this:

// setTimeout(() => console.log('Hello'), 1000);
// Pass a function, but don’t run it
// Novice developers sometimes make a mistake by adding brackets () after the function:

// // wrong!
// setTimeout(sayHi(), 1000);
// That doesn’t work, because setTimeout expects a reference to a function. 
// And here sayHi() runs the function, and the result of its execution is passed to setTimeout. 
// In our case the result of sayHi() is undefined (the function returns nothing), 
// so nothing is scheduled.

// Canceling with clearTimeout
// A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.

// The syntax to cancel:

// let timerId = setTimeout(...);
// clearTimeout(timerId);
// In the code below, we schedule the function and then cancel it (changed our mind).
//  As a result, nothing happens:

// let timerId = setTimeout(() => console.log("never happens"), 1000);
// console.log(timerId); // timer identifier

// clearTimeout(timerId);
// console.log(timerId); // same identifier (doesn't become null after canceling)


// // repeat with the interval of 2 seconds
// let timerId = setInterval(() => console.log('tick'), 2000);

// // after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);

// Time goes on while alert is shown
// In most browsers, including Chrome and Firefox the internal timer continues
//  “ticking” while showing alert/confirm/prompt.

// So if you run the code above and don’t dismiss the alert window for some time, 
// then the next alert will be shown immediately as you do it. 
// The actual interval between alerts will be shorter than 2 seconds.


// let timerId = setTimeout(function tick() {
//   console.log('tick');
//   timerId = setTimeout(tick, 2000); // (*)
// }, 2000);

// The setTimeout above schedules the next call right at the end of the current one (*).

// The nested setTimeout is a more flexible method than setInterval. 
// This way the next call may be scheduled differently, depending on the results of the current one.

// For instance, we need to write a service that sends a request to the server 
// every 5 seconds asking for data, but in case the server is overloaded, 
// it should increase the interval to 10, 20, 40 seconds…

// Here’s the pseudocode:

// let delay = 5000;

// let timerId = setTimeout(function request() {
//   // ...send request...

//   if (request failed due to server overload) {
//     // increase the interval to the next run
//     delay *= 2;
//   }

//   timerId = setTimeout(request, delay);

// }, delay);

// let i = 1;
// setInterval(function() {
//   func(i++);
// }, 100);


// /**
//  * 
//  * @param {*} teamStats 
//  * @returns 
//  */
// export function findTotalScores(teamStats) {
// 	let playerStat = [];
//   for (const player of teamStats) {
// 		let playerTotal = 0;
//     for (const stat of player.stats) {
// 			playerTotal += stat.points;
         
//     }
// 		playerStat.push({jersey: player.jersey, total: playerTotal});
//   }
//   return playerStat;
// }

// const player1 = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] };
// const player2 = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] };
// const player3 = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] };
// const teamStats = [player1, player2, player3];

// console.log(findTotalScores(teamStats));


// let timerId = setInterval(() => console.log('tick'), 2000);
// // after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);

setTimeout(sayHi(), 3000); function sayHi(){console.log('hello');}