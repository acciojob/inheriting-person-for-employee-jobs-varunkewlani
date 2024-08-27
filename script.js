// complete this js code
class Person{
	constructor (name,age)
	{
		this.Name=name;
		this.Age=age;
	}
	greet()
	{
		console.log(`Hello, my name is ${this.Name}, I am ${this.Age} years old.`);
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
		console.log(`Hello, my name is ${this.Name}, I am ${this.Age} years old, and my job title is ${this.JobTitle}.`);
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
