let v = require("./data");
let vs = v.split(" ");
const aa = () => {
  for (let i = 0; i < vs.length; i++) {
    parseInt(vs[i]);
  }
  return vs;
};

const myTest = (q) => {
  let swaps = 0;

  for (let i = 0; i < q.length; i++) {
    let bribes = q[i] - (i + 1);
    let maxAdvance = q[i] - 2 > 0 ? q[i] - 2 : 0;

    if (bribes > 2) {
      console.log("Too chaotic");
      return;
    }

    for (let j = maxAdvance; j < i; j++) {
      if (q[j] > q[i]) swaps++;
    }
  }
  console.log(swaps);
};
myTest(aa());
