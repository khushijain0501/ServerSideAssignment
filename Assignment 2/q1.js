function findWordIndices(text, word) {
    const indices = [];
  let i = 0;
  while (true) {
    i = text.indexOf(word, i);
    if (i === -1) {
      break;
    }
    indices.push(i);
    i += word.length; // Move the search index ahead by the word length
  }
  return indices;
}
const text = "This is a string with the word apple appearing multiple times. How many apples can you find?";
const word = "apple";

const indices = findWordIndices(text, word);

if (indices.length > 0) {
  console.log(`The word '${word}' appears at indices: ${indices}`);
} else {
  console.log(`The word '${word}' is not found in the text.`);
}