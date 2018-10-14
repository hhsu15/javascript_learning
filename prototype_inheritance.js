// tradional way of constructor and inheritance (without class syntax)
var Job = function () {
	this.pays = true
}

//prototype method
Job.prototype.print = function() {
	console.log(this.pays ? "please hire me" : "no thank you")
}

// now the subclass
var TechJob = function(title, pays) {
	Job.call(this) // to inherit from the base class
	this.title = title
	this.pays = pays
}

TechJob.prototype = Object.create(Job.prototype) //inherit the prototypes from base class
TechJob.prototype.constructor = TechJob //set the constructor

//override the prototype
TechJob.prototype.print = function() {
	console.log(this.pays ? this.title + "job is great. Please hire me" : "I'd rather learn Javascript")
}

// now let's create the instances
var jsDeveloper = new TechJob("javascript developer", true)
var vbaDeveloper = new TechJob("vba developer", false)

jsDeveloper.print()
//console.log(vbaDeveloper.print())

//add method to the master object
Object.prototype.print_master = function() {
	console.log("This is printed from the master object")
}

jsDeveloper.print_master()
