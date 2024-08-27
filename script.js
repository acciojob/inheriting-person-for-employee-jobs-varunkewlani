// complete this js code
class Person{
	constructor (name,age)
	{
		this.Name=name;
		this.Age=age;
	}
	greet()
	{
		return `Hello, my name is ${this.Name}, I am ${this.Age} years old.`
	}
}

class Employee extends Person {
	constructor(name, age, jobTitle)	
	{
		super(name, age)
		this.JobTitle=jobTitle;
	}
	jobGreet()
	{
		return `Hello, my name is ${this.name}, I am ${this.Age} years old, and my job title is ${this.name}.`
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
