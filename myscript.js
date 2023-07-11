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

//bada bene ce lo sqaureCounts con s finale
const sqaureCounts = parseInt(document.querySelector("[name='sqaureCounts']").value);
console.log(sqaureCounts); //adesso  funziona, verrà visualizzato il valore del campo di input con l'attributo name="sqaureCounts" 100 81 49

//torno fa sotto per creare una costanta
const gridlist = creatoGriglia(sqaureCounts)  //RISOLVERE  problema qusto e un number ma deve essere un elemento html

console.log(gridlist)
//so quanti elementi vanno stampati
//generazione griglia









/**
* questo mi serve per generare un quadrato
* @param {string} sqaureCount
* @returns {HTMLDivElement}
*/
function creatoQuadrato(sqaureCount) {
    const square = document.createElement("div");

    square.classList.add("grigliaquadrata");//errore qua per via delli spazi nelle parentesi
    //square.classList.add("griglia quadrata");

    //con confondere questo sqaureCount con quello con la s finale
    //mi serve per mettere il contenuto internamente nel quadrato
    square.textContent = sqaureCount

    //questo e un autput
    return square;

}

const quadrato = creatoQuadrato(sqaureCounts);
gridContainerQui.appendChild(quadrato);
});







//sotto mi serve per creare gli elemeti html  , e poi li salvo in una variabbile per quando si fa click

/**cosi facendo o convertito numeroQuadrati any a number
* @param {number} numeroQuadrati  //qui i qudrati che vanno nella griglia attenzione al passagio
*/
function creatoGriglia(numeroQuadrati) {//adesso e un number grazie a riga sopra

const grid = []

//ciclo for
for (let i = 0; i < numeroQuadrati; i++) {  //il validatore mi da errore sulla < che non deve avere spaziature        //numeroQuadrati non ha problemi


    //perche non e una stringa ?
    //salvo in una variabbile output della funzione creatoQuadrato
    const nuovoQuadrato = creatoQuadrato("sqr" + i, numeroQuadrati )                               //a pensarci infatti lerrore e la ("qua" + i)                                    //problema

    //cosi facendo salvo il quadrato
    grid.push(nuovoQuadrato)                                                                                                                                        //trovato il problema e QUI


}

/*  non va bene mi stampa nel html solo  un  numero selezionato non tutti , quindi 100 mi stampo solo un numero 100 non 100 numeri 100
for (let i = 0; i < sqaureCounts; i++) {
    const quadrato = creatoQuadrato(i + 1);
    gridContainerQui.appendChild(quadrato);
}
*/
    //outup
    return grid;   //any  


}




//turri i grid conterrano gli arrei
//riga 33 e 92 problemi 