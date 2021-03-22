/*function sayhi(){
    console.log("Hiiii")
}

sayhi()*/

(function(){
    console.log("Hiiii")
}())


//////////Generator/////////
function loop(userInput){
    for(i=0;i<userInput;i++){
        console.log(i)
    }
}

loop(4)
0
1
2
3

function * loop(userInput){
    for(i=0;i<userInput;i++){
       yield i
    }
}

var data = loop(4)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: undefined, done: true}