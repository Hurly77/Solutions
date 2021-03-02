const newA = (n) => {
	let a = [];
	let tmp;
	let k = 0;
	const shuff = (n) => Math.floor(Math.random() * n);
	for (let i = 0; i < n; i++) {
		a.push(i + 1);
	}
	for (let j = 0; j < a.length; j++) {
		r = shuff(a.length);
		tmp = a[j];
		a[j] = a[r];
		a[r] = tmp;
	}
	return a;
};
let array = newA(10000);

const minimumSwaps = (a) => {
	let tmp;
	let n = a.length;
	let bin;
	let not;
	let max = 0;
  let count = 0
	while (max != n * (n + 1) / 2) {
		for (let i = 0; i < a.length; i++) {
			not = true;
			while (not) {
				if (a[i] !== i + 1) {
					tmp = a[a[i] - 1];
					bin = a[i];
					a[a[i] - 1] = bin;
					a[i] = tmp;
          c+=1
				} else {
					not = false;
				}
			}

			max += i + 1;
		}
	}
	console.log(max, n * (n + 1) / 2);
	return a;
};

console.log(minimumSwaps(array));
