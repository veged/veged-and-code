export default function fizzbuzz(n) {
  const r = []
  for(let i = 1; i <= n; i++) {
    let s = ''
    i % 3 || (s += 'fizz')
    i % 5 || (s += 'buzz')
    r.push(s || i)
  }
  return r
}
