/* 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
 utilizando uma estrutura de controle if. */

let prompt = require('prompt-sync')()

console.log("O programa retornará se o número digitado é par ou impar")
let num = Number(prompt("Digite um número: "))

if (isNaN(num)) {
    console.log("Digite um número válido")
    return
}

if (num % 2 == 0) {
    console.log(`O número ${num} é par`)
} else {
    console.log(`O número ${num} é ímpar`)
}