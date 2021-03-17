if(condition){
    //do something
}else{
    //do something
}

var a = 847867
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

Number 847867 is odd

var a = 84786
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 84786 is even

var name="Aakash";
if(name=="Priya"){
    console.log(`Hi ${name} you are admin`)
}else if(name=="Lisa"){
    console.log(`Hi ${name} you are super admin`)
}else if(name=="Hitesh"){
    console.log(`Hi ${name} you are user`)
}else{
    console.log(`Hi ${name} i don't know you`)
}
VM62:9 Hi Aakash i don't know you

var role = "Admin";
var name = "John"

if(role=="Admin"){
    if(name=="Amit"){
        console.log(`Hi ${name} you are user Admin`)
    }else if(name=="Bhumika"){
        console.log(`Hi ${name} you are Super Admin`)
    }
}else{
    if(name=="Amit"){
        console.log(`Hi ${name} you are user`)
    }else if(name=="Bhumika"){
        console.log(`Hi ${name} you are Super user`)
    }
}

///////
var name = "Tina"
if(name=="Tina" || name=="Nancy" || name=="Bhumika"){
    console.log(`Hi ${name} you are welcome`)
}else{
    console.log(`Hi ${name} you are not allowed`)
}

var name = "Tina"
if(name=="Tina" && role == "Admin"){
    console.log(`Hi ${name} you are welcome`)
}else{
    console.log(`Hi ${name} you are not allowed`)
}

var name = "Tina"
if(name=="Tina" && (role == "Admin"|| role=="User")){
    console.log(`Hi ${name} you are welcome`)
}else{
    console.log(`Hi ${name} you are not allowed`)
}

var a = 1
if(a){
    console.log("hi")
}else{
    console.log("Bie")
}
hi


var a = 0
if(a){
    console.log("hi")
}else{
    console.log("Bie")
}
Bie

var a = -1
if(a){
    console.log("hi")
}else{
    console.log("Bie")
}
hi

///////////
Ternary(single line if else condition)
//////////
var a = 10;
a>10 ? "Hiii":"Biee"
"Biee"
var a = 10;
a==10 ? "Hiii":"Biee"
"Hiii"

var a = 10;
a>10 ? a+1:a-1
9
var a = 10;
a=10 ? a+1:a-1
11