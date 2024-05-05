function parseJSON(jsonString) {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      if (error instanceof SyntaxError) {
        console.error("Invalid JSON:", jsonString);
        console.error("Error:", error.message);
      } else {
        console.error("Unexpected error:", error);
      }
      return null; 
    }
  }
  const validJSON = '{"name": "Alice", "age": 30}';
  const invalidJSON1 = '{"name": "Bob", age: 25}';
  const invalidJSON2 = "{invalid data}"; 
  const parsedObject1 = parseJSON(validJSON);
  const parsedObject2 = parseJSON(invalidJSON1);
  const parsedObject3 = parseJSON(invalidJSON2);
  console.log("Parsed object 1:", parsedObject1);
  console.log("Parsed object 2:", parsedObject2);
  console.log("Parsed object 3:", parsedObject3);