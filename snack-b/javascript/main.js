"use strict";

// Array dove cercare
const array = ["pane", "pasta", "acqua", "sale", "pomodoro", "tonno", "pepe"];

// Elemento da cercare nell'array
const inputElement = "tonno";

// Funzione per scorrere nell'array e cercare l'elemento
function positionSearch(input) {
  for (let counter = 0; counter < array.length; counter++) {
    if (array[counter] === input) {
      return counter;
    }
  }
}

// Invocazione della funzione
positionSearch(inputElement);

// Assegno ad una variabile il risultato della funzione
const elementPosition = positionSearch(inputElement);

// Stampo in console il risultato
console.log(elementPosition);
