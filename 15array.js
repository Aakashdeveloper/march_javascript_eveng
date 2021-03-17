Array is a collection of homogenious or hetrogenious data 

var a = [1,4,5,2,6,8] (array of number)
var b = ['dv','ddv','edfdv','dfd'] (array of string)
var c = [true,false,false,true] (array of Boolean)
var d = [3,4,"bvf",345,true,"b","bf"]

var city = ["London","NewYork","Paris","Delhi"]
undefined
city.length
4
city[0]
"London"
city[1]
"NewYork"
typeof(city)
"object"
city[city.length-1]
"Delhi"
city.push('Venice')
5
city
(5) ["London", "NewYork", "Paris", "Delhi", "Venice"]
city.push('Dubai',"Mumbai")
7
city
(7) ["London", "NewYork", "Paris", "Delhi", "Venice", "Dubai", "Mumbai"]
city.pop()
"Mumbai"
city
(6) ["London", "NewYork", "Paris", "Delhi", "Venice", "Dubai"]
city.pop(3)
"Dubai"

var city = ["London", "NewYork", "Paris", "Delhi", "Venice", "Dubai"]
undefined
city.unshift('Pune')
7
city
(7) ["Pune", "London", "NewYork", "Paris", "Delhi", "Venice", "Dubai"]
city.shift()
"Pune"

push > add in the end of array
unshift > add in the begining of array
pop > remove the last value of array
shift > remove the first value of array

var city = ["Pune", "London", "NewYork", "Paris", "Delhi", "Venice", "Dubai"]
undefined
city.slice(2,5)
(3) ["NewYork", "Paris", "Delhi"]
city.slice(1)
(6) ["London", "NewYork", "Paris", "Delhi", "Venice", "Dubai"]
city
(7) ["Pune", "London", "NewYork", "Paris", "Delhi", "Venice", "Dubai"]


city.splice(start,deletecount,values)

var city = ["Pune", "London", "NewYork", "Paris", "Delhi", "Venice", "Dubai"]
undefined
city.splice(2,0,'Mumbai','Amsterdam')
[]
city
(9) ["Pune", "London", "Mumbai", "Amsterdam", "NewYork", "Paris", "Delhi", "Venice", "Dubai"]
city.splice(3,1)
["Amsterdam"]
city
(8) ["Pune", "London", "Mumbai", "NewYork", "Paris", "Delhi", "Venice", "Dubai"]
city.splice(2,1,'Pune','Nice')
["Mumbai"]
city
(9) ["Pune", "London", "Pune", "Nice", "NewYork", "Paris", "Delhi", "Venice", "Dubai"]


var a= ['a','b','c']
var b = [1,2,3]
undefined
a+b
"a,b,c1,2,3"
a.concat(b)
(6) ["a", "b", "c", 1, 2, 3]

var myarr = ["London", "Pune",['Red','Yellow',['Bmw','Audi','Merc'],'Green'], "Nice", "NewYork", "Paris",]

var a= ['a','b','c']
var b = [1,2,3]
undefined
a+b
"a,b,c1,2,3"
a.concat(b)
(6) ["a", "b", "c", 1, 2, 3]
var myarr = ["London", "Pune",['Red','Yellow',['Bmw','Audi','Merc'],'Green'], "Nice", "NewYork", "Paris",]
undefined
myarr[0]
"London"
myarr[2]
(4) ["Red", "Yellow", Array(3), "Green"]
myarr[2][1]
"Yellow"
myarr[2][2]
(3) ["Bmw", "Audi", "Merc"]
myarr[2][2][1]
"Audi"

var city = ["Pune", "London", "NewYork", "Paris", "Delhi", "Venice", "Dubai"]
undefined
city.indexOf('Pune')
0
city.indexOf('Paris')
3
city.indexOf('Mumbai')
-1
city.indexOf('Amsterdam')
-1

var a = "hi"
undefined
Array.isArray(a)
false
var b = ['1','2']
undefined
Array.isArray(b)
true

var city = ["Pune", "London", "NewYork",1,2,true, "Dubai",false,'amsterdam','mumbai']
undefined
var city = ["Pune", "London", "NewYork", "Paris", "Delhi", "Venice", "Dubai"]
undefined
city.sort()
(7) ["Delhi", "Dubai", "London", "NewYork", "Paris", "Pune", "Venice"]
city.reverse()
(7) ["Venice", "Pune", "Paris", "NewYork", "London", "Dubai", "Delhi"]
var city = ["Pune", "London", "NewYork",1,2,true, "Dubai",false,'amsterdam','mumbai']
undefined
city.sort()
(10) [1, 2, "Dubai", "London", "NewYork", "Pune", "amsterdam", false, "mumbai", true]