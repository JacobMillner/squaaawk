const transformWord = (word: string): string => {
  return word;
};

const getWordStart = (word: string, sliceLen: number): string => {
  return word.slice(0, sliceLen);
};

const getWordMetrics = (word: string): string => {
  let wordStartLen: number;
  let wordEndLen: number;
  let wordLen: number = word.length;
  let wordStart: string;
  let wordEnd: string;
  if (wordLen > 3) {
    wordStart = getWordStart(word, 3);
    wordEnd = word.slice(wordLen - 3, wordLen - 1);
  }
  if (wordLen < 3) {
    wordStart = getWordStart(word, 1);
    wordEnd = word.slice(wordLen - 2, wordLen - 1);
  }
  return word;
};

export const cipher = (text: string): string => {
  let textArray: string[] = text.split(' ');
  let cipherText: string;
  textArray.map((word) => {
    let cipherWord: string = transformWord(word);
    cipherText.concat(cipherWord, ' ');
  });

  return text;
};
