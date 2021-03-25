//array of zeros, and a list of operations
//for each operation add a value to each elm between two givin indices, inclusive
//return the max value in the arraykk
let queries = [[2, 6, 8],[3, 5, 7], [1, 8, 1], [5, 9, 15]]

const arrayManipulation = (n, q) => {
  let arrOfZeros = new Array(n).fill(0)
  let hashTable = {}

  for (let i = 0; i < q.length; i++) {
    hashTable[i] = q[i]
  } 

  for (let i = 0; i < arrOfZeros.length; i++) {
    let key = `${i}`
    console.log(hashTable[i], i)
  }

  let max = 0
  for (let l = 0; l < arrOfZeros.length; l++) {
    arrOfZeros[l] > max ? max = arrOfZeros[l] : null
    
  }
  return hashTable
}

console.log(arrayManipulation(10, queries))