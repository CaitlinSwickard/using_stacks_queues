// Write a function matcher in python that takes a string containing braces ([{()}]) 
// as a parameter and returns True if the braces are matched, and False otherwise. 
// The braces may be nested. Your solution should not use any built-in or library 
// functions other than those in the Stack and Queue classes provided.


const Stack = require('./Stack');
// const Queue = require('./Queue');

// create a checker variable for opening and closing braces
const open = ['(', '[', '{'];
const close = [')', ']', '}'];

const matcher = (str) => {
  let stack = new Stack();

  // loop through the string
  for (let i = 0; i < str.length; i++) {
    // if the str[i] is in the open checker, push it to stack
    if (open.includes(str[i])) {
      stack.push(str[i]);
      // console.log(stack.toString())

      // else check close checker if the stack is not empty
    } else if (close.includes(str[i])) {
      if (stack.isEmpty()) {
        return false;
      }

      //  If the current character is a closing bracket and there are elements in the stack, the top element of the stack (the last opening bracket) is popped off the stack.
      let topChar = stack.pop();
      //finds the index of the current closing bracket in the close array.
      let index = close.indexOf(str[i]);

      // if the popped opening bracket matches the corresponding opening bracket for the current closing bracket.
      if (open[index] !== topChar) {
        return false;
      }
    }
  }
  // if the stack is empty (all brackets are properly matched)
  return stack.isEmpty()
}



const main = () => {
  console.log(matcher("[()]") === true);
}
main();


module.exports = matcher;