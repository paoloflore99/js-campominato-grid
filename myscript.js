"use strict"

/*
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

//prima di tutto per creare tutti i quadrati come faccio  eeeee


//quindi devo creare 10 righe da 10 caselle
/**
 * @type {HTMLSelectElement}  mi serve per il value . per dire a sqaureCountsQui sara un elemento di tipo html select
 */
//va a chiamare il select con name sqaureCounts
const sqaureCountsQui = document.querySelector("[name='sqaureCounts']");

//va a chiamare la id# btnjs
const btnJsQui =  document.querySelector("#btnjs")

//va a chiamare il div con id gridContainer colui che avra le griglie al suo interno
const gridContainerQui = document.querySelector("#gridContainer")

//ilvalue appena messo da errore ,  perche? riga 14 16 il risultato
const sqaureCounts = parseInt(sqaureCountsQui.value); 

//vado a mettere il click sul btnjs
btnJsQui.addEventListener("click", function () {
    console.log("ciao")//funziona io click

    console.log(sqaureCountsQui) // lo sqaureCountsQui sembra funzionare pero sulla consol mi fa uscire html non il numero che metto. perche ?
})

