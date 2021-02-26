const rotLeft = (a, d) => {
  let shifted = a.splice(0, d)
  return a.concat(shifted)
}