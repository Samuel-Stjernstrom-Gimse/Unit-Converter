
const btn = document.getElementById("btn")
let outputLength = document.getElementById("length-output")
let outputVolume = document.getElementById("volume-output")
let outputMass = document.getElementById("mass-output")

btn.addEventListener("click", () => {
    let inputNumber = document.getElementById("input-number").valueAsNumber
    outputLength.textContent =
        `${inputNumber} Meters = ${(inputNumber * 3.281).toFixed(2)} Feet || 
        ${inputNumber} Feet = ${(inputNumber / 3.281).toFixed(2)} Meters`
    outputVolume.textContent =
        `${inputNumber} Liters = ${(inputNumber * 0.264).toFixed(2)} Gallon || 
        ${inputNumber} Gallon = ${(inputNumber / 0.264).toFixed(2)} Liters`
    outputMass.textContent =
        `${inputNumber} Kilos = ${(inputNumber * 2.204).toFixed(2)} Pounds || 
        ${inputNumber} Pounds = ${(inputNumber / 2.204).toFixed(2)} Kilos`
})