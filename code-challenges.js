// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.
var num1 = 15
var num2 = 0
var num3 = -7
//declare a function called numDiv that takes a number in as an argument
const numDiv = (num) => {
//if statement that uses the modulo function to see if a number divided by 3 returns a remainder of 0
    //if it's true, return the answer string interpolated with "divisible by 3" after it
     if (num % 3 === 0) {
         return `${num} is divisible by three`
    //if it's false, return the answer string interpolated with "not divisible by 3" after it
    } else {
        return `${num} is not divisible by three`
    }
}
//print a few test variables to see if the outputs are correct
// Expected output: "15 is divisible by three"
console.log(numDiv(15))
// Expected output: "0 is divisible by three"
console.log(numDiv(0))
// Expected output: "-7 is not divisble by three"
console.log(numDiv(-7))



// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

//declare a function namd allCaps that takes in an array
const allCaps = (array) => {
    //create a local variable that maps through the array 
    let mapNouns = array.map(value => {
        //access each value's first index and capitlize all the 0 index letters and concat back together
        return value[0].toUpperCase() + value.substring(1)
    })
    //return mapNouns joing into an array
    return mapNouns
}
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]
console.log(allCaps(randomNouns))



// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.
var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
    
//create a function that takes in an array with mixed variables
const numsOnly = (array) => {
    //create a local variable that filters through the array and uses typeof method to get only the numbers
    let newArray = array.filter(value => typeof value === "number")
        //return the newArray only containing numbers and sort them using this handy .sort method, which sorts the numbers from least to greatest
        return newArray.sort((a,b) => a-b)
}
 // // Expected output: [-8, 0, 8, 46, 59, 90, 107]
console.log(numsOnly(mixedDataArray))



// // --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
var vowelTester2 = "throw"

//create a function called firstVowel that takes in a string
const firstVowel = (string) => {
    //create array that contains the vowels both lowercase and uppercase
    vowelArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    //create for loop that will iterate through the string length (using index instead of i to keep straight in my brain)
    for (let index=0; index< string.length; index++) {
        //create variable that uses the .charAt method to find the index of each string
        let vowelHunter = string.charAt(index)
            //create if statement that uses the .indexOf method to go through vowelArray and find the first time a vowel appears in the string.  Enter vowelHunter as the value of .indexOf. Use !== -1, which indicates to return the first instance of a vowel
            if (vowelArray.indexOf(vowelHunter) !== -1) {
                //return the index 
                return index
        }
    }
}
// Expected output: 1
console.log(firstVowel(vowelTester1))
// Expected output: 3
console.log(firstVowel(vowelTester2))



// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

// //create a function that takes in a number, a mathematical operation, and another number as an argument
const calculator = (num1, mathOp, num2) => {
    //if statement with an argument saying that if the mathOp symbol equals "+" to return the numbers added
    if (mathOp === "+") {
        return (num1 + num2)
    //if statement with an argument saying that if the mathOp symbol equals "*" to return the numbers multiplied
    } else if (mathOp === "*") {
        return (num1 * num2) 
    //if statement with an argument saying that if the mathOp symbol equals "-" to return the numbers subtracted
    } else if (mathOp === "-"){
        return (num1 - num2)
    //if statement with an argument saying that if the mathOp symbol equals "/" to return the numbers divided
    } else if (mathOp === "/") {
        //nested if statement containing a special return if num2 === 0 that will return "can't divide by o!"
        if (num2 === 0){
            return "Can't divide by 0!"
        }
        //return for else if statment for division without 0
        return (num1/num2)    
    }
}

// Uncomment and use the following console logs to test your function

console.log(calculator(16, "+", 3))
// Expected output: 19
console.log(calculator(3, "*", 9))
// Expected output: 27
console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"

