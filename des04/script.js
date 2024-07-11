
/*  
Faça um programa que leia três notas, calcule e mostre a 
média aritmética entre elas,se a media aritmética for:
♦ Media maior ou igual a 7 – ALUNO APROVADO
♦ Media maior ou igual a 5 e menor que 7 – ALUNO EM RECUPERAÇÃO
♦ Media menor que 5 – ALUNO REPROVADO
*/

let notasAluno = Number(prompt("Insira um valor"))

if(notasAluno >= 7) {
  console.log("ALUNO APROVADO")
}else if(notasAluno >= 5 && notasAluno < 7) {
  console.log("ALUNO EM RECUPERAÇÃO")
} else if(notasAluno < 5) {
   console.log("ALUNO REPROVADO")
}