// const tinderUser = new Object() //singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isloggedIn = false

// console.log(tinderUser)
const regularUser = {
    email: "abcd@gmail.com",
    fullname: {
        userfullname: {
            firstname: "raj",
            lastname: "verma"
        }
    }
}
// console.log(regularUser.fullname)
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

const obj3 = { ...obj1, ...obj2 }
// console.log(obj3)


// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedIn'));




// object de-structure
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const { courseInstructor: instructor } = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]