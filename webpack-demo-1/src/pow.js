export function pow(a, n) {
  let x = 1;
  for (let i = 0; i < n; i++) {
    x *= a;
  }
  return x;
}