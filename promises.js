const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
]

//simple example
const api_call = fetch(urls[0]).then(resp=>resp.json())
api_call.then(resp=>{console.log(resp)})

//with mutiple promises
//Promise.all takes an array of promises
Promise.all(urls.map(url => {
	return fetch(url).then(resp=> resp.json())
})).then(results => {
	console.log(results[0])
	console.log(results[1])
	console.log(results[2])
}).catch(() => console.log('error'))
