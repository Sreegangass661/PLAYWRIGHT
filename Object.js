const student={
    name:"sree",//json object
    rollno:12,
    detail:()=>//without function it will work -- sample internal function name
    {
        console.log("hello")
    }
}
student.detail()
const employee={
    name1:"hyy",
    rollno:12,
    details:(a,b)=>//without function it will work -- sample internal function name
    {
        console.log("hello "+ employee.name1)
        console.log(a+b)
    }
}
employee.details(10,20)

//shorthand method method property name mandatory alla
const employe2={
    sample:"hy",
    details1()
    {
     console.log("hello "+this.sample)
    }   
}
employe2.details1()



  

