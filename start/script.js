/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   6. evidenzia(indice) / togliEvidenza(indice)
   7. data automatica nel task
   8. contaPerPriorita()
*/

function aggiungitask(testo, priorita) {
  const nuovoeli = document.createElement(`li`);/*quindi devo collegare questa riga a class=badge*/
  nuovoeli.className = 'priorita-' + priorita;

  const badge = document.createElement(`span`);/*creo la classe*/
  badge.className = `badge`;/*creo la classe*/



  const button = document.createElement(`button`);
  button.id=`btn-bottone-aggiungi`= Date.now();
  button.appendChild(button);


  nuovoeli.textContent = testo + ` `;
  nuovoeli.appendChild(badge);/*attaco la classe*/

  const lista = document.querySelector('ul');
  lista.appendChild(nuovoeli);


}

aggiungitask("mozzarella", "alta")



