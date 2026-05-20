class Animal{
    constructor(name){
        this.name=name
    }
    sound(){
   console.log(this.name+" npmdog is barking")
    }
}

class Dog extends Animal{
    constructor(name,bread){
        super(name)
        this.bread=bread
        
    }
    breadtype(){
        console.log(this.name+" "+"named"+" "+this.bread+" "+"barks")
    }
}
let animal= new Dog("jimmy","lab")
animal.sound()
animal.breadtype()
