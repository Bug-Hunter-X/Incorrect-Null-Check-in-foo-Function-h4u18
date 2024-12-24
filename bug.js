function foo(a, b) {
  if (a === null || b === null) {
    return 0; // This will be problematic if a or b are actually 0
  }
  return a + b;
}