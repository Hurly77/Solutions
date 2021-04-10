const twoStrings = (s1, s2) => {
  let map = {}
  for(let i = 0; i < s1.length; i++){
    if(!map[s1[i]]){
      map[s1[i]] = true
    }
  }
  return map
  for(let j = 0; j < s2.length; j++){
    if(map[s2[j]]){
      return 'YES'
    }
  }
  return 'NO'
}