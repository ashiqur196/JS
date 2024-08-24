//# Primitive

// 7 Types : String, Number, Boolearn, null, undefined, symbol
//BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 2345465667547n


// Reference (Non primitive)

// Array, Objects, Function

const heros = ["Hulk", "Irone man", "Thor"]
let myObj = {
    name: "Ayon",
    age: 23
}

const myFunction = function( ){
    console.log("Hello world");
    
}
console.log(typeof outsideTemp);

// =========================================

// Stack (Primitive), Heap (Non- Primitive)

let myGithubname = "ashiqur196"

let anothername = myGithubname
anothername = "learning Js"

console.log(myGithubname);
console.log(anothername);

let userOne = {
    email: "goforit@gmail.com",
    userid: "notagoodid@gmail"
}

let userTwo = userOne

userTwo.email = "Ayon@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
