
/* 
Um comerciante comprou um produto e quer vendê-lo com lucro de 45% 
se o valor da
compra for menor que 20,00; caso contrário, o lucro será de 30%. 
Ler o valor do produto e
imprimir o valor da venda (conforme as taxas do enunciado).
*/


let dadosUsuario = Number(prompt("Insira um número"))
let numero1 = 0.45
let numero2 = 0.30 


if(dadosUsuario <= "20") {
 console.log("O valor do lucro é: " + dadosUsuario * numero1 + " R$")
} else if(dadosUsuario >= "30") {
 console.log("O valor do lucro é: " + dadosUsuario * numero2 + " R$")
} else {
 console.log("Valor inválido")
}
 