// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   }
// };

// // setTimeout(function() {
// //   user.sayHi(); // Hello, John!
// // }, 1000);

// setTimeout(() => user.sayHi(), 1000);

// user = {
//   sayHi() { console.log("Another user in setTimeout!"); }
// };

// let user = {
//   firstName: "John"
// };

// function func() {
//   console.log(this.firstName);
// }

// let funcUser = func.bind(user);
// funcUser(); // John

// All arguments are passed to the original func “as is”, for instance:

// let user = {
//   firstName: "John"
// };

// function func(phrase) {
//   console.log(phrase + ', ' + this.firstName);

// }

// // bind this to user
// let funcUser = func.bind(user);

// funcUser("Hello"); // Hello, John (argument "Hello" is passed, and this=user)



// // Now let’s try with an object method:

// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   }
// };

// let sayHi = user.sayHi.bind(user); // (*)

// // can run it without an object
// sayHi(); // Hello, John!


// // even if the value of user changes within 1 second
// // sayHi uses the pre-bound value which is reference to the old user object
// user = {
// 	sayHi() { console.log("Another user in setTimeout!"); }
// };

// setTimeout(sayHi, 1000); // Hello, John!

// In the line (*) we take the method user.sayHi and bind it to user. 
// The sayHi is a “bound” function, that can be called alone or passed to setTimeout – doesn’t matter,
//  the context will be right.

// Here we can see that arguments are passed “as is”, only this is fixed by bind:

// let user = {
//   firstName: "John",
//   say(phrase) {
//     console.log(`${phrase}, ${this.firstName}!`);
//   }
// };

// let say = user.say.bind(user);

// say("Hello"); // Hello, John! ("Hello" argument is passed to say)
// say("Bye"); // Bye, John! ("Bye" is passed to say)

// Convenience method: bindAll
// If an object has many methods and we plan to actively pass it around, 
// then we could bind them all in a loop:

// for (let key in user) {
//   if (typeof user[key] == 'function') {
//     user[key] = user[key].bind(user);
//   }
// }
// // JavaScript libraries also provide functions for convenient mass binding ,
// //  e.g. _.bindAll(object, methodNames) in lodash.

// function mul(a, b) {
//   return a * b;
// }

// let double = mul.bind(this, 2); // you can put in null instead of this

// console.log( double(3) ); // = mul(2, 3) = 6
// console.log( double(4) ); // = mul(2, 4) = 8
// console.log( double(5) ); // = mul(2, 5) = 10

// Going partial without context
// What if we’d like to fix some arguments, but not the context this? For example, for an object method.

// The native bind does not allow that. We can’t just omit the context and jump to arguments.

// Fortunately, a function partial for binding only arguments can be easily implemented.

// Like this:

// function partial(func, ...argsBound) {
//   return function(...args) { // (*)
//     return func.call(this, ...argsBound, ...args);
//   }
// }

// // Usage:
// let user = {
//   firstName: "John",
//   say(time, phrase) {
//     console.log(`[${time}] ${this.firstName}: ${phrase}!`);
//   }
// };

// // add a partial method with fixed time
// user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

// user.sayNow("Hello");
// // Something like:
// // [10:00] John: Hello!


// function askPassword(ok, fail, password) {
//   // let password = prompt("Password?", '');
//   if (password === "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },

// };



// // askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user), "rockstar");
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user), "1234");


// export function askPassword2(ok, fail, password) {

// 	if (password === "rockstar") ok();
//   else fail();
// }



// export let user2 = {
// 	name: 'John',
// 	login(result) {
//     console.log( this.name + (result ? " logged in" : " failed to log in") );
//   }
// };

// // askPassword2(() => user2.login(true), () => user2.login(false), "rockstar");
// // askPassword2(() => user2.login(true), () => user2.login(false), "1234");


// function slow(x) {
//   // there can be a heavy CPU-intensive job here
//   console.log(`Called with ${x}`);
//   return x;
// }

// function cachingDecorator(func) {
//   let cache = new Map();

//   return function(x) {
//     if (cache.has(x)) {    // if there's such key in cache
//       return cache.get(x); // read the result from it
//     }

//     let result = func(x);  // otherwise call func

//     cache.set(x, result);  // and cache (remember) the result
//     return result;
//   };
// }

// // eslint-disable-next-line no-func-assign
// slow = cachingDecorator(slow);

// console.log( slow(1) ); // slow(1) is cached and the result returned
// console.log( "Again: " + slow(1) ); // slow(1) result returned from cache

// console.log( slow(2) ); // slow(2) is cached and the result returned
// console.log( "Again: " + slow(2) ); // slow(2) result returned from cache

// function foo() { console.log(this); }
// const bob = {
// log: function() {
// console.log(this);
// }
// };
// console.log(this); // undefined
// foo(); //undefined
// bob.log();//log() is called by the object, bob 

// let john = { name: "John", surname: "Smith", age: 10 };
// let pete = { name: "Pete", surname: "Hunt", age: 20 };
// let people = [ john, pete];



// // Model Short Answer:
// let usersMapped = people.map(person=> ({
// fullName: `${person.name} ${person.surname}`,
// age: person.age
// }));

// console.log(usersMapped);
// //OR

// const mapped = people.map(function(person) {
// const newPersonObj = {
// fullName: person.name + " " + person.surname,
// age: person.age
// };
// return newPersonObj ;
// });

// "use strict";
// function a() {
// console.log(this);}
// const b = {
// dog: 'fido',
// log: function() {
// console.log(this); }}
// console.log("1 " + this);
// a();
// b.log();
// let mylog = b.log;
// mylog();

let user = {
	firstName: "John",
	sayHi() {
	console.log(`Hello, ${this.firstName}!`);
	}};
	setTimeout(function() { user.sayHi(); }, 1000); //wrapped versus just “user.sayHi”
	//Or
	setTimeout(() => user.sayHi(), 1000);
	





