/*6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */

let prompt = require("prompt-sync")()

console.log("Esse programa recebe os valores de 3 lados e verifica se formam um triângulo\nSe sim, classifica ele entre isóceles, escaleno e equilátero")

let a = Number(prompt("Digite o lado A: "))
let b = Number(prompt("Digite o lado B: "))
let c = Number(prompt("Digite o lado C: "))

if(isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Digite números válidos")
    return
}

if (a < b + c && b < a + c && c < a + b){
    if((a == b || a == c || b == c) && !(a == b && b == c)) console.log("É um triângulo isóceles")
    if(a != b && b != c) console.log("É um triângulo escaleno")
    if(a == b && b == c) console.log("É um triângulo equilátero")  
} else {
    console.log("Não é um triângulo")
}