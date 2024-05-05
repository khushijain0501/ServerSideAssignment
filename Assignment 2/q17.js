function splitStringToWords(text) {
   
    const words = text.trim().split(/\s+/);
    return words;
  }
  const text = " This string has multiple  words. ";
  const words = splitStringToWords(text);
  console.log("Split words:", words);