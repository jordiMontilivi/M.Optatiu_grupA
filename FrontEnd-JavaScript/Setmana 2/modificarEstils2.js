document.querySelector("button").onclick = function(){
  const blancDiv = document.getElementsByClassName("blanc");
  for(let i = 0; i < blancDiv.length; i++){
    blancDiv[i].classList.toggle("blau");
  }
}
