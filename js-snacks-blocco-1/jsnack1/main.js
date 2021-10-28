

//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


const word1 = prompt(`inserisci la prima parola`);
console.log(`word1`);

const word2 = prompt(`inserisci la seconda parola`);
console.log(`word2`);

if (word1.length === word2.length){
    console.log(`le due parole hanno la stessa lunghezza`);
}
else if(word1.length > word2.length){
    console.log(`${word2} ${word1}`);
}
else{
    console.log(`${word1} ${word2}`);

}
