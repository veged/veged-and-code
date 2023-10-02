import assert from 'node:assert'

const tests = [
  [[1, 2, 3, 3, 3], [1, 2, 3]],
  [[1, 1, 2, 3, 3, 3], [1, 2, 3]],
  [[1, 2, 2, 3], [1, 2, 3]]
]

export default function(it, fibonacci) {
  for(const [i, o] of tests)
    it(`${i} → ${o}`, () => {
      assert.deepEqual(fibonacci(i), o)
    })
}
