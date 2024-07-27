/*2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array*/

let array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

let indice = 0
while (indice < 5) {
  if (array[indice] === "Abacaxi") {
    console.log("Abacaxi está posicionado no número:" , indice);
    console.log("O tamanho do array é:" , array.length);
  } else {}
indice ++
}
