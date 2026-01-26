function showMessage(message) {
  // Crear o obtenir el contenidor de missatges
  let messageContainer = document.getElementById("messageContainer");
  if (!messageContainer) {
    messageContainer = document.createElement("div");
    messageContainer.id = "messageContainer";
    messageContainer.style.position = "fixed";
    messageContainer.style.top = "10px";
    messageContainer.style.right = "10px";
    messageContainer.style.width = "400px";
    messageContainer.style.zIndex = "1000";
    messageContainer.style.pointerEvents = "none"; // Evitar interferència amb altres elements
    document.body.appendChild(messageContainer);
  }

  // Crear l'element del missatge
  const messageDiv = document.createElement("div");
  messageDiv.textContent = message;
  messageDiv.style.padding = "10px";
  messageDiv.style.marginBottom = "10px";
  messageDiv.style.borderRadius = "5px";
  messageDiv.style.color = "white";
  messageDiv.style.fontSize = "14px";
  messageDiv.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
  messageDiv.style.pointerEvents = "auto"; // Permetre interacció amb el missatge
  messageDiv.style.backgroundColor = "#007bff"; // Blau per defecte (info)

  // Afegir el missatge al contenidor
  messageContainer.appendChild(messageDiv);
}
