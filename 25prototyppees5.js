function human(name){
    this.name=name;
    this.city="London"
}

function robot(name){
    this.name=name;
    this.legs=2;
    this.age=10
}

var john = new human('John')
human {name: "John", city: "London"}

var pepper = new robot('Pepper')
robot {name: "Pepper", legs: 2, age: 10}

human.prototype = new robot()
john
human {name: "John", city: "London"}
john.legs
2
john.age
10