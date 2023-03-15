
export function topSalary(salaries) {
	// if (!salaries) return null;
	let topSalary = 0;
	let maxName = null;
	for (let [key, value] of Object.entries(salaries)) {
		if (topSalary <= value) {
			topSalary = value;
			maxName = key;
		} 
	}
	return maxName;
}


