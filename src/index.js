import lookalikes from '../lib/lookalike.js';

export function clearInvisible(string) {
  const newString = string.replace(/[\u200B\u200C\u200D\u200E\u200F\u000b\u2028\u2029\uFEFF\u202D]/g, '');

  return newString;
}

export function clearSimilar(str) {
  const replacementMap = lookalikes.reduce((acc, el) => {
    acc[el.abuseLetter] = el.replacementLetter;
    return acc;
  }, {});

  let final = '';
  for (let i = 0; i < str.length; i++) {
    if (replacementMap[str[i]] !== undefined) {
      final += replacementMap[str[i]];
    } else {
      final += str[i];
    }
  }

  return final;
}
