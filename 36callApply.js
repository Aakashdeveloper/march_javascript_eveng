var person={
    fullName:function(){
        return this.firstname+" "+this.lastname
    }
}

var John={
    firstname:'John',
    lastname:'Dave'
}

person.fullName.call(John)
person.fullName.apply(John)

person.fullName.call(John)
"John Dave"
person.fullName.apply(John)
"John Dave"

var person={
    fullName:function(city,country){
        return this.firstname+" "+this.lastname+" "+city+" "+country
    }
}

person.fullName.call(John,['Delhi','India'])
"John Dave Delhi,India undefined"

person.fullName.apply(John,['Delhi','India'])
"John Dave Delhi India"
person.fullName.call(John,'Delhi','India')
"John Dave Delhi India"