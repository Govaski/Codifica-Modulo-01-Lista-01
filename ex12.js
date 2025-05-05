/* 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
 10) utilizando um loop for. */

console.log("Esse programa recebe um número do usuário e escreve a tabuada até 10")

let prompt = require("prompt-sync")()

let num = Number(prompt("Digite um número: "))
if (isNaN(num)){
    console.log("Digite um número válido ")
    return
}

for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${num}: ${num*i}`)
}