const ransomNote = (mag, note) => {
  let map = {};
  for (let i = 0; i < note.length; i++) {
    (map[note[i]] += 1) || (map[note[i]] = 1);
  }

  for (let j = 0; j < mag.length; j++) {
    if (map[mag[j]]) {
      map[mag[j]] -= 1;
    }
  }
  for (key in map) {
    if (map[key] > 0) {
      console.log('No');
      return;
    }
  }
  console.log('Yes');
};
