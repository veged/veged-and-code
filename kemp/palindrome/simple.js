export default function palindrome(s) {
  s = s.toLowerCase()
  return s === [...s].reverse().join('')
}
