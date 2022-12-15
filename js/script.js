/*
Palidroma
- Chiedere all'utente di inserire una parola tramite un form.
- Creare una funzione per capire se la parola inserita è palindroma
*/

//funzione inserire una parola
function isPalindroma(text) {

    let pali = [];
    // parola al contrario
    for (let i = text.length; i >= 0; i--) {
        pali.push(text[i]);
    }

    // parola al rovesio
    for (let i = 0; i < word.length; i++) {      
        if (word[i] != pali[i + 1]) {
            return false;
        }
    }

    return true;
}

const word = prompt("Inserisci una parola");

let palindroma = isPalindroma(word);

//stampo il risultato
console.log(palindroma);




/*
Pari e dispari
- L'utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramite un form.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
- Dichiariamo chi ha vinto.
*/