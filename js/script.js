/*
Palidroma
- Chiedere all'utente di inserire una parola tramite un form.
- Creare una funzione per capire se la parola inserita è palindroma
*/

//funzione inserire una parola
function isPalindroma(word) {

    let text = [];
    // parola al contrario
    for (let i = word.length; i >= 0; i--) {
        text.push(word[i]);
    }

    // parola al rovesio
    for (let i = 0; i < parola.length; i++) {      
        if (parola[i] != text[i + 1]) {
            return false;
        }
    }

    return true;
}

const parola = prompt("Inserisci una parola");

let palindroma = isPalindroma(parola);

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