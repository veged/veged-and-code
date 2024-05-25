import assert from 'node:assert'

const tests = [
  ['Aa', [{ from: 'a', to: 'b' }], 'Ab'],
  ['ab', [{ from: 'a', to: 'b' }], 'bb'],
  ['ab', [{ from: 'a', to: 'ba' }, { from: 'b', to: 'r' }], 'bar'],
  ['ab', [{ from: 'b', to: 'bar' }, { from: 'ab', to: 'foo' }], 'foo'],
  ['ab', [{ from: 'a', to: 'bar' }, { from: 'ab', to: 'foo' }], 'foo'],
  ['ab', [{ from: 'ab', to: 'foo' }, { from: 'a', to: 'bar' }], 'barb'],
  ['ab', [{ from: 'a', to: 'foo' }, { from: 'a', to: 'bar' }], 'barb'],
  ['ab', [], 'ab']
]

export default function(it, decode) {
  for(const [m, r, a] of tests)
    it(
      `${m} + ${r} → ${a}`,
      () => assert.deepEqual(decode(m, r), a))
}
