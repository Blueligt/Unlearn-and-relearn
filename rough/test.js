let greeting = ["Hello", "My", "name", "is", "John"]
let greetingEl = document.getElementById("greeting-el")

for (let i = 0; i < greeting.length; i++) {
    greetingEl.textContent += greeting[i] + " "
    console.log(greeting[i])
} 

let read = Math.floor( Math.random()* 13 ) + 1

read += Math.floor( Math.random()* 13 ) + 1

console.log(read)

let person = {
    name: "Ekene",
    age: 23,
    country: "Nigeria"
}

function logData() {
    let personData = person.name + " is " + person.age + " years old and live in " + person.country
    console.log(personData)
}

logData()

let age = 69

if (age < 7) {
    console.log("free")
} else if (age > 6 && age < 18) {
    console.log("child discount")
} else if (age > 17 && age < 27) {
    console.log("Student discount")
} else if (age > 26 && age < 67) {
    console.log("Full price")
} else {
    console.log("Senior citizen discount")
}

let largeCountries = ["Tuvula", "USA", "Nigeria", "Russia", "Monaco"]

// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
    
// }
console.log(largeCountries.shift())
console.log(largeCountries.unshift("China"))
console.log(largeCountries)


let games = ["rock", "Paper", "scissors"]

function gem() {
    let number = Math.floor(Math.random() * 3)
    return games[number]
}

console.log(gem())


// let fruit = ["🍎", "🍊", "🍊", "🍎", "🍎"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// function fruitShelf() {
//     for (let i = 0; i < fruit.length; i++) {
//         if (fruit[i] === "🍊") {
//             orangeShelf.innerHTML += " hi 🍊"
//         } else if (fruit[i] === "🍎"){
//            appleShelf.textContent += " hello 🍎"
//         }
//     }
// }

// fruitShelf()


function getFirst(arr) {
    return arr[0]
}

let corn = ["yellow corn", "Red corn", "white corn"]
console.log( getFirst(corn))
