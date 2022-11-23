class Department {
  private readonly id: String; // readonly is a keyword that makes the property immutable
  private name: String; // private is a keyword that makes the property not accessible from outside the class
  protected employees: String[] = []; // protected is a keyword that makes the property accessible from extended classes but not from outside the class

  constructor(id: String, n: String) {
    this.id = id;
    this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ` + this.name);
  }

  addEmployee(employee: String) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log("Employee number: ", this.employees.length);
    console.log("Employees: ", this.employees);
  }
}

const account = new Department("D1", "Account Department!");
account.describe();

account.addEmployee("MUhammed");
account.addEmployee("Ali");

account.printEmployeeInformation();

////////////////////////////////////////////////////////////////
//-------------------- Inheritance ----------------------------

class ITDepartment extends Department {
  private admins: String[];

  constructor(id: String, admins: String[]) {
    super(id, "IT Department"); // super is a keyword that calls the constructor of the parent class
    this.admins = admins;
  }

  getAdmins() {
    console.log("Admins: ", this.admins);
  }
}

const it = new ITDepartment("D2", ["Bekir", "Ali"]);
console.log(it);
it.describe();
it.getAdmins();
it.printEmployeeInformation();
it.addEmployee("Bekir");
it.printEmployeeInformation();