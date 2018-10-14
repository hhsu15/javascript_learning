let sayHello = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		    console.log('first one')
		    return resolve("Hello")}, 3000)
		})
}


let sayWorld = (res) => {
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			console.log('second one')
			return resolve(res + " World")}, 3000)
		})
}


let sayName = (res) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
        	console.log('third one')
			return resolve(res + " Hsin")}, 3000)
		})
}

sayHello().
	then((res) => {
		return sayWorld(res)
	}).
	then((res) => {
		return sayName(res)
	}).
	then((res) => {
		console.log(res + "..done")
	})
