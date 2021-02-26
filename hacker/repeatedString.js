const aF = require('../utils')
const a = new aF('abc', 100)
let array = a.createString()

const repeatedString = (s, n) => {
  let a = 0
  let na = 0;
  let end = n % s.length
  for (let i = 0; i < s.length; i++) {
    s[i] === 'a' ?  a += 1 : na += 1;
  }
  
  if(n % s.length === 0 ){
    return n/s.length * a
  }
  if(n % s.length != 0 && s.length < n){
    let net = Math.floor(n/s.length * a);
    let j = 0;
    console.log(n % s.length, n/s.length * a)
    for (let i = 0; i < s.slice(0, end).length; i++) {
        s[i] === 'a' ? j += 1 : null
      }
      return j + net;
    }else{
      let j = 0
      for(let i = 0; i < s.slice(0, n); i++){
        s[i] === 'a' ? j += 1 : null; 
      }
      return j
    }
}
console.log(repeatedString('epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq', 549382313570))
