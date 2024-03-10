// singleton
//Object.create  // constructor method // include singleton

// object literals

const mySym = Symbol("Key1")
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh ABC",
    [mySym]: "myKey1",
    age: 21,
    location: "Chandigarh",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Saturday"]

}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
} 

JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
} 
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());