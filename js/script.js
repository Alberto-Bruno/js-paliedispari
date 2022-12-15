/*
Palidroma
- Chiedere all'utente di inserire una parola tramite un form.
- Creare una funzione per capire se la parola inserita è palindroma
*/

//funzione inserire una parola
const wordElement = document.getElementById("word");
// Chiedo all'utente di inserire una parola 

let userWord = prompt("Inserisci una parola");

if (functPalindrome(userWord) == true) {
    console.log('è palindroma');
    wordElement.innerHTML = `${userWord} è palindroma`;
} else {
    console.log('non è palindroma');
    wordElement.innerHTML = `${userWord} non è palindroma`;
}


// funzione 
function functPalindrome(inputWord) {

    // confronto la parola inserita 
    if (inputWord) {
        return true;
    } else {
        return false;
    }
}

/*
Pari e dispari
- L'utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramite un form.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
- Dichiariamo chi ha vinto.
*/