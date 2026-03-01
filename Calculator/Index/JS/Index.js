// Achar o display

const Display = document.getElementById("display")

// Funções dos botões especiais

function Clear() {
    console.log("Cleared")

    Display.value = null
}

// Funções dos botões de numero

function AddSeven() {
    console.log("Added An Seven!")

    Display.value += 7
} 

function AddEight() {
    console.log("Added An Eight!")

    Display.value += 8
} 

function AddNine() {
    console.log("Added An Nine!")

    Display.value += 9
} 

function AddFour() {
    console.log("Added An Four!")

    Display.value += 4
} 

function AddFive() {
    console.log("Added An Five!")

    Display.value += 5
} 

function AddSix() {
    console.log("Added An Six!")

    Display.value += 6
} 

function AddOne() {
    console.log("Added An One!")

    Display.value += 1
} 

function AddTwo() {
    console.log("Added An Two!")

    Display.value += 2
} 

function AddThree() {
    console.log("Added An Three!")

    Display.value += 3
} 

// Temporário

function Unknown() {
    console.log("This Command Is Unknown")
}