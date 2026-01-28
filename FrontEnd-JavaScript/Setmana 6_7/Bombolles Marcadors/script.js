// So que es reprodueix quan explota una bombolla
const pop = new Audio("media/pop.mp3");

/* ---------- VARIABLES DE CONTROL ---------- */

// Comptador de bombolles creades
let totalBombolles = 0;
// Comptador de bombolles explotades
let bombollesExplotades = 0;
// Comptador de bombolles que escapen
let bombollesEscapades = 0;

/* ---------- ELEMENTS DE LA INTERFÍCIE UI ---------- */

// Referències als elements HTML on es mostren els comptadors
const txtTotal = document.getElementById("total");
const txtExplotades = document.getElementById("explotades");
const txtEscapades = document.getElementById("escapades");
const txtPercentatge = document.getElementById("percentatge");

// Botó per crear bombolles manualment
const botoNovaBombolla = document.getElementById("novaBombolla");
botoNovaBombolla.addEventListener("click", creaBombolla);

/* ---------- FUNCIONS ---------- */

//Actualitza els valors dels comptadors a la pantalla
function actualitzaComptadors() {
  txtTotal.textContent = totalBombolles;
  txtExplotades.textContent = bombollesExplotades;
  txtEscapades.textContent = bombollesEscapades;

  // Evitem dividir entre zero
  let percentatgeExit = 0;
  if (totalBombolles > 0) {
    percentatgeExit = (bombollesExplotades / totalBombolles) * 100;
  }

  txtPercentatge.textContent = percentatgeExit.toFixed(2) + "%";
}

// Funció per crear una nova bombolla
function creaBombolla() {
  // Mida aleatòria de la bombolla
  let mida = Math.floor(Math.random() * 200) + 50;

  // Posició horitzontal aleatòria
  let posicioX = Math.random() * (window.innerWidth - mida);

  // Posició vertical inicial (part inferior de la pantalla)
  let posicioY = window.innerHeight;

  // Opacitat aleatòria entre 0.5 i 1
  let opacitat = (Math.random() * 0.5 + 0.5).toFixed(2);

  // Creem l'element div de la bombolla
  const bombolla = document.createElement("div");
  bombolla.className = "bombolla";

  // Assignem els estils
  bombolla.style.width = mida + "px";
  bombolla.style.height = mida + "px";
  bombolla.style.left = posicioX + "px";
  bombolla.style.top = posicioY + "px";
  bombolla.style.opacity = opacitat;

  // Acció quan fem clic sobre la bombolla
  bombolla.onclick = function () {
    bombolla.remove();
    pop.play();
    bombollesExplotades++;
    actualitzaComptadors();
  };

  // Afegim la bombolla al document
  document.body.appendChild(bombolla);

  // Incrementem el comptador total
  totalBombolles++;
  actualitzaComptadors();
}

// Funció que s'executa contínuament per animar les bombolles
function animacio() {
  // Obtenim totes les bombolles existents
  const bombolles = document.getElementsByClassName("bombolla");

  // Recorrem totes les bombolles
  for (let i = 0; i < bombolles.length; i++) {
    const bombolla = bombolles[i];

    // Obtenim la posició vertical actual
    let topActual = parseInt(bombolla.style.top);

    // Obtenim la mida de la bombolla
    let mida = parseInt(bombolla.style.height);

    // Si la bombolla surt per la part superior
    if (topActual <= -mida) {
      bombolla.remove();
      bombollesEscapades++;
      actualitzaComptadors();
    } else {
      // Fem pujar la bombolla (canviem la seva posició top i es redibuixa)
      bombolla.style.top = topActual - mida / 100 + "px";
      // bombolla.style.left = parseInt(bombolla.style.left) - 0.5 + "px"; // Lleugera desviació horitzontal
    }
  }

  // De tant en tant apareix una bombolla automàticament
  if (Math.random() > 0.99) {
    creaBombolla();
  }

  // Tornem a cridar la funció per continuar l'animació
  requestAnimationFrame(animacio);
}

/* ---------- INICI DEL PROGRAMA ---------- */

// Iniciem l'animació
animacio();
