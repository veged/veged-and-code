export default function(str) {
  if (!str) return true

  let left = 0,
    right = str.length - 1

  do {
    const leftChar = str[left].toLowerCase(),
      rightChar = str[right].toLowerCase()

    switch (true) {
      case leftChar === leftChar.toUpperCase():
        left++
        continue
      case rightChar === rightChar.toUpperCase():
        right--
        continue
      case leftChar !== rightChar:
        return false
    }
  } while (++left < --right)

  return true
}
