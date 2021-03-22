for
while
do while
for of
for in > object

/////////
for> generate series of value or iterate over the array 
//////


for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ["London", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}

London
Paris
NewYork
Delhi
Amsterdam
Venice

var city = ["London", "Paris", "NewYork",['Red','Yellow','Green'], "Delhi", "Amsterdam", "Venice"]

for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    } 
}

//////
while
///////
var i =10;
while(i<5){
    console.log(i);
    i++
}

//////
do while
///////
var i =10;
do{
    console.log(i);
    i++
}
while(i<5)

//////
for of 
////////
var city = ["London", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice"]
for(mycity of city){
    console.log(mycity)
}


var sample = [1,2,3,4]
var sum=0
for(values of sample){
    sum +=values
}
console.log(sum)


var city = ["London", "Paris",['Red','Yellow','Green'], "Amsterdam", "Venice"]
for(mycity of city){
    if(Array.isArray(mycity)){
        for(color of mycity){
            console.log(color)
        }
    }else{
        console.log(mycity)
    }
    
}