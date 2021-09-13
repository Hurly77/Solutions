let hash = (string) => {
	let hash = '';

	for (let j = 0; j < string.length; j++) {
		let cc = string.charCodeAt(j);
		hash += cc;
	}

	return hash;
};

const isAnagram = (str1, str2) => {
	let a = hash(str1);
	let b = hash(str2);
	if (a !== b) {
		return false;
	}
	return true;
};

console.log(isAnagram('ii', 'ai'));
