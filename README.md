# JavaScript Bug: TypeError: Cannot read properties of null (reading 'length')

This repository demonstrates a common JavaScript error: `TypeError: Cannot read properties of null (reading 'length')`.  The error occurs when attempting to access the `length` property of a value that is `null` or `undefined`. 

## Bug Description
The `bug.js` file contains a function `foo` that attempts to access the `length` property of an input `x` without proper error handling. If `x` is `null`, `undefined`, or any other non-object lacking a `length` property, it will throw the error.

## Solution
The `bugSolution.js` file provides a corrected version that explicitly handles cases where the input is `null` or `undefined`, and also ensures the input has a `length` property before accessing it.