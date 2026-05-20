function message():void{//type specification is important for function declaration
console.log("Hello, World!");
}
message();

function add(a:number,b:number):void{
    console.log(a+b);
} 
add(5,10);

function multiplication(a:number,b:number):number{
    return a*b;
}   
let result=multiplication(5,10);
console.log(result);    

function throwerror(message:string):never{
    throw new Error(message);
}
throwerror("This is an error message");