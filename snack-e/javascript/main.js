"use strict";

const arrayA = [1, 2, 3, 4, 5, 6];

function rimuoviDallaTesta(array) {
  let arrayB = [];
  let arrayLength = array.length;

  for (let i = 1; i < arrayLength; i++) {
    arrayB[i - 1] = array[i];
  }

  return arrayB;
}

rimuoviDallaTesta(arrayA);

let finalArray = rimuoviDallaTesta(arrayA);

console.log(finalArray);
