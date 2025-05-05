/* 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
 e escreve-los em ordem crescente. */

 let prompt = require("prompt-sync")()

 let a = Number(prompt("Digite o primeiro número: "))
 let b = Number(prompt("Digite o segundo número: "))

 if (isNaN(a) || isNaN(b)){
    console.log("Digite um número válido")
    return
 }

if(a == b){
    console.log("Digite números diferentes")
    return
}

 if (a > b){
    console.log(b, " ", a)
 } else {
    console.log(a, " ", b)
 }
 