Es5 (ecma Script 5)
Es6 (ecma Script 6)

DataTypes
String = "hii" 'fff' '3423' "45" 'f4433' 'true'
Number = 543  35345343 43.4334 .34545
Boolean = true false 
null
undefined

//////////////
Es5
////

var a = "Hi"
var b = 10
var c = true
undefined
typeof(a)
"string"
typeof(b)
"number"
typeof(c)
"boolean"
var d = "878"
undefined
typeof(d)
"string"
var e = 10.876786
undefined
typeof(e)
"number"

////


var a = 10
var b = 20
undefined
a+b (add)
30
a-b
-10
a*b
200
a/b
0.5
b%a (modules)
0
4%2
0
4%3
1

2%4
2
3%4
3


var a = "Hi"
var b = "Javascript"
undefined
a+b (concat)
"HiJavascript"
a-b
NaN (not a number)
a*b
NaN
a/b
NaN
a%b
NaN

var a = "hi"
undefined
var b = 10
undefined
a+b
"hi10"
a-b
NaN
b+a
"10hi"


string+string = string
string+number = string
number+string = string
number+number = number

10+"20"+30
"1020"+30
"102030"

"10"+20+30
"1020"+30
"102030"

10+20+"30"
30+"30"
"3030"

10+"20"+30-1
"102030"-1
102029

"10"+20+30-1
"102030"-1
102029

10+20+"30"-1
"3030"-1
3029

"10"-"a"
NaN
"10"+"a"
"10a"
"10"-"1"
9
10-"2"
8
"10"*"2"
20
"10"*"2a"
NaN
"10"/"2a"
NaN
"10"/"2"
5

1-"10a"
NaN
1-"10"
-9