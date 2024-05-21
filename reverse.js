
// Write a function reverse in python that takes a queue as a parameter and returns a new queue in reverse order. 
// Your solution should not use any built-in or library functions other than those in the Stack and Queue classes provided.
// Hint: use a stack to help! You can destroy the queue & make it empty!


const Stack = require('./Stack');
const Queue = require('./Queue');


function reverse(q_orig) {
  // make a new Q to hold reversed elements
  let new_q = new Queue();
  // make a new stack to push original queue onto 
  let stack = new Stack();

  // Dequeue items from the queue and push them onto the stack 
  while (!q_orig.isEmpty()) {
    stack.push(q_orig.dequeue());
    console.log(stack)
  }
  // Pop items from the stack and enqueue them into the new queue
  while (!stack.isEmpty()) {
    new_q.enqueue(stack.pop());
  }

  return new_q;
}

function main() {

  const q = new Queue([1, 2, 3, 4]);
  console.log("Original queue:");
  console.log(q.print());

  console.log("Reversed queue:");
  const reversed = reverse(q);
  console.log(reversed.print());

}

main();

module.exports = reverse