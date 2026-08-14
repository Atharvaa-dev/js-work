// singleton
// | Object Literal                  | Singleton                               |
// | ------------------------------- | --------------------------------------- |
// | Created using `{}`              | Designed to have only one instance      |
// | Multiple objects can be created | Same instance is reused                 |
// | Simple and commonly used        | Used when one shared instance is needed |
// | Example: `{ name: "Atharva" }`  | Example: `Singleton.getInstance()`      |

// object literals
const mysym = Symbol("key1")





const jsUser = {
    name: "Atharva",
    "full name": "raj verma",
    [mysym]: "key1",
    location: "Mumbai",
    email: "atharva@gmail.com",
    isloggedin: false,
    lastlogindays: ["monday", "sunday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mysym])

jsUser.email = "qwert@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "qwert1234@gmail.com"
// console.log(jsUser)


jsUser.greeting = function () {
    console.log("Hello js user");
}
console.log(jsUser.greeting());

jsUser.greeting1 = function () {
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsUser.greeting1());