console.log('JS OK')
/*
Pari e dispari
- L'utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramite un form.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
- Dichiariamo chi ha vinto.
*/


// Prendo gli elementi
const form = document.getElementById('pariodispari-form');
const numberElement = document.getElementById('number');
const choiceField = document.getElementById('choice');
const result = document.getElementById('result');

// form
form.addEventListener('submit', function (event){
    //blocco l'invio
    event.preventDefault();

    // Dati form

    const userNumber = parseInt(numberField.value.trim());
    const userchoice = choiceField.value;


    //Validazione
    
})