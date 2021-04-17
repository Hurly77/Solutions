const rad = require('@hurly77/rad-arrays');
const array = rad.array('integer', 1, 100);

const twoSum = (nums, target) => {
	let idx1;
  let idx2;
  let j = target
  let g = 0;
  let map = {};
  nums.sort()

  for(let i = 0; i < nums.length; i++){
      if(nums[i] >! target){
        map[nums[i]] +=
      }
  }
console.log(map)
  while(!idx1 || !idx2){
    if(nums[map[j]] + nums[map[g]] === target){
      return [map[j], map[g], {j: j, g: g}]
    }
    j--
    g++
    if(g > nums.length){
      break
    }
  }
  return 
};

console.log(twoSum([0, 3, 3, 0], 6));
