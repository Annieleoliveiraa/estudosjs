
/* Faça um script que pede duas notas de um aluno. 
   Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:
   A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
   A mensagem "Reprovado", se a média for menor do que sete;
   A mensagem "Aprovado com Distinção", se a média for igual a dez. 
*/

let notaAluno1 = Number(prompt('Digite um número'))
let notaAluno2 = Number(prompt('Digite outro número'))
let Total = notaAluno1 + notaAluno2 / 2

if(Total <= 7) {
  console.log("Aprovado!")
} else if(Total < 7) {
  console.log("Reprovado!")
} else if(Total == 10) {
  console.log("Aprovado com Distinção!")
} 

//else {
   ///console.log("[ERRO] Nota inválida!")
//}
