import assert from 'node:assert'

const tests = {
  0: 0,
  1: 1,
  2: 1,
  3: 2,
  4: 3,
  5: 5,
  6: 8,
  10: 55
}

export default function(it, fibonacci) {
  for(const i in tests)
    it(
      `${i} → ${tests[i]}`,
      () => assert.equal(fibonacci(+i), tests[i]))
}
