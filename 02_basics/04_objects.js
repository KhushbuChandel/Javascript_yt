//const tinderUser = new Object() //Singleton object

const tinderUser = {} // Non sINGLETON oBJECT

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
 
//console.log(tinderUser)

const regularUser ={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Hitesh",
            lastname: "Gautam"
        }
    }
}
// console.log(regularUser)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign(obj1, obj2)
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

//Destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

//const {courseInstructor} = course
const {courseInstructor: instructor} = course
//console.log(courseInstructor);
console.log(instructor);


// In case of React object destructuring

// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")

//JSON -- CALLING AN API

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// API can be available in array format..

[
    {},
    {},
    {}
]