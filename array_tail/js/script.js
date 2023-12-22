console.log('JS TAIL OK');

/*
Scompongo il problema 
- 1 Creo un prompt per chiedere all'utente quanti elementi dovrà contenere la mia lista
- 2 Creo un array
- 3 Controllo che l'utente abbia inserito un numero maggiore di 6
- 4 Controllo che l'utente abbia inserito un valore corretto
- 5 Se il numero inserito è inferiore di 6 creo un alert
- 6 Se il valore non è corretto creo un alert
- 7 Creo un for per mettere all'interno della lista il numero randomizzato
- 8 Creo una variabile per il numero random da inserire
- 9 Inserisco il numero randomizzato all'interno della lista
- 10 Creo una variabile che tenga conto di tutti i miei valori meno i 5 che voglio stampare in pagina
- 11 Creo la condizione per stampare gli ultimi 5 valori della lista
- 12 Stampo gli ultimi 5 valori in console

Bonus
- 13 Creo un altro prompt e chiedo all'utente quanti elementi dell'array dovremo stampare
- 14 Controllo che l'utente abbia riposto al secondo prompt con un numero minore del primo
- 15 Stampo gli elementi
*/

// - 1 Creo un prompt per chiedere all'utente quanti elementi dovrà contenere la mia lista
const userElement = parseInt(prompt('Quanti elementi deve avere la lista?', '7'));
console.log(userElement);

// - 2 Creo un array
const numbers = [];

// - 3 Controllo che l'utente abbia inserito un numero maggiore di 6
if (userElement < 6) {

    // - 5 Se il numero inserito è inferiore di 6 creo un alert
    alert('Devi inserire un valore superiore a 6');

    // - 4 Controllo che l'utente abbia inserito un valore corretto
} else if (isNaN(userElement)) {

    // - 6 Se il valore non è corretto creo un alert
    alert('Devi inserire un valore');
}


// - 10 Creo una variabile che tenga conto di tutti i miei valori meno i 5 che voglio stampare in pagina
const element = userElement - 5;

// - 7 Creo un for per mettere all'interno della lista il numero randomizzato
for (let i = 0; i < userElement; i++) {

    // - 8 Creo una variabile per il numero random da inserire
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log('i numeri random sono: ', randomNumber);

    // - 9 Inserisco il numero randomizzato all'interno della lista
    numbers.push(randomNumber);

    // - 11 Creo la condizione per stampare gli ultimi 5 valori della lista
    if (i >= element) {

        // - 12 Stampo gli ultimi 5 valori in console
        console.log('Gli ultimi 5 valori sono: ', numbers[i]);
    }

}