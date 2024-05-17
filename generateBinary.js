// Write a function generate_binary_numbers that takes a number N as a parameter and returns a queue of binary number strings from 1 to N without using any built-in or library functions like bin(). 
// In fact, your solution should not use any built-in or library functions other than those in the Stack and Queue classes provided. The front of the queue begins @ '1'. If N is too small, return an empty queue. 
// A successful solution does not calculate binary numbers mathematically but only adds strings together.

// const Stack = require('./Stack');
const Queue = require('./Queue');


const generateBinary = (n) => {
  

}



const main = () => {
  console.log(generateBinary(2) === new Queue(['1', '10']))
  console.log(generateBinary(3) === new Queue(['1', '10', '11']))
  console.log(generateBinary(6) === new Queue(['1', '10', '11', '100', '101', '110']))
}
main();


module.exports = generateBinary