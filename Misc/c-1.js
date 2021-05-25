let id = '343428'


function computeCheckDigit(identificationNumber) {
  let string = identificationNumber
  let evenIndex = []
  let oddIndex = []
  for (let i = 0; i < string.length; i++) {
    let int = parseInt(string[i])
    if (i % 2 === 0) {
      evenIndex.push(int)
    } else {
      oddIndex.push(int)
    }
  }
  let evenSum = evenIndex.reduce((a, b) => a + b) * 3
  let sum = (oddIndex.reduce((a, b) => a + b) + evenSum).toString()
  let lastDigit = sum[sum.length - 1]
  console.log(lastDigit)
  return parseInt(lastDigit) === 0 ? '0' : (10 - parseInt(lastDigit)).toString()
}

console.log(computeCheckDigit(id))