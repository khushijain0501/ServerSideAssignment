class Stack {
    constructor() {
      this.items = []; 
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      return this.items.pop(); 
    }
  
    peek() {
      return this.items[this.items.length - 1]; 
    }
  
    isEmpty() {
      return this.items.length === 0; 
    }
    isPresent(element) {
      return this.items.includes(element); 
    }
  }
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log("Is 20 present in the stack:", stack.isPresent(20));
  console.log("Is 40 present in the stack:", stack.isPresent(40));