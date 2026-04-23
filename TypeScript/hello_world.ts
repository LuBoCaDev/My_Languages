/*
This is a comment
*/

// Hello world

console.log("Hello, TypeScript!")

// Variables

var myString = "This is a string"
// myString = 5 Error
console.log(myString)

let myString2: string = "This is a string"
myString2 = "This is a different string"
myString2 = "6"
console.log(myString2)
console.log(typeof myString2)

let myNumber: number = 7
myNumber = myNumber + 4
console.log(myNumber)
console.log(typeof myNumber)
console.log(myNumber - 1)
console.log(myNumber)

console.log(myString + " " + myNumber)

let myNumber2 = 6.5
console.log(myNumber2)
console.log(typeof myNumber2)

console.log(myNumber + myNumber2)

let myBool: boolean = false
myBool = true
console.log(myBool)
console.log(typeof myBool)

let myUndefined: undefined
// myUndefined = "myUndefined" Error
console.log(myUndefined)

// Constantes

const myConst = "My constant property"
// myConst = "Another value" Error
console.log(myConst)

// Control structures

if (myNumber == 10 && myString == "Hello") {
    console.log("The value is 10")
} else if (myNumber == 11 || myString == "Hello") {
    console.log("The value is 11")
} else {
    console.log("The value is neither 10 nor 11")
}

// Functions

function myFunction(): string {
    return "My function"
}

console.log(myFunction())

function sumTwoNumbers(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber
}

console.log(sumTwoNumbers(5, 10))

// List

let myList: Array<string> = ["Lucas", "Borondo", "@lubocadev"]
console.log(myList)

// Set

let mySet: Set<string> = new Set(["Lucas", "Borondo", "@lubocadev", "Lucas"])
mySet.add("36")
console.log(mySet)

// Mapas

let myMap: Map<string, number> = new Map([["Lucas", 36], ["Borondo", 37]])
myMap.set("petrovs", 40)
console.log(myMap)
console.log(myMap.get("Lucas"))

// Loops

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
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

let myClass: MyClass = new MyClass("Lucas", 36)
console.log(myClass)
console.log(myClass.name)

// Enum
enum MyEnum {
    DART = "dart",
    PYTHON = "python",
    SWIFT = "swift",
    JAVA = "java",
    KOTLIN = "kotlin",
    JAVASCRIPT = "javascript"
}

const myEnum = MyEnum.DART
console.log(myEnum)