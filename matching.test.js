
const Stack = require('./Stack');
const Queue = require('./Queue');
const matcher = require('./matching')


test('match a single pair', () => {
  expect(matcher('[]')).toBe(true)
})

test('match single pair', () => {
  expect(matcher('{}')).toBe(true)
})

test('string', () => {
  expect(matcher('hello')).toBe(true)
})

test('arith', () => {
  expect(matcher("(45 + 36) - 5")).toBe(true)
})

test('mix1', () => {
  expect(matcher("[()]")).toBe(true)
})

test('mix2', () => {
  expect(matcher("{[()]}")).toBe(true)
})

test('mix lots', () => {
  expect(matcher("{[()]} [ ] ( ) ([{}]) { () [ [] ( {} ) ] } ( {[()] [] } {} )")).toBe(true)
})

test('fail paren', () => {
  expect(matcher("( ( a )")).toBe(false)
})

test('fail mix', () => {
  expect(matcher("{[()}()]")).toBe(false)
})

test('fail uneven mix', () => {
  expect(matcher("a[b]{")).toBe(false)
})




