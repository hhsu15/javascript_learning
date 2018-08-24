const http = require('http');

const server = http.createServer((request, response) => {
	//response.setHeader('Content-Type', 'text/html');
	response.setHeader('Content-Type', 'application/json');
	const user = {
		name:'Hsin',
		age:38
	}
	//response.end('<h1>Hellloooooooooooo</h1>')
	response.end(JSON.stringify(user))
	// console.log('Headers', request.headers)
	console.log('method', request.method)
	console.log('url', request.url)
})

server.listen(3000); //Port number
