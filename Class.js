class Student{
    constructor(name,age)
    {
        this.name=name
        this.age=age
    }
    detail()
    {
        console.log("student naem is "+this.name+" "+this.age)
    }
} 
const student1=new Student("sree",10);
student1.detail()
const student2=new Student("ganga",10);
student2.detail()