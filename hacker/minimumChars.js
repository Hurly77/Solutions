const miniMum = (arr) => {
  arr.sort((a, b) => a - b)
  return arr
};
console.log(miniMum([9,8,3,7,3,2,1]));
