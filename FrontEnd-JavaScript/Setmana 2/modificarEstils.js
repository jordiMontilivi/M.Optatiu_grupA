const boto = document.getElementsByTagName("button")[0];
//! Millor aquesta 
boto.addEventListener("click", canviarBarcelona);
//! No està malament
//boto.onclick = canviarBarcelona;
//!no usar aquesta s'auto executa
// boto.addEventListener("click", canviarBarcelona () );
let blau = false;

function canviarBarcelona() {
    const blancDiv = document.getElementsByClassName("blanc");
    for (let i = 0; i < blancDiv.length; i++) {
      if (blau){
        blancDiv[i].style["background-color"] = ""; // Tornar al color original
        document.querySelector("h1").innerHTML = "Bandera <em>Girona</em>";
      }
      else{
        blancDiv[i].style["background-color"] = "blue";
        document.querySelector("h1").innerHTML = "Bandera <em>Barcelona</em>";
      }
    
    //! blancDiv[i].style.backgroundColor = "white";
  }
  blau = !blau; // Invertir l'estat
}

