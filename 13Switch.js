// multiple condition and multiple output(if else)
// one condition and multiple output(switch)
// one condition one output(ternary)

var name = "Eva"
switch(name){
    case 'Aakash':
        console.log(`Hi ${name} you are user`);
        break;
    case 'Eva':
        console.log(`Hi ${name} you are admin`);
        break;
    default:
        console.log(`Hi ${name} we don't know you`)
}
Hi Eva you are admin

switch(new Date().getDay()){
    case 0:
        console.log(`Today is sunday`); 
        break;
    case 1: 
        console.log(`Today is Monday`); 
        break;
    default:
        console.log(`Wrong Input`); 
}

Today is Monday