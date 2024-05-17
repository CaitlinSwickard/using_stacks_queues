
// Write a function count_longest that takes a queue of characters as a parameter and returns the length of the longest consecutive subsequence. 
// For example: count_longest( Q[h, e, l, l, o] )	2
// Your solution should not use any built-in or library functions other than those in the Stack and Queue classes provided.Your solution should not use any built-in or library functions other than those in the Stack and Queue classes provided.


const Stack = require('./Stack');
const Queue = require('./Queue');


const countLongest = (q) => {
  console.log('hi')

}



const main = () => {
  console.log(countLongest("hello") === 2)
  console.log(countLongest("mmmmm") === 5)
  console.log(countLongest("heee") === 3)
}
main()


module.exports = countLongest