var moviename = "Avengers";
var movierating = 4.5
var movielang = "Eng"

var moviename1 = "Jab We Met";
var movierating1 = 4.7
var movielang1 = "Hindi"

var movies = {
    name:'Avengers',
    rating:4.5,
    lang:'Eng'
}

typeof(movies)
"object"
movies.name
"Avengers"
movies.rating
4.5
movies.ind="Hollywood"
"Hollywood"
movies
{name: "Avengers", rating: 4.5, lang: "Eng", ind: "Hollywood"}
movies.rating=4.6
4.6
movies
{name: "Avengers", rating: 4.6, lang: "Eng", ind: "Hollywood"}
delete movies.lang
true
movies
{name: "Avengers", rating: 4.6, ind: "Hollywood"}

movies['lang']
"Eng"
movies['rating']
4.5


var calc = {
    sum:function(a,b){return a+b},
    sub:(a,b)=>{return a-b}
}
calc.sum(3,5)
8
calc.sub(3,5)
-2

var dbQuery = {
    find:(table)=>{return `Select * from ${table}`},
    insert:(table,data) => {return `Insert into ${table} name,city Values (${data.name}, ${data.city})` }
}

dbQuery.find('Students')
"Select * from Students"
dbQuery.insert('Employee',{name:'John',city:'London'})
"Insert into Employee name,city Values (John, London)"