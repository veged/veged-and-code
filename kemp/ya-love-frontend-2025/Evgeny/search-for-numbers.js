const assert = require('node:assert/strict');

const check = function(nums, k) {
  if(!Number.isSafeInteger(k)) return false
  if(!Array.isArray(nums) || 0 === nums.length) return false

  const sortedNums = nums.toSorted((a,b) => Math.sign(a - b))
  const maxNumberFilter = sortedNums[0] < 0 ? Math.abs(sortedNums[0]) + k : k
  const filteredNums = sortedNums.filter(i => Number.isSafeInteger(i) && i <= maxNumberFilter)

  if(0 === filteredNums.length) return false

  let lastIndex = filteredNums.length - 1
  while(lastIndex > 0) {
    for(let i = 0; i < lastIndex; i++) {
      if(filteredNums[i] + filteredNums[lastIndex] === k) return true
      if(filteredNums[i] + filteredNums[lastIndex] > k) break
    }
    lastIndex--
  }

  return false
}

assert.equal(check([], 2), false);
assert.equal(check([1], 2), false);
assert.equal(check([-5,10,13,1,0], 2), false);
assert.equal(check([-5,10,13,1,0], 8), true);
assert.equal(check([-100500, 200, 300, 1, 2, -4, -30], 8), false);

