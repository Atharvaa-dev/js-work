// gobal scope
let a = 300
// blocked scope
if (true) {
    let a = 10
    let b = 20
    // var c = 30
    // console.log("Inner a:", a)
}


// console.log(a)
// console.log(b)
// console.log(c)


function one() {
    const name = "Atharav"
    function two() {
        const website = "Youtube"
        // console.log(name)
    }
    // console.log(website)
    two()
}
one()


if (true) {
    const username = "Atharva"
    if (username === "Atharva") {
        const website = " youtube"
        // console.group(username + website)
    }
    // console.log(website)
}
// console.log(username)

//+++++++++++++++++++++Interesting+++++++++++++++++++++++++++++++
function addone(num) {
    return num + 1
}
addone(5)

const addtwo = function (num) {
    return num + 2
}
addtwo(5)
