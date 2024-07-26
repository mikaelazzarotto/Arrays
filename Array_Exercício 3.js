/*2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
a) Imprima no console o array completo
b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista*/

let comida = ['pizza' , 'chocolate' , 'sorvete' , 'batata frita' , 'churrasco']
console.log(comida)
console.log( "Essas são as minhas comidas preferidas:" , '\n' , comida[0] , '\n' , comida[1] , '\n' , comida[2] , '\n' , comida[3] , '\n' , comida[4] );

comidaUsuario = prompt ("Qual sua comida preferida?")

comida [1] = comidaUsuario
console.log( "Essas são as minhas comidas preferidas:" , '\n' , comida[0] , '\n' , comida[1] , '\n' , comida[2] , '\n' , comida[3] , '\n' , comida[4] );
