
// const Queue = require('./Queue');
const countLongest = require('./countLongest')

// basic test template
// test('', () => {
//   expect().toBe()
// })

test('Count Hello Test', () => {
  expect(count_longest(new Queue(Array.from("hello")))).toBe(2);
});

test('Count M5 Test', () => {
  expect(count_longest(new Queue(Array.from("m".repeat(5))))).toBe(5);
});

test('Count O3 Test', () => {
  expect(count_longest(new Queue(Array.from("hooop")))).toBe(3);
});



// def test_count_o4():
//     assert count_longest(Queue([l for l in "oooohh"])) == 4

// def test_count_oe4():
//     assert count_longest(Queue([l for l in "oooohheeee"])) == 4

// def test_count_e5():
//     assert count_longest(Queue([l for l in "oooohheeeee"])) == 5

// def test_count_e6():
//     assert count_longest(Queue([l for l in "oooohhhhhaaeeeeee"])) == 6

// def test_count_empty():
//     assert count_longest(Queue([ ])) == 0

// def test_count_m1():
//     assert count_longest(Queue([l for l in "m"])) == 1

// def test_count_sym():
//     assert count_longest(Queue([l for l in "+__--___----__--_+"])) == 4