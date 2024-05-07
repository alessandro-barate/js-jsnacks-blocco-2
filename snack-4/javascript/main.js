"use strict";

/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.  */

const array1 = [1, 2, 3, 4, 5, 7, 9, 6];
const array2 = [6, 7, 8];
let count = 0;

while (array2.length < array1.length) {
  const randomNumber = Math.floor(Math.random() * 9) + 1;
  array2.push(randomNumber);
}

console.log(array1);
console.log(array2);
