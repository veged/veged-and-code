export default function fizzbuzz(n) {
  const r = []
  for(let i = 1; i <= n; i++) {
    let s = ''
    if(i % 3 === 0) s += 'fizz'
    if(i % 5 === 0) s += 'buzz'
    r.push(s || i)
  }
  return r
}
