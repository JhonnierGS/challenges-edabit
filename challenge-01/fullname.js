class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
		// Complete the code!
		this.email = `${firstname}.${lastname}@company.com`.toLowerCase();
		this.fullname = `${firstname} ${lastname}`;
	}
}


 var jonathan = new Employee("jonathan", "gonzalez");
 var lia = new Employee("lia", "nieto");

 console.log(jonathan, lia);
