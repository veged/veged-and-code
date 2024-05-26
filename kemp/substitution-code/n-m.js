export default function decode(message, replaces) {
  let pos = 0, result = ''
  while(pos < message.length) {
    let match
    for(const r of replaces)
      if(message.substring(pos, pos + r.from.length) === r.from)
        match = r
    if(match) {
      result += match.to
      pos += match.from.length
    } else {
      result += message[pos]
      pos++
    }
  }
  return result
}
