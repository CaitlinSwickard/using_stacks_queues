// Queue class - FIRST IN FIRST OUT

class Queue {
  constructor(list) {
    this.queue = list || [];
    // this.frontIndex = 0
    // this.backIndex = 0
  }

  // Functions to class on Queue
  // enqueue(item) - adds element to the queue (end of line)
  enqueue(data) {
    this.queue.push(data);
  }

  // dequeue() -  removes front element from the queue (front of the line) and returns it
  dequeue() {
    if (this.isEmpty())
      return "Underflow";
    return this.queue.shift();
  }

  // front()|| PEEK - returns the front element from the queue, does not remove it
  front() {
    if (this.isEmpty())
      return "No element in Queue";
    return this.queue[0];
  }

  // tail()|| PEEK - returns the last element of the queue, does not remove it
  tail() {
    return this.queue[this.queue.length - 1];
  }


  // isEmpty() - return true is Queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }

  // size() - returns size of queue
  size() {
    return this.queue.length;
  }

  // clear() - clear the queue
  clear() {
    this.queue = []
  }

  // printQueue()
  print() {
    let str = '';
    for (let i = 0; i < this.queue.length; i++)
      str += this.queue[i] + " ";
    return str;
  }

  toString() {
    return this.queue.toString();
  }

  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => ({
        value: this.queue[index++],
        done: index > this.queue.length
      })
    }
  }
}

module.exports = Queue;
