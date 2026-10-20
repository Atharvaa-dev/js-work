// console.log("A")
// console.log("T")
// console.log("H")
// console.log("A")
// console.log("R")
// console.log("V")
// console.log("A")

// function saymyname() {
//     console.log("A")
//     console.log("T")
//     console.log("H")
//     console.log("A")
//     console.log("R")
//     console.log("V")
//     console.log("A")
// }

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
        // console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}


// console.log(loginuserMessage("Atharava"))
// console.log(loginuserMessage())

function Calculatecartprice(...num1) {
    return num1
}
// console.log(Calculatecartprice(2, 3, 12))

const user = {
    username: "Atharva",
    price: 122
}
function handleobj(anyobj) {
    // console.log(`username is ${anyobj.username} and price is ${anyobj.price}`)
}

// handleobj(user)
handleobj({
    username: "sam",
    price: 299
})


const mynewArray = [100, 200, 300, 400]

function Returnsecondvalue(getArray) {
    return getArray[2]
}
// console.log(Returnsecondvalue(mynewArray))

console.log(Returnsecondvalue([100, 200, 300, 400]))
