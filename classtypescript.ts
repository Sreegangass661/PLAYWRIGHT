//parameterized constructor
class TypeScript {
    version: string      
    constructor(version: string) {
        this.version = version;
    }   
    displayInfo(): void {
        console.log(this.version);
    }   
}

const tsInfo = new TypeScript("6.0.3");
tsInfo.displayInfo();   

//non parameterized constructor & return type of method
class Employee {
    name: string    
    constructor() {
        this.name = "Jane Doe";
    }   
    displayInfo(): String {
        return this.name;
    }   
}

const employeeInfo = new Employee();
console.log(employeeInfo.displayInfo());

//parameterized constructor & return type of method
class Student {
    name: string        
  
    constructor(name: string) {
        this.name = name;
    }   
    displayInfo(): String {
        return this.name;
    }       
}

const studentInfo = new Student("John Doe");
console.log(studentInfo.displayInfo());

