
export function copyArray(arr){
	let arrCopy = [...arr];
	return arrCopy;
}

export function concat(arr1, arr2){
	return arr1.concat(arr2);
}

export function findMin(...numbers) {
return Math.min(...numbers);
}

export function combineObjs(obj1, obj2){
	return {...obj1, ...obj2};
}