let peres = parseInt(prompt('Introdueix quantitat peres '));
let pomes = parseInt(prompt('Introdueix quantitat pomes '));

let fruites = peres + pomes;

// Mostrar el resultat dintre de l'etiqueta <span id="fruites">
document.getElementById("peres").textContent = peres;
const pomesElem = document.getElementById("pomes");
pomesElem.textContent = pomes;
//document.getElementById("pomes").textContent = pomes;
document.getElementById("fruites").textContent = fruites;