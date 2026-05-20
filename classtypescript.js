"use strict";
//parameterized constructor
class TypeScript {
    version;
    constructor(version) {
        this.version = version;
    }
    displayInfo() {
        console.log(this.version);
    }
}
const tsInfo = new TypeScript("6.0.3");
tsInfo.displayInfo();
//non parameterized constructor & return type of method
class Employee {
    name;
    constructor() {
        this.name = "Jane Doe";
    }
    displayInfo() {
        return this.name;
    }
}
const employeeInfo = new Employee();
console.log(employeeInfo.displayInfo());
//parameterized constructor & return type of method
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        return this.name;
    }
}
const studentInfo = new Student("John Doe");
console.log(studentInfo.displayInfo());
