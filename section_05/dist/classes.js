"use strict";
console.log('lesson 59 - creating a First Class');
console.log(' ');
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //private name: string;
        //private id: string;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
// const hr = new Department('d1','Human Ressources')
// console.log(hr)
//hr.describe()
// hr.addEmployee("Davi")
// hr.addEmployee("Maria")
// hr.addEmployee("Doly")
// hr.printEmployeeInformation()
// const hrCopy = {describe: hr.describe, name:'hr'}
// hrCopy.describe();
// WORKING THE CONCEPT OF INHERITANCE
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log(`The IT department has ${this.employees.length} employees. Department id is ${this.id}`);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (!value || '') {
            throw new Error('Please pass in a value');
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    describe() {
        console.log(`The Accounting department has ${this.employees.length} employees. The department id is ${this.id}`);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === 'Jim Halpert') {
            return;
        }
        this.employees.push(name);
    }
}
const ti = new ITDepartment('d2', ['Dwight K. Schrute']);
const accounting = AccountingDepartment.getInstance();
ti.addEmployee("Jim Halpert");
ti.describe();
const employee1 = Department.createEmployee('Pam Halpert');
console.log(employee1);
accounting.mostRecentReport = 'payment send out to employees.';
accounting.mostRecentReport = 'checked for salaries raises';
//accounting.mostRecentReport = ''
accounting.printReports();
accounting.addEmployee('Oscar');
accounting.addEmployee('Kevin Malone');
accounting.describe();
console.log(accounting.mostRecentReport);
console.log('');
console.log("LOGANDO OS OBJ");
console.log(ti);
console.log(accounting);
