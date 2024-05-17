// Stack Class - LAST IN FIRST OUT
class Stack {

  constructor() {
    this.items = [];
  }

  // Functions to call on stack
  // push(item) - add to top of stack
  push(element) {
    this.items.push(element);
  }

  // pop() - removes item from top of stack and returns it
  poop() {
    if (this.items.length == 0)
      return "Underflow";
    return this.items.pop();
  }

  // peek() - return top element of stack, does not remove it
  peek() {
    return this.items[this.items.length - 1];
  }

  // isEmpty() - returns true if stack is empty
  isEmpty() {
    return this.items.length == 0;
  }

  // printStack()
  printStack() {
    let str = '';
    for (let i = 0; i < this.items.length; i++)
      str += this.items[i] + " ";
    return str;
  }
}