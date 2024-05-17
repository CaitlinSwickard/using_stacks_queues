// Queue class - FIRST IN FIRST OUT

class Queue {
  constructor() {
    this.items = {}
    this.frontIndex = 0
    this.backIndex = 0
  }

  // Functions to class on Queue
  // enqueue(item) - adds element to the queue (end of line)
  enqueue(element) {
    this.items.push(element);
  }

  // dequeue() -  removes front element from the queue (front of the line) and returns it
  dequeue() {
    if (this.isEmpty())
      return "Underflow";
    return this.items.shift();
  }

  // peek() - returns the front element from the queue, does not remove it
  peek() {
    if (this.isEmpty())
      return "No element in Queue";
    return this.items[0];
  }

  // isEmpty() - return true is Queue is empty
  isEmpty() {
    return this.items.length == 0;
  }

  // printQueue()
  printQueue() {
    let str = '';
    for (let i = 0; i < this.items.length; i++)
      str += this.items[i] + " ";
    return str;
  }
}