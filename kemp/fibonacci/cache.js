const CACHE = [0, 1]

export default function fibonacci(n) {
  return CACHE[n] ??= fibonacci(n - 1) + fibonacci(n - 2)
}
