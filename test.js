const rad = require('@hurly77/rad-arrays');

const arrayOne = rad.array('string', 10);
const arrayTwo = rad.array('string', 10);
console.log(arrayOne, arrayTwo);

const containsCommonItem = (arr1, arr2) => {
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
};

console.log(containsCommonItem(arrayOne, arrayTwo));
