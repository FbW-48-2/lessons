class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
		// Complete the code!
		this.fullname = `${firstname} ${lastname}`;
		this.email = `${firstname}.${lastname}@company.com`.toLowerCase();
	}
}
