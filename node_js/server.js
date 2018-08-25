const express = require('express')
const bodyParser = require('body-parser')

const app = express();

// this is the middleware that allows you to work with the data before passing to the routes
/*
app.use((req, res, next) => {
	console.log('i am the middleware')
	next()
})
*/

app.use(bodyParser.urlencoded({extened: false}))
app.use(bodyParser.json())


// this is for only GET request. 
app.get('/profile', (req, res) => {
	const user = {name:"Hsin", age:30}
	res.send(user)
})

app.get('/', (req, res) => {
	res.send("<h1>helloooooo</h1>")
})

app.get('/test', (req, res) => {
	res.send('this is a test')
})

// for post request (you can use postman to send post request)
app.post('/post',(req, res) => {
	console.log(req.body)
	res.send("Post request successful!")
})

app.get('/query', (req, res) => {
	//get the query e.g., 'localhost:3000/query?name=Hsin&age=50'
	console.log(req.query)
    console.log(req.body)
    console.log(req.header)
    console.log(req.params)

	res.send("sending query")
})

app.listen(3000)

