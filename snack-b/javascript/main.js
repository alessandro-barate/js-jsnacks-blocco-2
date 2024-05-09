"use strict";

// Array dove cercare
const array = ["pane", "pasta", "acqua", "sale", "pomodoro", "tonno", "pepe"];

// Elemento da cercare nell'array
const inputElement = "mare";

// Funzione per scorrere nell'array e cercare l'elemento
function trovaIndice(input) {
  for (let counter = 0; counter < array.length; counter++) {
    if (array[counter] === input) {
      return counter;
    }
  }

  return -1;
}

// Invocazione della funzione
trovaIndice(inputElement);

// Assegno ad una variabile il risultato della funzione
const elementPosition = trovaIndice(inputElement);

// Stampo in console il risultato
console.log(elementPosition);
