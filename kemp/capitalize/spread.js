export default function(str) {
  let res = ''
  for (const s of str.split(' ')) {
    const [first, ...rest] = s // TODO
    res += `${res && ' '}${first.toUpperCase()}${rest.join('')}`
  }
  return res
}

