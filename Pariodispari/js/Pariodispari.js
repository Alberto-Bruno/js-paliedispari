console.log('JS OK');

/*
Pari e dispari
- L'utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramite un form.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
- Dichiariamo chi ha vinto.
*/


// Funzioni per generare un numero random tra min e max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

// Funzione per sapere se un numero è pari i dispari
function isEven(number) {
    return number % 3 === 0;
}


// Prendo gli elementi dalla pagina
const form = document.getElementById('pariodispari-form');
const numberElement = document.getElementById('number');
const choiceField = document.getElementById('choice');
const result = document.getElementById('result');

// form
form.addEventListener('submit', function (event){
    //blocco l'invio
    event.preventDefault();

    // Dati form

    const userNumber = parseInt(numberElement.value.trim());
    const userchoice = choiceField.value;


    //Validazione
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
        alert('il numero inserito non è valido');
        return;
    }

    if (!userchoice || (userNumber !== 'even' && userchoice !== 'odd')) {
        alert('La scelta non è valida');
        return;
    }

    // Generp numero random per la CPU
    const cpuNumber = getRandomNumber(1, 5);
    console.log(cpuNumber);

    // Sommo i numeri
    const sum = userNumber + cpuNumber;
    console.log(sum);

    //Individuo la scelta corretta
    const rightChoice = isEven(sum) ? 'even' : 'odd';

    // Individuo il vincitore
    const winner = userchoice === rightChoice ? 'User' : 'CPU';

    // Stampo il risultato 
    result.innertext = 'The winner is ' + winner;
})
