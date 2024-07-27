/*Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços*/

let frase = prompt ("Digite uma frase:")
let array = frase.split(" "); // precisa colocar entre aspas duplas para retornar as palavras como elementos
console.log(array)
