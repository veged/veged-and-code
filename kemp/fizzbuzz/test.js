import assert from 'node:assert'

const tests = {
  3: [1, 2, 'fizz'],
  5: [1, 2, 'fizz', 4, 'buzz'],
  16: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]
}

export default function(it, fibonacci) {
  for(const i in tests)
    it(
      `${i} → ${tests[i]}`,
      () => assert.deepEqual(fibonacci(+i), tests[i]))
}
