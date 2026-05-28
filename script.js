// Botão na página inicial
const botao = document.getElementById("btnMensagem");

if (botao) {
  botao.addEventListener("click", () => {
    alert("🌱 Bem-vindo ao projeto Agrinho 2026!");
  });
}

// Efeito de aparecer os cards ao rolar
const cards = document.querySelectorAll(".card");

if (cards.length > 0) {
  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s";
  });

  window.addEventListener("scroll", () => {
    cards.forEach(card => {
      const posicao = card.getBoundingClientRect().top;
      if (posicao < window.innerHeight - 100) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  });
}

// Formulário de contato
const form = document.getElementById("formContato");

if(form){
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const resposta = document.getElementById("resposta");
    resposta.innerHTML = "✅ Mensagem enviada com sucesso!";

    form.reset();
  });
}
