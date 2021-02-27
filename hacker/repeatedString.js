const repeatedString = (s, n) => {
  let a = 0;
  let na = 0;
   let end = n % s.length;

  for (let i = 0; i < s.length; i++) {
    s[i] === "a" ? (a += 1) : (na += 1);
  }

  if (n % s.length === 0 && s.length < n) {
    return (n / s.length) * a;
  }

  if (n % s.length != 0 && s.length < n) {
    let j = 0;
    let net = ((n - (n % s.length)) / s.length) * a;

    for (let i = 0; i < s.slice(0, end).length; i++) {
      s[i] === "a" ? (j += 1) : null;
    }
    return j + net;
    
  } else {
    let j = 0;

    for (let i = 0; i < s.slice(0, n).length; i++) {
      s[i] === "a" ? (j += 1) : null;
    }
    return j;
  }
};

module.exports = repeatedString;
