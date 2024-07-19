
/* 
Faça um programa que leia dois números e efetua a adição. Se o valor somado for
maior que 20, este deverá ser apresentado somando-se a ele 8; se o valor somado for
menor ou igual a 20, este deverá ser apresentado subtraindo-se 5.
*/ 


let numero = parseInt(prompt("Insira um valor"))
let valor1 = 8
let valor2 = 5

if(numero > 20) {
  console.log("O valor é: " + (numero + valor1))
} else if (numero <= 20) {
  console.log("O valor é: " + (numero - valor2))
} else {
  console.log("Valor inválido.")
}
