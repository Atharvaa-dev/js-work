const user = {
    username: "Atharav",
    price: 300,
    welcomeMessage: function () {
        console.log(`${this.username},welcome to website`)
        // console.log(this);

    }

}
// user.welcomeMessage()
user.username = "Om"
// user.welcomeMessage()
// console.log(this);

// function chai() {
//     let username = "Atharav"
//     console.log(this.username);

// }
// chai()

// const chai = function () {
//     let username = "Atharva"
//     console.log(this.username)
// }

const chai = () => {
    let username = "Atharva"
    console.log(this)
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({ username: "Atharava" })
console.log(addTwo(20, 30))

