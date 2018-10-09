const fs = require('fs')

fs.readFile('./hello.txt', (err, data) => {
	if(err) {
	console.log('errrrrrrror')
	}
	console.log('async:', data.toString('utf8'))
})

const file = fs.readFileSync('./hello.txt')
console.log('sync', file.toString())

//append string to the file
/*fs.appendFile('./hello.txt', ' this is so cool!', err => {
	if(err) {
	console.log(err)}

})
*/


//write
/*fs.writeFile('./bye.txt', 'bye bye there', err => {
	if(err) {
	console.log(err)
	}
})
*/

//delete
fs.unlink('./bye.txt', err => {
	if(err) {
		console.log(err)
	}
})
