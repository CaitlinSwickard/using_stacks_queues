
// const Stack = require('./Stack');
const Queue = require('./Queue');
const reverse = require('./reverse')

describe('reverse function', () => {
  test('should reverse a queue of 4 elements', () => {
    expect(reverse(new Queue([1, 2, 3, 4]))).toEqual(new Queue([4, 3, 2, 1]));
  });

  test('should reverse an empty queue', () => {
    expect(reverse(new Queue([]))).toEqual(new Queue([]));
  });

  test('should reverse a queue with one element', () => {
    expect(reverse(new Queue([0]))).toEqual(new Queue([0]));
  });

  test('should reverse a queue of strings', () => {
    expect(reverse(new Queue(Array.from("hello")))).toEqual(new Queue(Array.from("olleh")));
  });

  test('should reverse a queue of many elements', () => {
    expect(reverse(new Queue(Array.from({ length: 21 }, (_, i) => i * 5)))).toEqual(new Queue(Array.from({ length: 21 }, (_, i) => 100 - i * 5)));
  });

  test('should reverse a queue of numbers in a string', () => {
    expect(reverse(new Queue(Array.from("23762304").map(Number)))).toEqual(new Queue(Array.from("40326732").map(Number)));
  });

  test('should reverse a queue with one string element', () => {
    expect(reverse(new Queue(["a"]))).toEqual(new Queue(["a"]));
  });

  test('should reverse a queue with one negative number element', () => {
    expect(reverse(new Queue([-5]))).toEqual(new Queue([-5]));
  });

});
