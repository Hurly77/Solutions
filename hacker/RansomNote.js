const {array} = require("@hurly77/rad-arrays");
const rad = require("@hurly77/rad-arrays");
const times = rad.array("string", 3);
const note = rad.array("string", 300);
//apgo clm w lxkvg mwz elo bg elo lxkvg elo apgo apgo w elo bg
//elo lxkvg bg mwz clm w
// - case Sensitive, only whole words
// - cont concat, or substing
// true or false can the array contain all the same words

//make a hash map of the the key words in the note then if each word has a value of at least one return true.

const ransomNote = (mag, note) => {
  const map = {};
  for (let i = 0; i < note.length; i++) {
    if (!map[note[i]]) {
      map[note[i]] = 1;
    } else {
      map[note[i]] += 1;
    }
  }
  for (let j = 0; j < mag.length; j++){
    let key = map[mag[j]]
    key ? key -= 1 : null
    if(key && key < 0){
      console.log("No")
      return
    }
  }
    console.log("Yes")
};

console.log(ransomNote(times, note));
