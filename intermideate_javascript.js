//prototype

var person = function(name) {
	this.name = name
}

var Hsin = new person('Hsin')

person.prototype.sayhi = () => {console.log('hi')}

//call (access properties of an obj from another function) only works for function(), not arrow functions
var myobj = {
	name:'Hsin'
}

var sayhi = function(greetings) {
	console.log(greetings + ', ' + this.name)
}

sayhi('hi') // will only print 'hi'

sayhi.call(myobj, 'hi') //this will print 'hi, Hsin'

//apply (same as call except for the args you will pass as an array)

sayhi.apply(myobj, ['hi'])

//bind (bind a function with an obj)
var myobj2 = {name1: "Jess", name2: "Kyle"}
var my_func = function() {console.log('hi' + name1 + 'and' name2)
var binded_func = my_func.bind(myobj2)
binded_func() // will print 'hi Jess and Kyle'

//closure (a function that returns another function)
var add = (num1) => {
	return (num2) => {
				return num1 + num2
			}
}

var addTen = add(10)
addTen(15) //will return 25

//promise 
var myPromise = new Promise((resolved, rejected) => {
	if (true) {
		resolved('the value you want to return when resolved')
	} else {
		rejected('the value you want to return when rejected')
	}
}

myPromise.
	then((value) => {console.log(value)}).
	catch((value) => {console.log(value)}) 

//promise with http request
var getAPI = new Promise((resolved, rejected) => {
	var request = new XMLHttpRequest()
	request.open('get', 'https://randomuser.me/api/')
	request.onload = resolved
	request.onerror = rejected
	request.send()
	}
)

getAPI.then((data) => {
	data = data.target.response
	console.log(data)
	}
).catch(() => {console.log('there was an error')})







