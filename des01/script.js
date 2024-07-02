
/* Crie uma variável chamada “fruta”. 
Esta variável deve receber uma string com o nome de uma fruta.
Após, crie uma estrutura condicional switch que 
receba esta variável e que possua três casos: 
caso maçã, retorne no console: 
“Não vendemos esta fruta aqui”. 
Caso kiwi, retorne: “Estamos com escassez de kiwis” e caso melancia, 
retorne: “Aqui está, são 3 reais o quilo”. 
Teste com estas três opções e verifique o console do seu navegador. 
Crie também um default, que retornará uma mensagem de erro no console. */ 

let frutas = parseInt(prompt("Escolha uma fruta " + 
"\n1 - maçã \n2 - Kiwi \n3 - Melancia"))
switch(frutas) {
   case 1: 
     console.log("Não vendemos essa fruta aqui")
     break 
   case 2: 
     console.log("Estamos com escassez de kiwis")  
     break 
   case 3:   
     console.log("Aqui está, são 3 reais o quilo.")
     break 
   default: 
     console.log("Desculpe, aqui não tem essa fruta!")
     break  
}