/*
This is a comment in JavaScript
*/

// Hello world

console.log("Hello, JavaScript!");

// Variables

var myString = "This is a string"
console.log(myString)

let myString2 = "This is a string"
myString2 = "Here I change the value of the string"
console.log(typeof myString2)
myString2 = 6
console.log(myString2)
console.log(typeof myString2)

let myNumber = 7
myNumber = myNumber + 4
console.log(myNumber)
console.log(myNumber - 1)
console.log(myNumber)

console.log(myString + " " + myNumber)

let myNumber2 = 6.5
console.log(myNumber2)
console.log(typeof myNumber2)

let myBool = false
myBool = true
console.log(myBool)
console.log(typeof myBool)

myBool = null
console.log(myBool + myNumber2)

myBool = undefined
console.log(myBool)

let myUndefined
console.log(myUndefined)

// Constants

const MY_CONST = "My constant property"
// MY_CONST = "Another value" Error
console.log(MY_CONST)

// Control of flow

if (myNumber == 10 && myString == "Hello") {
    console.log("The value is 10")
} else if (myNumber == 11 || myString == "Hello") {
    console.log("The value is 11")
} else {
    console.log("The value is not 10")
}

myBool = null

if (myBool) {
    console.log("null")
}

// Functions

function myFunction() {
    return "My function"
}

console.log(myFunction())

// Lists

let myList = ["Lucas", "Borondo", "@lubocadev", 37]
console.log(myList)
console.log(myList[0])

// Set

let mySet = new Set(["Lucas", "Borondo", "@lubocadev", 37, "Lucas"])
mySet.add("Borondo")
console.log(mySet)

// Mapas

let myMap = new Map([["Lucas", 37], ["Borondo", 36], ["@lubocadev", 25]])
myMap.set("Petrovs", 40)
console.log(myMap)
console.log(myMap.get("Lucas"))

// Bucles

for (const value of myList) {
    console.log(value)
}

let myCounter = 0

while (myCounter < myList.length) {
    console.log(myList[myCounter])
    myCounter++
}

// Classes

class MyClass {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

let myClass = new MyClass("Lucas", 37)
console.log(myClass)
console.log(myClass.name)

// Enum

const MyEnum = {
    DART: "dart",
    PYTHON: "python",
    SWIFT: "swift",
    JAVA: "java",
    KOTLIN: "kotlin",
    JAVASCRIPT: "javascript"
}

const myEnum = MyEnum.JAVASCRIPT
console.log(myEnum)