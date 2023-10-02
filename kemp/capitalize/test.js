import assert from 'node:assert'

const tests = {
  'aa bb': 'Aa Bb',
  'x y z': 'X Y Z'
}

export default function(it, fibonacci) {
  for(const i in tests)
    it(`${i} → ${tests[i]}`, () => {
      assert.equal(fibonacci(i), tests[i])
    })
}
