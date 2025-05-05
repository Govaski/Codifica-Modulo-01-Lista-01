/* 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
 "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. */

//Aprovado: 10 9 8 7
//Recuperação: 6 5 4 3
//Reprovado: 2 1 0

 let prompt = require("prompt-sync")()

 console.log('Esse programa recebe uma nota de 0 a 10 e classifica ela entre "Aprovado" (>= 7), "Recuperação" (<7) e "Reprovado"(<3)')
 let grade = Number(prompt("Digite a nota: "))

if (isNaN(grade) || grade < 0 || grade > 10){
    console.log("Digite um número válido de 0 a 10")
    return
}

 if (grade >= 7) {
    console.log("Aprovado")
 } else if (grade < 7 && grade > 2) {
    console.log("Recuperação")
 } else {
    console.log("Reprovado")
 }