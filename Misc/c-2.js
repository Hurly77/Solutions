function isBulky(...args) {
  let sum = args.reduce((a, b) => a * b)
  if (sum > 1000000) {
    return true
  }
  for (let i = 0; i < args.length; i++) {
    if (args[i] >= 150) {
      return true
    }
  }
  return false
}

function isHeavy(mass) {
  return mass >= 20 ? true : false
}

function solve(width, height, length, mass) {
  if (isBulky(width, length, height) && isHeavy(mass)) {
    return 'REJECTED'
  }
  if (isHeavy(mass) || isBulky(width, height, length)) {
    return 'SPECIAL'
  }

  return 'STANDARD';
}

console.log(solve(150, 30, 40, 20))