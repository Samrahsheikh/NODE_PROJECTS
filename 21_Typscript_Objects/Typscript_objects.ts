// Question # 21

// Write a program that creates objects containing these items.

// Datatype of person Object.
interface person {
    age : number,
    name : string,
    nationality : string ,
    Student : Boolean
}
// person object.
let person :person = {
    age : 22 ,
    name : 'Samrah Sheikh' ,
    nationality : 'Pakistan' ,
    Student : true
} 
// print person.
console.log(person);

// Datatype of car object
interface car {
    maker : string,
    color : string,
    automatic :Boolean
}
// car object
let car = {
    maker : 'Toyota',
    color : 'Black' ,
    automatic : true
}
// print person.
console.log(car);

