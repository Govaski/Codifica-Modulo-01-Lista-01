/* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */

console.log("Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada\n")

let prompt = require("prompt-sync")()

console.log("Escolha uma linguagem para saber mais:\n 1. C\n 2. Java\n 3. Lua")
let choice = prompt()

switch (choice) {
    case "1":
        console.log("C é uma linguagem de programação de proposito geral criada por Dennys Ritchie em 1970. Ela possui ponteiros e [Segmentation Fault]")
        break;

    case "2":
        console.log("Java é uma linguagem de programação criada por Jame Gosling em 1995 na Sun Microsystem. Ele e roda em uma máquina virtual chamada JVM e lembre-se: public static void main(String[] args){}")
        break;

    case "3":
        console.log("Lua é uma linguagem de programação brasileira. Por ser leve, é comumente usado ao lado C (e ela é possui indexador começado por 1 D:<)")
        break;

    default:
        console.log("Digite uma número válido. Enquanto isso... Lisp é uma familia de linguagens de programação conhecidas pelo uso de S-Expressions e muitos ((()))")
        break;
}