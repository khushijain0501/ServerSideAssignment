function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }
  
  const numbers = [10, 20, 30, 40, 50];
  const target = 30;
  
  const index = linearSearch(numbers, target);
  
  if (index !== -1) {
    console.log(`The target element '${target}' is found at index ${index}`);
  } else {
    console.log(`The target element '${target}' is not found in the array.`);
  }