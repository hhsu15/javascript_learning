const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
]

// use async await to achieve the resule
// hopefully provides better readability like a syncronus looking
// add async to the beginning of the function
// add await to the beginning of a promise
const getData = async function() {
	try{
	const [ users, posts, albums ] = await Promise.all(urls.map(url =>
		fetch(url).then(resp => resp.json())
	))
	console.log('users:', users)
	console.log('posts:', posts)
	console.log('albums:', albums)
    } catch(err) {
    	console.log('opps', err)
    }
}