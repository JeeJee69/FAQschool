let numeroClick = 0;
const titoloOriginale = "Benvenuto su sito FAQ-School";

function aggiornaFraseClick() {
  const fraseClick = document.getElementById("fraseClick");
  const contatore = document.getElementById("contatore");
  contatore.textContent = numeroClick;
  fraseClick.textContent = `Hai cliccato ${numeroClick} volte.`;
}

function cambiaTesto() {
  numeroClick++;
  const titolo = document.getElementById("titolo");
  titolo.textContent = "perchè l'hai fatto?";
  aggiornaFraseClick();
}

function resetTitolo() {
  numeroClick++;
  const titolo = document.getElementById("titolo");
  titolo.textContent = titoloOriginale;
  aggiornaFraseClick();
}