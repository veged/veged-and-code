export default function fizzbuzz(num) {
  const r = []

  for(let i1 = 1, i3 = 0, i5 = 0; i1 <= num; i1++) {
    if(i1 - i3 === 3) i3 = i1
    if(i1 - i5 === 5) i5 = i1

    let s = ''
    if(i1 === i3) s += 'fizz'
    if(i1 === i5) s += 'buzz'

    r.push(s || i1)
  }

  return r
}
