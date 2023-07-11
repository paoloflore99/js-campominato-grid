"use strict"

/*
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

//prima di tutto per creare tutti i quadrati come faccio  eeeee


//quindi devo creare 10 righe da 10 caselle

//va a chiamare il select con name sqaureCounts




//va a chiamare la id# btnjs
const btnJsQui = document.querySelector("#btnjs");

//va a chiamare il div con id gridContainer colui che avrà le griglie al suo interno
const gridContainerQui = document.querySelector("#gridContainer");

//vado a mettere il click sul btnjs
btnJsQui.addEventListener("click", function () {
    //console.log("ciao"); // funziona, viene visualizzato "ciao" sulla console dentro il click

    const sqaureCounts = parseInt(document.querySelector("[name='sqaureCounts']").value);
    console.log(sqaureCounts); //adesso  funziona, verrà visualizzato il valore del campo di input con l'attributo name="sqaureCounts" 100 81 49

//so quanti elementi vanno stampati
//generazione griglia
});