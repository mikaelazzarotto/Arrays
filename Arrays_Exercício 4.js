/*3. Faça um programa, seguindo os passos:
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
c) Imprima o array no console
d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
e) Remova da lista o item de índice que o usuário escolheu.
f) Imprima o array no console*/

let listaDeTarefas = []

let contador = 0
while ( contador < 3) {
    listaDeTarefas[contador] = prompt ("Digite uma tarefa que você realiza no seu dia a dia:")
    contador ++
}

console.log(listaDeTarefas);

let indice = prompt ("Digite 0, 1 ou 2 para retirar a tarefa menos importante do seu dia:")

listaDeTarefas.splice(indice , 1)

console.log(listaDeTarefas);
