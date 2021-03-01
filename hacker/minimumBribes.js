let v = require('./data');
let vs = v.split(' ');
const aa = () => {
	for (let i = 0; i < vs.length; i++) {
		parseInt(vs[i]);
	}
  return vs
};

const myTest = (a) => {
  let gt = 0
  let lt = 0
  let z = 0
  for(let i = 0; i < a.length;i++){
      lt += (a[i] - i+1 > 0 ? 1 : 0)
      gt += (a[i] - (i+1) < 0 ? 1 : 0)
      z += (a[i] - (i+1) === 0? 1: 0)
      if(a[i]/(i+1) > 2 && (i+1) !== 1){
        console.log("Too chaotic")
        break
      }
      console.log(lt, gt, z, i)
  }
  console.log(gt + lt + z) 
}
myTest(aa())
