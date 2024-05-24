export default function(n) {
  const result = []
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        result.push('fizzbuzz')
        break
      case i % 3 === 0:
        result.push('fizz')
        break
      case i % 5 === 0:
        result.push('buzz')
        break
      default:
        result.push(i)
    }
  }
  return result
}
