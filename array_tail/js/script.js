console.log('JS TAIL OK');

/*
Scompongo il problema 
- 1 Creo un prompt per chiedere all'utente quanti elementi dovrà contenere la mia lista
- 2 Controllo che l'utente abbia inserito un numero maggiore di 6
- 3 Controllo che l'utente abbia inserito un valore corretto
- 4 Se il numero inserito è inferiore di 6 creo un alert
- 5 Genero tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
- 6 Selezione gli ultimi 5 numeri della lista
- 7 Stampo gli ultimi 5 numeri della lista

Bonus
- 8 Creo un altro prompt e chiedo all'utente quanti elementi dell'array dovremo stampare
- 9 Controllo che l'utente abbia riposto al secondo prompt con un numero minore del primo
- 10 Stampo gli elementi
*/

// - 1 Creo un prompt per chiedere all'utente quanti elementi dovrà contenere la mia lista
const userElement = parseInt(prompt('Quanti elementi deve avere la lista?'))
console.log(userElement);

// - 2 Controllo che l'utente abbia inserito un numero maggiore di 6
if (userElement < 6) {
    alert('Devi inserire un valore superiore a 6');
} else if (isNaN(userElement)) {
    alert('Devi inserire un valore');
}