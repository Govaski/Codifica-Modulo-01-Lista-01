/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, eR$0,25se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

let prompt = require("prompt-sync")()

let cost = 0.30
let promoCost = 0.25
let finalCost
console.log(`PROMOÇÂO SUPER ESPECIAL!!1!\nNa compra de 12(doze) maçãs ou mais, cada unidade sai por apenas R$${promoCost} (ao invés de R$${cost})`)

let n = Number(prompt("Quantas maçãs deseja comprar? "))


if (isNaN(n)){
    console.log(`Sinto muito, mas não vendemos ${n} maçãs`)
    return
}

if (n >= 12) {
    finalCost = n * promoCost
} else {
    finalCost = n * cost
}

console.log(`Seu pedido fica por: R$${finalCost}`)