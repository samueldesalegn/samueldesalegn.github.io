/*
Readings and completing the tasks on text book

The "switch" statement
A switch statement can replace multiple if checks.

Both switch and case allow arbitrary expressions.
Without break keyword, the switch statement prints/logs out the case that is 
strictly equal and the below cases including the default if any
*/

// without break keyword
// let a = 2 + 2;

// switch (a) {
//   case 3:
//     console.log( 'Too small' );
//   case 4:
//     console.log( 'Exactly!' );
//   case 5:
//     console.log( 'Too big' );
//   default:
//     console.log( "I don't know such values" );
// }

// // With break keyword
// let a = 2 + 2;

// switch (a) {
//   case 3:
//     console.log( 'Too small' );
//     break;
//   case 4:
//     console.log( 'Exactly!' );
//     break;
//   case 5:
//     console.log( 'Too big' );
//     break;
//   default:
//     console.log( "I don't know such values" );
// }

/**
 Grouping of “case”
Several variants of case which share the same code can be grouped.

For example, if we want the same code to run for case 3 and case 5:

The ability to “group” cases is a side effect of how switch/case works without break. 
Here the execution of case 3 starts from the line (*) and goes through case 5, because there’s no break.
 */

// let b = 3;

// switch (b) {
//   case 4:
//     console.log('Right!');
//     break;

//   case 3: // (*) grouped two cases
//   case 5:
//     console.log('Wrong!');
//     console.log("Why don't you take a math class?");
//     break;

//   default:
//     console.log('The result is strange. Really.');
// }

/**
 Type matters
 */

//  let prompt = require('prompt-sync')();
//  let arg = prompt("Enter a value?");
// switch (arg) {
//   case '0':
//   case '1':
//     console.log( 'One or zero' );
//     break;

//   case '2':
//     console.log( 'Two' );
//     break;

//   case 3:
//     console.log( 'Never executes!' );
//     break;
//   default:
//     console.log( 'An unknown value' );
// }

let prompt = require('prompt-sync')();
// let browser = prompt("Enter the browser type: ?");

// switch (browser) {
//   case 'Edge':
//     console.log( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     console.log( 'Okay we support these browsers too' );
//     break;

//   default:
//     console.log( 'We hope that this page looks ok!' );
// }

/**
 Rewrite the "switch" into an "if"
importance: 5
Write the above code using if..else which would correspond to the following switch:
*/

// if (browser === 'Edge') {
//   console.log( "You've got the Edge!" );
// }else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera' ) {
//   console.log( 'Okay we support these browsers too' );
// }else {
//   console.log( 'We hope that this page looks ok!' );
// }


/**
 Rewrite "if" into "switch"
importance: 4
Rewrite the code below using a single switch statement:
 */

let a = +prompt('a?', '');

if (a == 0) {
  console.log( 0 );
}
if (a == 1) {
  console.log( 1 );
}

if (a == 2 || a == 3) {
  console.log( '2,3' );
}

// Switch statement

switch (a) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  case 2:
  case 3:
    console.log('2,3')
    break;
}