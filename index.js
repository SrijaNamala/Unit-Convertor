/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertbutton = document.getElementById("convert-btn")
const inputbutton = document.getElementById("input-text")
const descEl = document.getElementById("descl")
const descVl = document.getElementById("descv")
const descMl = document.getElementById("descm")

const metertofeet = 3.281
const feettometer = 0.305
const litertogallon = 0.264
const gallontoliter = 3.785
const kilotopound = 2.204
const poundtokilo = 0.454

convertbutton.addEventListener("click", function() {
    let value = inputbutton.value
    descEl.textContent = `${value} meter = ${(value * metertofeet).toFixed(2)} feet | ${value} feet = ${(value * feettometer).toFixed(2)} meters`
    descVl.textContent = `${value} liters = ${(value * litertogallon).toFixed(2)} gallon | ${value} gallon = ${(value * gallontoliter).toFixed(2)} liters`
    descMl.textContent = `${value} kilos = ${(value * kilotopound).toFixed(2)} pounds | ${value} pounds = ${(value * poundtokilo).toFixed(2)} kilos`
})