

export function doubleNums(arr){
	return arr.map(num => num * 2);
	}
	
	export function doubleAges(arr){
		return arr.map(person =>{return { name: person.name, age: person.age*2}})
		
	}
	
	export function filterEven(arr){
		return arr.filter((num => num%2 ===0))
	}
	
	export function filterOver10(arr) {
		return arr.filter(num => num.age>10)
	}
	
	export function findEvenNum(arr){
	return arr.find(num => num%2 ===0);
	}
	
	export function findEvenAge(arr){
		return arr.find(num => num.age%2 ===0);
	}
	
	export function includesEvenNum(arr){
		for (const num of arr) {
			if (num%2 ===0){
				return true;
			}
		}
		return false;
		
	}
	
export function includesEvenAge(arr){
	for (const num of arr) {
		if (num.age%2 === 0) {
			return true;
		}
		
	}
	return false;
	}
	
	