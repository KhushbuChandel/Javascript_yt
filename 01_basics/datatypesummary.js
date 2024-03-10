// Primitive

// 7 types : String, Number, Boolean, null, undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let usermail;

const id = Symbol('123');
const anotherId = Symbol('123');

//console.log(id === anotherId); // This will output false

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name:"hitesh",
    age : 22,
}

const myFunction = function(){
    console.log("Hello world!");
}

console.log(typeof outsideTemp);
console.log(typeof Function);



//++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non- Primitive)

let myYoutube = "hiteshchoudharydotcom"

let anothername = myYoutube 

console.log(myYoutube);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);