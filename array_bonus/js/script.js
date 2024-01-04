console.log('JS BONUS OK');

/*
Scompongo il problema
- 1 Crea i due array
- 2 Mostro in console la lunghezza delle 2 liste, così da sapere qual è la più lunga
- 3 Creo un ciclo for dove la mia comparazione sarà la lunghezza dei due array
 - 4 All'interno del ciclo for per ogni giro inserisco un elemento alla lista
- 5 Mostro in console le due liste con lo stesso numero di elementi
*/

// - 1 Crea i due array
const listElements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const listNumbers = [1, 2, 3, 4,];
console.log(listElements, listNumbers);

// - 2 Mostro in console la lunghezza delle 2 liste, così da sapere qual è la più lunga
console.log('La prima lista è lunga:', listElements.length, 'elementi');
console.log('La seconda lista è lunga:', listNumbers.length, 'elementi');


// - 3 Creo un ciclo for dove la mia comparazione sarà la lunghezza dei due array
for (let i = 0; listNumbers.length < listElements.length; i++) {

    // - 4 All'interno del ciclo for per ogni giro inserisco un elemento alla lista
    listNumbers.push(i + 5);
}

// - 5 Mostro in console le due liste con lo stesso numero di elementi
console.log(listElements, listNumbers);