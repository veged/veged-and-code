function isLetter(c) { return c.toLowerCase() !== c.toUpperCase() }
function isEqual(a, b) { return a.toLowerCase() === b.toLowerCase() }

export default function(str) {

  let left = 0,
    right = str.length - 1

  while (left < right) {
    const leftChar = str[left],
      rightChar = str[right]

    if (!isLetter(leftChar)) {
      left++
      continue
    }

    if (!isLetter(rightChar)) {
      right--
      continue
    }

    if (!isEqual(leftChar, rightChar)) return false

    left++
    right--
  }

  return true
}
