class Node {
    constructor(data) {
      this.data = data;
      this.next = null; 
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null; 
    }
  
    isEmpty() {
      return this.head === null;
    }
  }
  const linkedList = new SinglyLinkedList();
  console.log("Is the list empty:", linkedList.isEmpty()); 
  linkedList.head = new Node(10);
  console.log("Is the list empty:", linkedList.isEmpty());