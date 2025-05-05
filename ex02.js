/* 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
    adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
    controle if-else. */

let prompt = require("prompt-sync")()

console.log("Esse programa classifica a idade digitada")
let age = prompt("Digite a idade: ")

if (age < 12) {
    console.log("Criança")
} else if (age >= 12 && age < 18) {
    console.log("Adolescente")
} else if (age >= 18 && age < 60) {
    console.log("Adulto")
} else if (age >= 60) {
    console.log("Idoso")
}