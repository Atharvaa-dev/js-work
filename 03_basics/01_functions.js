// console.log("A")
// console.log("T")
// console.log("H")
// console.log("A")
// console.log("R")
// console.log("V")
// console.log("A")

function saymyname() {
    console.log("A")
    console.log("T")
    console.log("H")
    console.log("A")
    console.log("R")
    console.log("V")
    console.log("A")
}

// saymyname()


// function addtwonum(num1, num2) {
//     console.log(num1 + num2)

// }
function addtwonum(num1, num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2

}
const result = addtwonum(2, 3)
// console.log("result:", result)


function loginuserMessage(username = "sam") {
    if (username === undefined) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}


// console.log(loginuserMessage("Atharava"))
console.log(loginuserMessage())