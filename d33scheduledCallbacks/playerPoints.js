

/*Be sure to use meaningful variable names and write JSdoc comments for 
findTotalScores and any helper functions such as findTotalPlayerPoints.
Try to use map and reduce in your functions as appropriate. */

/**
 * 
 * @param {*} teamStats 
 * @returns 
 */
export function findTotalScores(teamStats) {
	let playerStat = [];
  for (const player of teamStats) {
		let playerTotal = 0;
    for (const stat of player.stats) {
			playerTotal += stat.points;
         
    }
		playerStat.push({jersey: player.jersey, total: playerTotal});
  }
  return playerStat;
}

/**
 * 
 * @param {*} player 
 * @returns 
 */
export function findTotalPlayerPoints(player) {
	let playertotal = 0;
  for (const stat of player.stats) {
		playertotal += stat.points;
  }
  return playertotal;

}


