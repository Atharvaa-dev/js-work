
// javascript is dynamically typed language:
// You do not declare the data type of a variable.
// The type is determined automatically at runtime.
// A variable can hold different types of values during execution.

// primative 
// 7 types :String,Number,Boolean,Null,Undefined,symbol,Bigint 
const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsidTemp = null
let useEmail;


const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid)

const bignumber = 23456782334546454646n




// Reference (Non - primative)
// Array,objects,Functions
const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof anotherId);

// typeof
// Undefined	                          "undefined"
// Null	                                      "object"
// Boolean   	                               "boolean"
// Number	                                     "number"
// String	                                       "string"
// Object                                           "object"
//(native and does not implement [[Call]])	           
// Object (native or host and does implement [[Call]])	"function"
// Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".
// https://262.ecma-international.org/5.1/#sec-11.4.3