/* 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
 a média aritmética desses números. */

console.log("Esse programa recebe números do usuário até o input ser 0, então faz uma média aritmética dos números anteriores ao 0")

let prompt = require("prompt-sync")()

let num = 0
let numArray = []
let sum = 0
let average = 0

do {
    num = Number(prompt(`${numArray.length}. Digite um número: `))
    if(isNaN(num)){
        console.log("Digite um número válido")
        num = -1
    } else {
        numArray.push(num)
    }
} while (num != 0);


for (let i = 0; i < numArray.length-1; i++) {
    sum += numArray[i]
}

average = sum / (numArray.length-1)

console.log(`Média aritmética: ${average}`)