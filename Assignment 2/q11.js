function isNumber(value) {
   
    if (typeof value === 'number' && isFinite(value)) {
      return true;
    }
  
    return Number.isNaN(value) || value === Infinity || value === -Infinity;
  }
  
  const num1 = 10;
  const num2 = "hello";
  const num3 = NaN;
  const num4 = Infinity;
  
  console.log("isNumber(num1):", isNumber(num1));
  console.log("isNumber(num2):", isNumber(num2));
  console.log("isNumber(num3):", isNumber(num3));
  console.log("isNumber(num4):", isNumber(num4));