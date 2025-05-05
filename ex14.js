/*  14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
 utilizando um loop for ou while. */

 console.log("Esse programa calcula o fatorial indicado pelo usuário")

 const process = require('node:process');
 let prompt = require("prompt-sync")()

 let fatorial = 1
 let n = Number(prompt("Digite o fatorial: "))
if (isNaN(n)){
    console.log("Digite um número válido")
    return
}


 process.stdout.write(`${n}! = `)
 for (let i = n; i > 0; i--) {
    process.stdout.write(`${i}`)
    if (i-1 != 0)  process.stdout.write(` * `)

    fatorial *= i
 }

 process.stdout.write(` = ${fatorial}\n`)
