/*
Palidroma
- Chiedere all'utente di inserire una parola tramite un form.
- Creare una funzione per capire se la parola inserita è palindroma
*/

//funzione inserire una parola
const form = document.getElementById('palindroma-form');
const wordElement = document.getElementById("word");
const resultElement = document.getElementById('result');

// Invio del Form
form.addEventListener('submit', function (event) {
    // Blocco l'invio del form 
    event.preventDefault();
    
    // Recupero il valore dell'input
    const word = wordElement.value.trim();

    // Validazione
    if (!word || word.lenght < 4) {
        alert('Parola inserita non valida');
        wordElement.classList.add('invalid');
        return;
    }

    // Messaggio
    const message = (word) ? `La parola ${word} è palindroma` : `La parola ${word} non è palindroma`;

    // Stampo il messaggio
    resultElement.innerText = message;
})
