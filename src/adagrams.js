
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
const scoreChart = {
    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z: 10,
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
  let score = 0;
  
  for(let char of word){
    char = char.toUpperCase();
    score += scoreChart[char]
  }
  if(word.length >= 7 && word.length <= 10){
    score += 8
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let winningWord = '';
  let winningScore = 0;

  for (let word of words) {
    const currScore = scoreWord(word);

    if (currScore > winningScore) {
      winningScore = currScore;
      winningWord = word;
    } else if (currScore === winningScore) {
      if (winningWord.length !== 10 && (word.length === 10 || word.length < winningWord.length)) {
        winningWord = word;
      }
    }
  }

  return { word: winningWord, score: winningScore };
};

const lettersWithFreq = (lettersInHand) =>{
  let freqMap = {};
  for (let letter of lettersInHand){
    letter = letter.toLowerCase();
    freqMap[letter] = (freqMap[letter] || 0) +1 
  }
  return freqMap;
}
