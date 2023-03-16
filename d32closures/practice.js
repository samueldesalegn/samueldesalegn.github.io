// function outer() {
// 	let b = 10;
// 	function inner() {
// 				let a = 20; 
// 				console.log(a+b);
// 	}
// 	return inner;
// }

// let x = outer();
// let y = outer();
// x();//30
// y();//30

// Write a function, smash, that uses map and destructuring in parameters of the callback function. 
// Remember that you need () around destructuring brackets for an object if you do not have let or const.  
// smash input is an array of objects with x and y properties. 
//  It returns an array that has the x and y values added together.

// const bar = [{x:1, y:2}, {x:10, y:4}, {x:4, y:2}]
// console.log("expect [3, 14, 6]:", smash(bar));

// function smash(arr) {
// 	return arr.map(({x, y}) => x + y);
// }

// let x = 1;

// function func() {
//   console.log(x); // ReferenceError: Cannot access 'x' before initialization
//   // let x = 2;
// }

// func();

// function makeCounter() { 

//   let count = 0;   

//   return function(num) { 
//     return (num > 1)? "Warning:  increment was by value greater than 1: " + count + num: count++ };

// }

// const myCounter = makeCounter();

// console.log(myCounter(10));


//The following objects record the season statistics for players on a basketball team.
const player1 = {jersey: 8, stats: [ {game : 1, points: 6}, {game : 2, points : 7} ] };
const player2 = {jersey: 12, stats: [ {game : 1, points: 16}, {game : 2, points : 14} ] };
const player3 = {jersey: 6, stats: [ {game : 1, points: 10}, {game : 2, points : 6} ] };
const teamStats = [player1, player2, player3];

//Write a function, findHighScores, that finds the high score in the season for each player as follows:
console.log("expect [{jersey: 8, high: 7}, {jersey: 12, high: 16}, {jersey: 6, high: 10}]: " , findHighScores(teamStats));
// /**
//  * 
//  * @param {*} teamStats 
//  */
// function findHighScores(teamStats) {
//   let playerStat = [];
//   let max = 0;
//   for (const player of teamStats) {
//     for (const stat of player.stats) {
//       if (max < stat.points) {
//         max = stat.points;

//       }

//     }
//     playerStat.push()
//   }
// }

function findHighScores(teamStats) {
  let playerStat = [];
  for (const player of teamStats) {
    let max = 0;
    for (const stat of player.stats) {
      if (max < stat.points) {
        max = stat.points;
        
      }
      playerStat.push({jersery: player.jersey, high: max});
    }
  }
  return playerStat;
}