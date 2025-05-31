module.exports = function (nums, sum) {
  const pair = new Set()

  return nums.some(num => {
    pair.add(sum - num)
    return pair.has(num)
  })
}
