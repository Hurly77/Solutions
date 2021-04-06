//We have and array of zeros the length of the array is expressed using n
//our query array is and array of arrays.
//each array inside query array represents index-a, index-b and value to add a, b, k
// a is the start index b is the end index and k is the value to add to each index.
//q = [[1, 3, 4]]
//table = [0, 0, 0, 0, 0]
//         1  2  3  4  5
let q = (n) => {
	let num = (int) => {
		return Math.ceil(Math.random() * int);
	};
	let add = (int) => {
		return Math.ceil(Math.random() * int * 2);
	};
	let array = new Array();
	for (let i = 0; i < n; i++) {
		array.push([num(n), num(n), add(n)]);
	}
	return array;
};

const arrayManipulation = (n, q) => {
	let arrOfZeros = new Array(n + 1).fill(0);
	let max = 0,
		current = 0;
	q.forEach(([start, end, value]) => {
		arrOfZeros[start] = arrOfZeros[start] || { start: 0, end: 0 };
		arrOfZeros[end] = arrOfZeros[end] || { start: 0, end: 0 };
		arrOfZeros[start].start += value;
		arrOfZeros[end].end += value;
	});
	arrOfZeros.forEach((object) => {
		if (object) {
			current += object.start;
			if (current > max) {
				max = current;
			}
			current -= object.end;
		}
	});
	return max;
};
let myNum = 10000000;
console.log(arrayManipulation(myNum, q(myNum)));
