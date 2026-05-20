//26TH CLASS
let employeee={
    firstname:"ganga",
    lastname:"sree",
    age:12,
    fullname:function(){
    return this.firstname +" "+this.lastname
    }
}
console.log(employeee.firstname)
console.log(employeee.lastname)
console.log(employeee.fullname())//.notation

//bracket notation
console.log(employeee["lastname"])

//adding new property
employeee.gender="female",
console.log("geneder is "+employeee.gender)

//removing a property
delete employeee.gender
console.log(employeee.gender)
//using for in loop
for(const key in employeee){ //in is an operator used to check if a property exists inside an object
    if(typeof employeee[key]==="function"){
        console.log(key+":",employeee[key]())
    }
    else {
        console.log(key+":",employeee[key])
    }
}
