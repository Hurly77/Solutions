class makeArray {
  constructor(data, num){
    this.data = data
    this.num = num
  }

  createString(){
    let s = '';
    for(let i=0; i < this.num; i++){
     s += this.data
    }
    return s
  }
}

module.exports = makeArray