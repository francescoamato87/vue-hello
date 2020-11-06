
// INTRO TO VUE jS
// console.log('JS okay! Vue');

// VUE RISCRIVE IL DOM NON LO MANIPOLA.
// Utilizza dei Ta g HTML che il Browser non conosce traducendoli così da essere comprnsibili. Ad ogni evento si preoccupa di cancellare il DOM e rigenerarlo in parte o nella sua totalità...


// Collegamento tra HTML e JAVASCRIPT

const app = new Vue({
  el: '#app',             // <-- OGGETTO
  data:{ //  PROPRIETA' CON UN VALORE DI TIPO OGGETTO
     // e settiamo tutte le variabili che riguarderanno l' EL quindi APP
     titolo: 'Vue Portfolio 2.0',
     myClasses:"main-title",
     image:'./img/posner.jpg',
     message: ''

   }
});

// Descrizione:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// BONUS aggiungere un'immagine presa anch'essa da un data (url dell'immagine)
