function move(direction) {
    var result;
	switch(direction){
        
		case 'up':
			result = 'I am in the roof';
			break;
		case 'down':
			result = 'I fell into a hole';
			break;
        case 'right':
			result = 'I got a car';
			break;
		case 'left':
			result = 'I am back home';
			break;
		default:
			result = 'enter a valid direction';
		}
	return result
}


var sym1 = 
var sym2 = 
var sym3 = 

const fib = (n) => {
	if (n===1 | n===2) {
		return 1;
	} else {
		return fib(n-1) + fib(n-2);
	}
}


const myContext = {

	name:'Hsin',
	age:38,
	intro: () => {
		let introduction = `hello my name is ${this.name} and I am ${this.age} years old}`
		alert(introduction)	}
}


class Student {
	constructor (name, age, myclass) {
		this.name = name;
		this.age = age;
		this.myclass = myclass;
	}

	introduction(greeting) {
		let template = `${greeting}, my name is ${this.name} and I am ${this.age} years old. I am in ${this.myclass}`
	    alert(template)
	} 
}

class Classmate extends Student {
	constructor(name, age, myclass) {
		super(name, age, myclass) //init super 
	}
	perform(role){
		console.log(`horaaay! I am ${role}`)
	}



}