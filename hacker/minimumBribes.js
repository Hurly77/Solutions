let v = require('./data')
const minimumBribes = (q) => {
  let n = 0;
  let p = 0;
  for (let i = 0; i < q.length; i++) {
    if((i+1)-(q[i]) < 0){
     n += (i+1)-(q[i]) 
    }
    if((i+1)-(q[i]) > 0){
      p+=1
    }
  }
  console.log(n, p)
  return (n, p)
}

console.log(minimumBribes([1,2,5,3,7,8,6,4]))
//3, 2, 5, 4, 1
