document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Evita que a página recarregue
            event.preventDefault();

            // Pega o nome digitado para personalizar a mensagem
            const nomeInput = document.getElementById('nome').value;
            const statusDiv = document.getElementById('formStatus');

            // Simula o envio
            statusDiv.style.color = '#2E7D32'; // Cor verde
            statusDiv.innerHTML = `Obrigado, ${nomeInput}! Sua mensagem foi enviada com sucesso para a equipe Agrinho 2026. 🌱`;

            // Limpa o formulário
            contactForm.reset();

            // Apaga a mensagem depois de 5 segundos
            setTimeout(() => {
                statusDiv.innerHTML = '';
            }, 5000);
        });
    }
});
