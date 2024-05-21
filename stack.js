// Stack Class - LAST IN FIRST OUT
class Stack {

  constructor() {
    this.stack = [];
  }

  // Functions to call on stack
  // push(item) - add to top of stack
  push(data) {
    this.stack.push(data);
  }

  // pop() - removes item from top of stack and returns it
  pop() {
    if (this.stack.length == 0)
      return "Underflow";
    return this.stack.pop();
  }

  // peek() - return top element of stack, does not remove it
  peek() {
    return this.stack[this.stack.length - 1];
  }

  // isEmpty() - returns true if stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // printStack()
  print() {
    let str = '';
    for (let i = 0; i < this.stack.length; i++)
      str += this.stack[i] + " ";
    return str;
  }

  // clear() - removes all items from stack
  clear() {
    this.stack = [];
  }

  toString() {
    return this.stack.toString();

  }

  [Symbol.iterator]() {
    let index = this.stack.length - 1;
    return {
      next: () => ({
        value: this.stack[index--],
        done: index < 0
      })
    }
  }
}

module.exports = Stack;
