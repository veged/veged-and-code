export default function(str) {
  let res = ''
  for (const [first, ...rest] of str.split(' ')) {
    res += `${res && ' '}${first.toUpperCase()}${rest.join('')}`
  }
  return res
}

