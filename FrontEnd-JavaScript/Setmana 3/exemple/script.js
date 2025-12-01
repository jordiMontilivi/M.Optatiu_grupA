document.getElementById("botoCanviText").addEventListener("click", () => {
    document.querySelector(".text").textContent = "Text canviat des de JavaScript!";
});

document.querySelectorAll(".btnMostra").forEach((boto, index) => {
    boto.addEventListener("click", () => {
        alert(`Has seleccionat l’article número ${index + 1}`);
    });
});

document.getElementById("afegirElement").addEventListener("click", () => {
    const nouLi = document.createElement("li");
    nouLi.textContent = "Nou element afegit via JS";
    nouLi.classList.add("itemLateral");
    document.getElementById("llistaLateral").appendChild(nouLi);
});

document.getElementById("canviarImatge").addEventListener("click", () => {
    document.getElementById("imatgeExemple").src =
        "https://via.placeholder.com/250/ff0000/ffffff?text=Imatge+Nova";
});
