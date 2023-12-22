console.log('JS LISTA OK');

/*
Scompongo il problema 
- 1 Creo l'array
- 2 Inserisco la pesca nell'array
- 3 Creo un for per controllare tutti i valori dell'array
- 4 Controllo che all'interno dell'array ci sia il valore indicato
- 5 Creo il messaggio di conferma
- 6 Se l'elemento è all'interno creo il messaggio di conferma
- 7 Stampo in console
*/

// - 1 Creo l'array
const fruits = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
console.log(fruits);

// - 2 Inserisco la pesca nell'array
fruits.push('pesca');
console.log(fruits);

// - 5 Creo il messaggio di errore
let message = "Oh no, devo uscire a comprare il cocomero!";

// - 3 Creo un for per controllare tutti i valori dell'array
for (let i = 0; i < fruits.length; i++) {

    // - 4 Controllo che all'interno dell'array ci sia il valore indicato (cocomero)
    if (fruits[i] === 'cocomero') {

        // - 6 Se l'elemento è all'interno creo il messaggio di conferma
        message = "Trovato! Devo solo preparare il cocktail.";
    }

}

// - 7 Stampo in console
console.log(message);