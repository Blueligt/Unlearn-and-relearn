
// let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")
// let count = 0;

// function increment() {
//     count += 1
//     countEl.innerText = count
// }

// function save() {
//     let saveCount = ' ' + count + ' - '
//     saveEl.innerText += saveCount
//     console.log(count)
//     countEl.innerText = 0
//     count = 0
// }



// let welcomeEl = document.getElementById("welcome-john")
// let name = 'John'
// let greeting = 'Hi, my name is '
// let newGreeting = greeting + name;

// function welcome() {
//     welcomeEl.innerText = newGreeting
// }

// welcome()

// welcomeEl.innerText += "🤝"

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let arithDig = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    arithDig.textContent = "Sum: " + result
}

function substract() {
    let result = num1 - num2
    arithDig.textContent = "Sum: " + result
}
function multiply() {
    let result = num1 * num2
    arithDig.textContent = "Sum: " + result
}
function divide() {
    let result = num1 / num2
    arithDig.textContent = "Sum: " + result
}
function modulus() {
    let result = num1 % num2
    arithDig.textContent = "Sum: " + result
}

