"use strict";

const arrayA = [1, 2, 3, 4, 5, 6, 7];
let inputElement = "Ciccio";

function inserisciInTesta(array, input) {
  const arrayB = [input];
  let arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    arrayB[i + 1] = array[i];
  }

  return arrayB;
}

inserisciInTesta(arrayA, inputElement);

console.log(inserisciInTesta(arrayA, inputElement));
