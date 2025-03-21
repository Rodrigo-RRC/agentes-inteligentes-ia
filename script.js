// script.js

function mostrarExercicio(id) {
  const div = document.getElementById(id);
  div.style.display = div.style.display === 'block' ? 'none' : 'block';
}

function salvarResposta(id) {
  const textarea = document.querySelector(`#${id} textarea`);
  const resposta = textarea.value;
  if (resposta.trim() === '') {
    alert("Por favor, escreva sua resposta.");
    return;
  }
  alert("Resposta salva! (simulação)");
}

// Simulação de bots simples (pizzaria, imóvel, clínica)
const respostasBots = {
  pizza: {
    oi: "Olá! Bem-vindo à Pizzaria Rodrigo. Deseja ver o cardápio?",
    cardápio: "Temos pizza de calabresa, portuguesa e frango com catupiry. Qual você deseja?",
    calabresa: "Pizza de calabresa adicionada ao pedido. Deseja mais alguma coisa?",
    não: "Pedido finalizado. Obrigado!"
  },
  imob: {
    oi: "Olá! Sou o assistente virtual da imobiliária. Quer saber sobre qual imóvel?",
    apartamento: "Apartamento com 3 quartos, 2 banheiros e varanda. Valor: R$ 350 mil.",
    localização: "Está localizado no bairro Manaíra, João Pessoa - PB.",
    agendar: "Posso agendar uma visita para você. Qual dia e horário prefere?"
  },
  med: {
    oi: "Olá! Sou a assistente da Clínica Vida. Como posso ajudar?",
    consulta: "Com qual especialidade você deseja marcar a consulta?",
    cardiologia: "Consulta com cardiologista disponível na quarta às 10h. Confirmar?",
    sim: "Consulta agendada. Receberá confirmação por WhatsApp."
  }
};

function enviarMensagem(event, tipoBot) {
  if (event.key === "Enter") {
    const input = event.target;
    const mensagem = input.value.trim();
    if (mensagem === "") return;

    const chatId = `mensagens-${tipoBot}`;
    const areaChat = document.getElementById(chatId);
    areaChat.innerHTML += `<div><strong>Você:</strong> ${mensagem}</div>`;

    const chave = mensagem.toLowerCase();
    const resposta = respostasBots[tipoBot][chave] || "Desculpe, não entendi. Pode repetir?";
    areaChat.innerHTML += `<div><strong>Bot:</strong> ${resposta}</div>`;

    input.value = "";
    areaChat.scrollTop = areaChat.scrollHeight;
  }
}
