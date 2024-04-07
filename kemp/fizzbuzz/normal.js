export default function(length) {
  return Array.from(
    { length },
    (_, i) => ((i + 1) % 3 ? "" : "fizz")
      + ((i + 1) % 5 ? "" : "buzz")
      || (i + 1));
}
