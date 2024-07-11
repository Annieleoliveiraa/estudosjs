/* 
. Faça um programa que leia a idade de um nadador e classifique-o numa das
seguintes categorias abaixo:
• Adulto (idade >= 18);
• Juvenil (idade >= 14);
• Infantil (idade >=9);
• Mirim (Idade < 9).

*/

let idade = prompt("Digite sua idade")

if(idade >= 18) {
  console.log("Adulto")
}else if(idade >= 14) {
  console.log("Juvenil")
}else if(idade >= 9) {
  console.log("Infantil")
} else {
  console.log("Mirim")
}