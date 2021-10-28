

//Il software deve chiedere per 5 volte all’utente di inserire un numero.Il programma stampa la somma di tutti i numeri inseriti con for e opzionalmente con while 


let somma = 0;

for (let i = 0; i < 5; i++ ){
    const newNumber = parseInt(prompt(`inserici numero`));
    somma = newNumber;
}

console.log(`La somma dei due numeri è ${somma}`);