function swapCase(str) {
    return str.split("").map(char => {
      if (char.toUpperCase() === char) {
        return char.toLowerCase();
      } else if (char.toLowerCase() === char) {
        return char.toUpperCase();
      } else {
        return char;
      }
    }).join("");
  }
  const text = "Hello WORLD! This is a String with MiXeD cAsEs.";
  const swappedText = swapCase(text);
  console.log("Original text:", text);
  console.log("Swapped case:", swappedText);