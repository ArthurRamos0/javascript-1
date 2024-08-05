const prompt = require("readline-sync");

let i;

// Expressão 1: inicialização da variavel de controle
// expressão 2: condição de parada do for
// expressão 3: o iniciamento da variável de controle

// for (expressão 1; expressão 2; expressão 3 ){
// o escopo do for
// }

for (i = 0; i < 5; i++) {
  console.log(i);
}
//limpando o console
console.clear();

// Exemplo

// let maiorNumero = 0
// let numeroInformado;

// for (let i = 1; i <= 5; i++ ) {
//   numeroInformado = Number(prompt.question('informe um número positivo:'))

//   if (numeroInformado > maiorNumero) {
//     maiorNumero = numeroInformado
//   }
// }

// console.log("maior número:", maiorNumero)

//Exemplo : Percorrendo strings com o for

// const nome = "Arthur"

// for (let i = 0; i < nome.length; i++) {
//   console.log (nome[i])
// }

// ARRAYS

const nota1 = 10;
const nota2 = 8;
const nota3 = 5;

const notasDoAluno = [10, 8, 5];
const pessoa = ["Arthur", 22, 1.65, true];

console.log(notasDoAluno);
console.log(pessoa);

console.log(pessoa[0]);

pessoa[3] = false //Pode alterar um elemento do array

console.log(pessoa)

console.clear()
console.log(pessoa.length)
console.log(notasDoAluno.length)

console.clear()

//Fatiamento de arrays
const numeros = [40, 34, 97, 45, 66]

console.log(numeros.slice(0,2))
console.log(numeros.slice(2))
console.clear()

//Adicionando elementos no final do array
numeros.push(0)
console.log(numeros)
console.clear()

//Adicionando elementos no inicio do array
numeros.unshift(-1)
console.log(numeros)
console.clear()

//pop: Remover elemento que está no final do array
numeros.pop() //Removeu o elemnto 0(do final)
console.log(numeros)
console.clear()

//shift: Remover o primeiro elemento do array
numeros.shift()
console.log(numeros)
console.clear()

//Sera se o elemnto 20 existe noo array numeros?
console.log(numeros.includes(20))
console.log(numeros.includes(40))
