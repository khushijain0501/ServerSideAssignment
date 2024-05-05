function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
      const pivotIndex = partition(arr, low, high);
      quickSort(arr, low, pivotIndex - 1); // Sort left subarray
      quickSort(arr, pivotIndex + 1, high); // Sort right subarray
    }
    return arr;
  }
  
  function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
  
    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
      }
    }
  
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its final position
    return i + 1;
  }
  
  // Example usage
  const numbers = [5, 3, 8, 2, 1, 4];
  const sortedNumbers = quickSort(numbers);
  console.log("Sorted array:", sortedNumbers);