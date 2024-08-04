const prompt = require("readline-sync");

const permissoes = "admin"; //'aluno' || 'professor' || 'admin'
switch (permissoes) {
  case "aluno":
    console.log("Você so pode visualizar as aulas e notas.");
    break;
  case "professor":
    console.log("Você pode adicionar notas e exercicios.");
    break;
  case "admin":
    console.log("Você pode fazer o que quiser no sistema.");
    break;
  default:
    console.log("Não sei quem você é no sistema");
}
