const prompt = require("readline-sync");

const idade = Number(prompt.question("Qual eh a sua idade?"));

// Estrutura condicional IF/ELSE

if (idade >= 18) {
  console.log("Você eh maior de idade!");
} else {
  console.log("Você é menor de idade!");
}

const mediaDoAluno = 7;

// Média >= 7 -> Aprovado
// Média < 7 e Média >= 5 ->Prova final
// Média < 5 -> Reprovado

if (mediaDoAluno >= 7) {
  console.log("Aprovado!");
} else if (mediaDoAluno >= 5) {
  console.log("Prova final");
} else {
  console.log("Reprovado");
}


// 1.Preciso ser maior de idade
// 2.Preciso ter uma CHN (PPD)

const idadeDaPessoa = 18
const temCNH = true

if (idadeDaPessoa >= 18 && temCNH) {
  console.log ("Pode dirigir")
} else {
  console.log ("Não pode dirigir")
}
