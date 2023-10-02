export default function(num) {
  const res = Array(num).fill('')
  for (let i = 2; i < num; i += 3) res[i] += 'fizz'
  for (let i = 4; i < num; i += 5) res[i] += 'buzz'
  for (let i = 0; i < num;) res[i] ||= ++i // TODO: i++, while
  return res
}

