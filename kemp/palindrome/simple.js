export default function(s) {
  s = s.toLowerCase()
  return s === [...s].reverse().join('')
}
