
const LETTER_POOL = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

export const drawLetters = () => {
  let letterPool = [];
  for (const [k,v] of Object.entries(LETTER_POOL)){
    letterPool.push([k,v]);
  }
  let hand = [];
  for (let i=0; i<10; i++){
    const ind = Math.floor(Math.random() * letterPool.length);
    hand.push(letterPool[ind][0])
    letterPool[ind][1] -= 1
    if (letterPool[ind][1] === 0){
      letterPool.splice(ind, 1);
    }
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const freqMap = lettersWithFreq(lettersInHand);
  for (let letter of input){
    letter = letter.toLowerCase();
    if(freqMap[letter] != null && freqMap[letter] > 0) {
      freqMap[letter] = freqMap[letter]-1
    } else{
      return false
    }
  }
  return true
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};

const lettersWithFreq = (lettersInHand) =>{
  let freqMap = {};
  for (let letter of lettersInHand){
    letter = letter.toLowerCase();
    freqMap[letter] = (freqMap[letter] || 0) +1 
  }
  return freqMap;
}
