"use strict";

// Array di partenza
const elementi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Richiamo la funzione
const totCount = contaElementi(elementi);

// Stampo in console il risultato
console.log(totCount);

// Funzione che ritorna la lunghezza dell'array
function contaElementi(array) {
  return array.length;
}
