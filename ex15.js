/*  15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
 Fibonacci utilizando um loop for. */

console.log("Esse programa imprime a sequencia de Fibonacci até 10 iterações")

 let first = 1
 let second = 1
 let res = 1
 for (let i = 0; i < 10; i++) {
    console.log(`${i+1}. ${res}`)
    res = first + second
    first = second
    second = res
 }