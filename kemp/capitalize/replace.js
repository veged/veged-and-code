export default function(str) {
  return str.replace(/\b\w/g, (c) => c.toUpperCase())
}
