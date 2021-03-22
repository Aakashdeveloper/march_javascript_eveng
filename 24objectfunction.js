function language(name,country){
    this.name = name;
    this.country = country;
    this.greet=function(){
        return `Say Hi to ${name}`
    }
}

var Hindi = new language("Hindi","India")
console.log(Hindi)

//es6
class language1{
    constructor(name,country){
        this.name = name;
        this.country = country; 
    }

    greet=() =>{
        return `Say Hi to ${name}`
    }

}

var English = new language1("English","UK")
console.log(English)