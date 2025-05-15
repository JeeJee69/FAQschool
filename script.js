let numeroClick = 0;
const titoloOriginale = "Benvenuto su sito FAQ-School";

function aggiornaFraseClick() {
  const numero = document.getElementById("numeroClick");
  numero.textContent = numeroClick;
}

function cambiaTesto() {
  numeroClick++;
  const titolo = document.getElementById("titolo");
  titolo.textContent = "perché l'hai fatto?";
  aggiornaFraseClick();
}

function resetTitolo() {
  numeroClick++;
  const titolo = document.getElementById("titolo");
  titolo.textContent = titoloOriginale;
  aggiornaFraseClick();
}
