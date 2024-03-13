const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
       // console.log(`${this.username} , welcome to website`);
      //console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);
// function chai(){
//     let username = "hitesh"
//     //console.log(this);
//     console.log(this.username);
// }
// chai()



// const chai = function (){
//     let username = "hitesh"
    
//      console.log(this.username);
//  }
//  chai()


const chai = () => {
    let username = "hitesh"
    console.log(this.username)
}
//chai()

//     basic arrow function

      //++++Explicit Return because we are using the return keyword  +++++++


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))

    //+++++Implicit return +++++

// const addTwo = (num1, num2) => num1 + num2

// console.log(addTwo(3,4))


   // if we want to return the object

//    const addTwo = (num1, num2) => {username: "hitesh"}

const addTwo = (num1, num2) => ({username: "hitesh"})

     console.log(addTwo(3,4))

    //  const myArray = [2, 5, 3, 7, 8]
    //  myArray.forEach(() => {})