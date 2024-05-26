export default function capitalize(str) {
  let res = ''

  for(const s of str.split(' ')) {
    const [first, ...rest] = s
    res += `${res && ' '}${first.toUpperCase()}${rest.join('')}`
  }

  return res
}
