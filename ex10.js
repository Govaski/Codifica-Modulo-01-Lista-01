//  10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let prompt = require("prompt-sync")()

console.log("Esse programe escreve o número digitado 10 vezes no console")

let n = Number(prompt("Digite seu número: "))

if (isNaN(n)){
    console.log("Digite um número válido")
    return
}

for (let i = 0; i < 10; i++) {
    console.log(i+1, ": ", n)
}
