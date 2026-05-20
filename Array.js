//string value store
let flowers=["rose", "jasmine"]
console.log(flowers)

//filter fn
let numbers=[1,2,3,4]
let filtered=numbers.filter( n=> n>3)
console.log(filtered)

//ascending 
let arraynum=[2,3,1,9,1]
arraynum.sort((a,b)=> a-b)
console.log(arraynum)

//descending
let arraynum1=[20,30,30,10]
arraynum1.sort((a,b)=> b-a)
console.log(arraynum1)


//string sort ascending
let stringarray=["apple","bananan","mango"]
stringarray.sort()
console.log(stringarray)
//reverse
stringarray.sort().reverse()
console.log(stringarray)



let array=Array(3)
array[0]=1
array[1]=2
array[2]=3
array[3]=2
console.log(array)
