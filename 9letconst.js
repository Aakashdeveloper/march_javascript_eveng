var > we can redeclare and reassign both
let > we cannot redeclare but can reassign
const > we cannot redeclare nor reassign

var a = 10

var a; // declare variable
a=10   // assignment

> var a = 10
undefined
> a
10
> var a = 11
undefined
> a
11
> a = 12
12
> a
12
> let b = 10
> b
10
> 
> let b = 1
Uncaught SyntaxError: Identifier 'b' has already been declared
> b= 1
1
> const c = 10
undefined
> c
10
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c =11
Uncaught TypeError: Assignment to constant variable.