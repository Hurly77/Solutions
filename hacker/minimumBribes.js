let v = require('./data')
const minimumBribes = (q) => {
  let log = 0;
  for (let i = 1; i < q.length; i++) {
    let current = q[i - 1]
    let next = q[i]
    if(q[i - 1]/i > 2 && i != 1){
      log = "Too chaotic"
      break
    }
    if(log > 1000000){
      log = "limit reached"
      break}
    
    if(q[i - 1] > q[i]){
      for (let j = 0; j < array.length; j++) {
        

      }
    }
  }
  return (log)
}

console.log(minimumBribes(v))
//3, 2, 5, 4, 1
