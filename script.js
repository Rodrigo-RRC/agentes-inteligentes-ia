// Salvar e recuperar resposta do exercício
function salvarResposta() {
  const resposta = document.getElementById("resposta-ex1").value;
  localStorage.setItem("resposta-ex1", resposta);
  document.getElementById("resposta-salva").innerText = "Resposta salva!";
}
window.onload = () => {
  const salva = localStorage.getItem("resposta-ex1");
  if (salva) {
    document.getElementById("resposta-ex1").value = salva;
    document.getElementById("resposta-salva").innerText = "Resposta carregada.";
  }

  // Inicializa o bot
  document.getElementById("input-pizza").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      const input = event.target;
      const msg = input.value.trim();
      if (msg === "") return;
      const chat = document.getElementById("mensagens-pizza");
      chat.innerHTML += `<div><strong>Você:</strong> ${msg}</div>`;
      const resposta = responderBot(msg);
      chat.innerHTML += `<div><strong>Bot:</strong> ${resposta}</div>`;
      input.value = "";
      chat.scrollTop = chat.scrollHeight;
    }
  });
};

// Simulação simples de bot
function responderBot(msg) {
  msg = msg.toLowerCase();
  if (msg.includes("oi") || msg.includes("olá")) return "Olá! Deseja ver o cardápio?";
  if (msg.includes("cardápio")) return "Temos pizza de calabresa, frango e marguerita. Qual você prefere?";
  if (msg.includes("calabresa")) return "Pizza de calabresa adicionada ao pedido.";
  if (msg.includes("frango")) return "Pizza de frango adicionada ao pedido.";
  if (msg.includes("não")) return "Pedido finalizado. Obrigado!";
  return "Desculpe, não entendi. Poderia repetir?";
}
