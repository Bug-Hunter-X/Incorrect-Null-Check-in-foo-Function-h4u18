# Incorrect Null Check in JavaScript Function

This repository demonstrates a common error in JavaScript involving incorrect null checks. The `foo` function is intended to return 0 if either `a` or `b` is null. However, it fails when `a` or `b` is actually 0, leading to incorrect results.

## Bug

The provided code contains a subtle bug where the null check is flawed.  It returns 0 if either `a` or `b` are strictly equal to `null`, but it treats the number `0` as falsy in the conditional, leading to unexpected behavior.

## Solution

The solution involves a more robust check using loose comparison (==) to correctly handle the case where `a` or `b` is either `null` or `0`.

## How to Reproduce

1. Clone this repository.
2. Open the `bug.js` and `bugSolution.js` files in your preferred JavaScript environment.
3. Run the `foo` function with different inputs, including null and 0, to observe the difference between the buggy and fixed versions.
