/* 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else. */

let prompt = require("prompt-sync")()

console.log("Esse programa calcula o IMC de um adulto")

let mass = Number(prompt("Digite o peso em Kilos: "))
let height = Number(prompt("Digite a altura em metros: "))

if(isNaN(mass) || isNaN(height)){
    console.log("Digite uma altura e peso válidos")
}

let imc = (mass/(height*height))
console.log(`IMC: ${imc}`)

if (imc < 18.5) {
    console.log("Seu IMC é abaixo do normal")
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("Seu IMC é peso normal")
} else if (imc >= 25 && imc < 29.9) {
    console.log("Seu IMC é sobrepeso")
} else if (imc >= 30){
    console.log("Seu IMC é obesidade")
} 
