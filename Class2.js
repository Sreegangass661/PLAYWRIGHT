class Person{
    age=25
    get location(){ //getter method
      return "india"
    }
    constructor(name1, name2){
        this.name1=name1
        this.name2=name2
    }
    fullname(){
     console.log(this.name1+" "+this.name2)
    }
}
let person=new Person()
console.log(person.age)
console.log(person.location)//calling getter method not using()
person=new Person("sree","ganga")
person.fullname()