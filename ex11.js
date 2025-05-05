/* 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
 utilizando um loop for. */

console.log("Esse programa pede 5 número e entrega a soma deles. Caso algum input não seja um número, ele pede novamente para digitar o número")

let prompt = require("prompt-sync")()
let nums = []
let n
let sum = 0

for (let i = 0; i < 5; i++) {
    n = Number(prompt(`${i}. Digite um número: `))
    if (isNaN(n)) {
        console.log("Digite um número válido")
        i -= 1
        continue
    }
    nums.push(n)
}

for (let i = 0; i < 5; i++) {
    sum += nums[i]
}

console.table(nums)
console.log(sum)