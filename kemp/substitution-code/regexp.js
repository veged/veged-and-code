export default function decode(m, r) {
  if(!r.length) return m

  r = r.reduceRight((a, r) => {
    a[r.from] ??= r.to
    return a
  }, {})

  return m.replace(
    RegExp(Object.keys(r).join('|'), 'g'),
    s => r[s])
}
