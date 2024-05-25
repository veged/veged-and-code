import assert from 'node:assert'

const tests = {
  '': true,
  топот: true,
  Saippuakivikauppias: true,
  привет: false,
  'Madam, I’m Adam': true
}

export default function(it, fibonacci) {
  for(const i in tests)
    it(
      `${i} → ${tests[i]}`,
      () => assert.deepEqual(fibonacci(i), tests[i]))
}
