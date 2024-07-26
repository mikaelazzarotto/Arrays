/*Para este exercício, comece criando um array com os valores: 1, 2, 3, 4, 5 e 6.
Determine o tamanho do array
Adicione o número 7
Remova os números 4 e 5
Determine o novo tamanho do array*/ 

numero = [1, 2, 3, 4, 5, 6]
console.log(numero.length)
numero.push(7)
console.log(numero.length)
numero.splice (3, 2)
console.log(numero.length && numero)

