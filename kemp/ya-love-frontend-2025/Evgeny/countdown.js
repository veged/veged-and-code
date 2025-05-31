const assert = require('node:assert/strict');

const createCountdown = (n) => {
  if(!Number.isFinite(n) || n <= 0) return () => 0

  return () => n <= 0 ? 0 : n--;
}

const countDown = createCountdown(5)

assert.equal(countDown(), 5);
assert.equal(countDown(), 4);
assert.equal(countDown(), 3);
assert.equal(countDown(), 2);
assert.equal(countDown(), 1);
assert.equal(countDown(), 0);
assert.equal(countDown(), 0);
assert.equal(countDown(), 0);
