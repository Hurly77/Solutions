let nums = [1, 3, 6, 7, 8]

function findSmallestInterval(numbers) {
  let intA;
  let intB;
  let hashMap = {}
  for (let i = 0; i < numbers.length; i++) {
    if (!hashMap[numbers[i]]) {
      hashMap[numbers[i]] = numbers[i]
    }
  }

  for (let j = 0; j < numbers.length; j++) {
    if (hashMap[j] && !intA || !intB) {
      if (intA) {
        intB = j
      } else {
        intA = j
      }
    }

    if (intA && intB) {
      return Math.abs(intA - intB)
    }
  }
  return 0;
}

console.log(findSmallestInterval(nums))