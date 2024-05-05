function isRegExp(value) {
    return toString.call(value) === '[object RegExp]';
  }
  const str1 = "hello";
  const regex2 = "not a regex";
  console.log("isRegExp(str1):", isRegExp(str1));
  console.log("isRegExp(regex2):", isRegExp(regex2));