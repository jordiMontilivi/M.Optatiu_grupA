// Selecciona l'element del DOM
const boto = document.getElementById("boto");

boto.addEventListener("mouseover", function () {
  boto.textContent = "Calcula fruites";
});

// Associa un esdeveniment al botó
boto.addEventListener("click", function () {
  document.getElementById("fruites").textContent =
  Number(document.getElementById("peres").textContent) +
  Number(document.getElementById("pomes").textContent);
});
