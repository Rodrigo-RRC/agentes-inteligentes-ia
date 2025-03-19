// script.js

// Função para alternar a visualização dos exercícios
function toggleExercicio(modulo) {
  var divExercicio = document.getElementById('exercicio-' + modulo);
  if (divExercicio.style.display === "none" || divExercicio.style.display === "") {
    divExercicio.style.display = "block";
  } else {
    divExercicio.style.display = "none";
  }
}

// Função para simular o salvamento da resposta do exercício
function salvarExercicio(modulo) {
  var textarea = document.querySelector('#exercicio-' + modulo + ' textarea');
  var resposta = textarea.value;
  if (resposta.trim() === "") {
    alert("Por favor, preencha sua resposta.");
  } else {
    alert("Resposta salva! (Simulação)");
    // Aqui você pode adicionar código para enviar a resposta para um backend, se desejar.
  }
}
