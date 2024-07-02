
/*
Desenvolva um programa que receba como entrada um número inteiro que 
represente um dos 7 dias da semana e imprima na tela se esse dia é util, 
final de semana ou inválido. 
Considere que Domingo é o dia 1 e Sábado o dia 7. 
*/ 

let diadaSemana = parseInt(prompt("Digite um número"))

/* "\n1  \n2   \n3  \n4  \n5  \n6  \n7" */

switch(diadaSemana) {
   case 1: 
     console.log("Domingo")
     console.log("Fim de semana")
     break 
   case 2: 
     console.log("Segunda")  
     console.log("Dia útil")
     break 
   case 3: 
     console.log("Terça")
     console.log("Dia útil")
     break 
   case 4: 
     console.log("Quarta")
     console.log("Dia útil")
     break 
   case 5: 
     console.log("Quinta") 
     console.log("Dia útil")
     break 
   case 6: 
     console.log("Sexta") 
     console.log("Dia útil")
     break 
   case 7: 
     console.log("Sábado")   
     console.log("Fim de semana")
     break 
   default: 
     console.log("Dia Inválido")
     break    
}