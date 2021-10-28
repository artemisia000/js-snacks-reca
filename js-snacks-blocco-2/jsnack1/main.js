

//Inserisci un numero, se è pari stampa il numero,se è dispari stampa il numero successivo

/*let numero = ;*/

/*console.log(numero);*/

function seiPari(numero){
    if(numero % 2 === 0){
        console.log(numero);
    } else {
        numero = numero + 1;
        console.log(numero);
    }
}

seiPari(5)
console.log(`ciao`);
seiPari(2)

const word1 = Number(prompt(`inserisci un numero`));
console.log(word1);

seiPari(word1)
