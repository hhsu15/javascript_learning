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

///////////////////
// map, filter and reducen 
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).map(value => value.join(" ")).join(' ')


///////////////////////
// class constructor
class Student {
	constructor (name, age, myclass) {
		this.name = name;
		this.age = age;
		this.myclass = myclass;
	}

	introduction(greeting=null) {
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

//////////////////////
// Javascript runtime environment 

// call stack 
// web api
// callback queue 
// event loop

//eaxample


console.log('first line');
setTimeout(()=> {console.log('second line')},3000);
console.log('third line');

//--first, line 1 gets called -> call stack 1
//--then, line 2 web api (setTimeout) is called -> call stack 1 is erased,
//--then, line 3 is called -> call stack again
//--then, result is in callback queue 
//--event look checks if there is anythig in the callback queue
//--if there is function is callback queue, it gets called and goes to call stack:x