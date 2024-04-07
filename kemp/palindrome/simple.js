export default function(s1) {
  const s2 = s1.toLowerCase()
  return s2 === [...s1].reverse().join('')
}
