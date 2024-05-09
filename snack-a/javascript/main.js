"use strict";

// Array di partenza
const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Richiamo la funzione
const totCount = contaElementi(elements);

// Stampo in console il risultato
console.log(totCount);

// Funzione che ritorna la lunghezza dell'array
function contaElementi(array) {
  return array.length;
}

// Con utilizzo di while

/*   function contaElementi(array) {
  let count = 0;
while(input[count]) !== undefined {
  count++;
}

return count;

}  --> questo funziona se non abbiamo valori undefined all'interno dell'array

*/
