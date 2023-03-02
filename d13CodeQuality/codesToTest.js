/**
 * 
 * @param {*} char 
 * @returns 
 * 
 */
export function isVowel(char) {
	let vowels = ["a", "e", "i", "o", "u"];
	for (let i = 0; i < vowels.length; i++) {
		if (char === vowels[i]) {
			return true;
		}
	}
	return false;
}

