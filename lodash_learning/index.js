const loda = require('lodash')._

//Loop for N times
loda.times(5, () => {
	console.log('hi')
})

//Loop thru a collection and return a deeply nested property from each item
var ownerArr = [
	{
	"name":"Hsin",
	"pets":[{"name":"white"}, {"name":"black"}]
	},
	{
	"name":"Kyle",
	"pets":[{"name":"ken"}, {"name":"jen"}]
	},
]

var petNameArr = loda.map(ownerArr, 'pets[0].name')
console.log(petNameArr)

// deep clone
var objA = {name:'Colin'}
var objB = loda.cloneDeep(objA)
console.log(objA === objB)

// get random number between a range
// self implementation
function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

//use Lodash
console.log(loda.random(15, 20))

//remove properties
var objX = {name:"Hsin", age:30}
objX = loda.omit(objX, ['name'])
console.log(objX)

//Error handling for JSON.parse
//without try catch
function parseLodash(str) {
	return loda.attempt(JSON.parse.bind(null, str), 'hello')
}

var p = parseLodash('a') //return an error obj
console.log(p.message)
console.log(parseLodash('{"name":"Hsin"}')) //return obj

