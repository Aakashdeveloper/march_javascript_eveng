function
method
arrow function
IFFI
Generator

///////
var a = 10
var b = 20
a+b
30

/////function/////
function add(a,b){
    return a+b
}

add(1,2)
3
add(4,6)
10
add('ab','cd')
"abcd"

function isEven(userInput){
    var out;
    if(userInput%2==0){
        out=`Number ${userInput} is even`
    }else{
        out=`Number ${userInput} is odd`
    }
    return out
}

isEven(2,3)
"Number 2 is even"
isEven(4)
"Number 4 is even"
isEven(45)
"Number 45 is odd"

//////Rest//////
function sum(...args){
    console.log(args)
}

sum(1,3,4,5,6)
[1, 3, 4, 5, 6]


function test(a,b){
    return a,b
}
undefined
test(1,2)
2