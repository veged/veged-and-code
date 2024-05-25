export default function sumExcept(a, i, n) {
  Number.isInteger(i) || (i = 0)
  Number.isInteger(n) || (n = 0)

  let r = 0, j = 0

  while(j < a.length) {
    Number.isInteger(a[j]) && (r += a[j])
    j < i - 1 || j >= i + n ? j++ : (j = i + n)
  }

  return r
}
